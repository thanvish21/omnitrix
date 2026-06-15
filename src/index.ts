#!/usr/bin/env node
// omnitrix CLI entrypoint. Manual argv parsing, no extra deps.

import chalk from "chalk";
import { getTheme, listThemes } from "./core/registry.js";
import { getCurrentThemeId } from "./core/config.js";
import { hex, swatch, paintAscii } from "./core/render.js";
import { dashboard } from "./commands/dashboard.js";
import { themeSet, themeList, themeRandom } from "./commands/theme.js";
import { roll } from "./commands/roll.js";
import { discoverSessions, summarize } from "./watchers/agents.js";

function currentTheme() {
  return getTheme(getCurrentThemeId()) ?? listThemes()[0];
}

function printCurrent(): void {
  const theme = currentTheme();
  if (!theme) {
    console.log(chalk.gray("no theme configured"));
    return;
  }
  console.log(paintAscii(theme));
  console.log(
    `${hex(theme.colors.accent)(theme.glyph)} ${chalk.bold(theme.name)} ${chalk.gray(`(${theme.id})`)} · ${theme.group}`,
  );
  console.log(swatch(theme));
}

function printHelp(): void {
  const theme = currentTheme();
  const accent = (s: string) => (theme ? hex(theme.colors.accent)(s) : chalk.cyan(s));
  const head = (s: string) => (theme ? chalk.bold(hex(theme.colors.primary)(s)) : chalk.bold(s));
  console.log(head("\nomnitrix — themed terminal dashboard\n"));
  console.log(`  ${accent("omnitrix")}                 open the dashboard (default)`);
  console.log(`  ${accent("omnitrix dashboard")}       open the dashboard`);
  console.log(`  ${accent("omnitrix theme set <id>")}  switch to a theme`);
  console.log(`  ${accent("omnitrix theme list")}      list all themes by group`);
  console.log(`  ${accent("omnitrix theme random")}    pick a random theme`);
  console.log(`  ${accent("omnitrix theme current")}   show the active theme`);
  console.log(`  ${accent("omnitrix roll <n>")}        cycle the first n classic aliens`);
  console.log(`  ${accent("omnitrix watch [--loop]")}  summarize agent sessions`);
  console.log(`  ${accent("omnitrix --help")}          show this help`);
  console.log(
    chalk.gray("\nAuto-watches Claude Code, Codex and OpenCode sessions (read-only).\n"),
  );
}

async function watch(loop: boolean): Promise<void> {
  let last = summarize(discoverSessions());
  console.log(last);
  if (!loop) return;
  setInterval(() => {
    try {
      const next = summarize(discoverSessions());
      if (next !== last) {
        last = next;
        console.log(next);
      }
    } catch {
      // never crash the loop
    }
  }, 1000);
}

async function run(argv: string[]): Promise<void> {
  const [cmd, sub, ...rest] = argv;

  if (cmd === "--help" || cmd === "-h") return printHelp();

  if (!cmd || cmd === "dashboard") return dashboard();

  if (cmd === "theme") {
    switch (sub) {
      case "set": {
        const id = rest[0];
        if (!id) {
          console.error(chalk.hex("#ff5555")("✖ Usage: omnitrix theme set <id>"));
          return;
        }
        return themeSet(id);
      }
      case "list":
        return themeList();
      case "random":
        return themeRandom();
      case "current":
        return printCurrent();
      default:
        return printHelp();
    }
  }

  if (cmd === "roll") {
    return roll(parseInt(sub ?? "", 10));
  }

  if (cmd === "watch") {
    const loop = [sub, ...rest].includes("--loop");
    return watch(loop);
  }

  printHelp();
}

run(process.argv.slice(2)).catch((err: unknown) => {
  const msg = err instanceof Error ? err.message : String(err);
  console.error(chalk.hex("#ff5555")(`✖ ${msg}`));
  process.exitCode = 1;
});
