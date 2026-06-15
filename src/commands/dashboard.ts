// `omnitrix dashboard` — one-shot themed status view of current theme + agents + OS.

import chalk from "chalk";
import os from "node:os";
import { getTheme, listThemes } from "../core/registry.js";
import type { Theme } from "../core/types.js";
import { getCurrentThemeId } from "../core/config.js";
import { hex, box, swatch, paintAscii } from "../core/render.js";
import { bigText } from "../core/figlet.js";
import { discoverSessions, type AgentSession } from "../watchers/agents.js";

function resolveTheme(): Theme {
  const id = getCurrentThemeId();
  return getTheme(id) ?? listThemes()[0];
}

function fmtUptime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return `${h}h ${m}m`;
}

function fmtGb(bytes: number): string {
  return `${(bytes / 1024 ** 3).toFixed(1)}GB`;
}

function stateIcon(theme: Theme, state: AgentSession["state"]): string {
  const icons = theme.statusIcons;
  switch (state) {
    case "busy":
      return icons.busy;
    case "idle":
      return icons.idle;
    case "error":
      return icons.error;
    default:
      return icons.ok;
  }
}

function sessionLines(theme: Theme, sessions: AgentSession[]): string[] {
  if (sessions.length === 0) {
    return [chalk.gray("  no active agent sessions detected")];
  }
  return sessions.slice(0, 12).map((s) => {
    const icon = hex(theme.colors.accent)(stateIcon(theme, s.state));
    const tool = hex(theme.colors.secondary)(s.tool.padEnd(9));
    const proj = hex(theme.colors.text)(s.label.padEnd(22));
    const st = hex(theme.colors.primary)(s.state);
    return `  ${icon} ${tool} ${proj} ${st}`;
  });
}

function osLines(theme: Theme): string[] {
  const p = (label: string, value: string): string =>
    `  ${hex(theme.colors.secondary)(label.padEnd(10))} ${hex(theme.colors.text)(value)}`;
  return [
    p("platform", `${os.platform()} ${os.arch()}`),
    p("cpus", String(os.cpus().length)),
    p("uptime", fmtUptime(os.uptime())),
    p("memory", `${fmtGb(os.totalmem() - os.freemem())} / ${fmtGb(os.totalmem())}`),
  ];
}

export async function dashboard(): Promise<void> {
  const theme = resolveTheme();
  const sessions = discoverSessions();

  console.log(hex(theme.colors.primary)(bigText("OMNITRIX")));
  console.log(paintAscii(theme));

  const groupLabel = theme.group;
  const lines: string[] = [
    `${hex(theme.colors.accent)(theme.glyph)} ${chalk.bold(theme.name)} ${chalk.gray(`(${theme.id})`)}`,
    chalk.gray(`group: ${groupLabel}`),
    swatch(theme),
    "",
    chalk.bold("Agents"),
    ...sessionLines(theme, sessions),
    "",
    chalk.bold("System"),
    ...osLines(theme),
  ];

  console.log(box(lines, { theme, title: "DASHBOARD" }));

  const hint = chalk.gray(
    "commands: theme set <id> · theme list · theme random · roll <n> · watch --loop",
  );
  console.log(hint);
}
