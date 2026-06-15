// Read-only observer of AI coding agent sessions (Claude Code, Codex, OpenCode).
// Never throws: every source is isolated in try/catch and falls back to empty.

import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export interface AgentSession {
  tool: string;
  label: string;
  project: string;
  state: "busy" | "idle" | "error" | "ok";
  lastActivity: number;
}

const BUSY_THRESHOLD_MS = 60_000;
const MAX_SESSIONS = 50;
const MAX_DEPTH = 3;

/** Recursively collect files up to a depth limit. Errors are swallowed. */
function walk(dir: string, depth: number, acc: string[]): void {
  if (depth > MAX_DEPTH || acc.length >= MAX_SESSIONS * 4) return;
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    try {
      if (entry.isDirectory()) {
        walk(full, depth + 1, acc);
      } else if (entry.isFile()) {
        acc.push(full);
      }
    } catch {
      // ignore unreadable entry
    }
  }
}

function mtime(file: string): number {
  try {
    return fs.statSync(file).mtimeMs;
  } catch {
    return 0;
  }
}

function stateFor(lastActivity: number): AgentSession["state"] {
  if (lastActivity <= 0) return "idle";
  return Date.now() - lastActivity < BUSY_THRESHOLD_MS ? "busy" : "idle";
}

function dirExists(p: string): boolean {
  try {
    return fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
}

/** Claude Code: ~/.claude/projects/<project>/**.jsonl */
function scanClaude(home: string): AgentSession[] {
  const root = path.join(home, ".claude", "projects");
  if (!dirExists(root)) return [];
  const out: AgentSession[] = [];
  let projects: fs.Dirent[];
  try {
    projects = fs.readdirSync(root, { withFileTypes: true });
  } catch {
    return [];
  }
  for (const proj of projects) {
    if (!proj.isDirectory()) continue;
    const projDir = path.join(root, proj.name);
    const files: string[] = [];
    walk(projDir, 0, files);
    const jsonl = files.filter((f) => f.endsWith(".jsonl"));
    if (jsonl.length === 0) continue;
    const last = jsonl.reduce((m, f) => Math.max(m, mtime(f)), 0);
    out.push({
      tool: "claude",
      label: path.basename(proj.name),
      project: proj.name,
      state: stateFor(last),
      lastActivity: last,
    });
  }
  return out;
}

/** Codex: ~/.codex/sessions/** */
function scanCodex(home: string): AgentSession[] {
  const root = path.join(home, ".codex", "sessions");
  if (!dirExists(root)) return [];
  const files: string[] = [];
  walk(root, 0, files);
  const byProject = new Map<string, number>();
  for (const f of files) {
    const rel = path.relative(root, f);
    const project = rel.split(path.sep)[0] ?? path.basename(f);
    byProject.set(project, Math.max(byProject.get(project) ?? 0, mtime(f)));
  }
  return [...byProject.entries()].map(([project, last]) => ({
    tool: "codex",
    label: path.basename(project),
    project,
    state: stateFor(last),
    lastActivity: last,
  }));
}

/** OpenCode: ~/.local/share/opencode/** or ~/.opencode/** */
function scanOpenCode(home: string): AgentSession[] {
  const roots = [
    path.join(home, ".local", "share", "opencode"),
    path.join(home, ".opencode"),
  ].filter(dirExists);
  if (roots.length === 0) return [];
  const byProject = new Map<string, number>();
  for (const root of roots) {
    const files: string[] = [];
    walk(root, 0, files);
    for (const f of files) {
      const rel = path.relative(root, f);
      const project = rel.split(path.sep)[0] ?? path.basename(f);
      byProject.set(project, Math.max(byProject.get(project) ?? 0, mtime(f)));
    }
  }
  return [...byProject.entries()].map(([project, last]) => ({
    tool: "opencode",
    label: path.basename(project),
    project,
    state: stateFor(last),
    lastActivity: last,
  }));
}

/** Discover all sessions across known sources. Always returns (possibly empty). */
export function discoverSessions(): AgentSession[] {
  const home = os.homedir();
  const sources: Array<(h: string) => AgentSession[]> = [
    scanClaude,
    scanCodex,
    scanOpenCode,
  ];
  const all: AgentSession[] = [];
  for (const source of sources) {
    try {
      all.push(...source(home));
    } catch {
      // isolate per-source failure
    }
  }
  return all
    .sort((a, b) => b.lastActivity - a.lastActivity)
    .slice(0, MAX_SESSIONS);
}

export function summarize(sessions: AgentSession[]): string {
  const parts = sessions.map((s) => `${s.label}@${s.tool}:${s.state}`);
  return `agents=[${parts.join(", ")}]`;
}
