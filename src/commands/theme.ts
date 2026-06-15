// Theme commands: set, list, random.

import chalk from "chalk";
import type { Theme } from "../core/types.js";
import {
  getTheme,
  listThemes,
  themesByGroup,
  randomTheme,
  GROUP_ORDER,
  GROUP_LABELS,
} from "../core/registry.js";
import { setTheme, getCurrentThemeId } from "../core/config.js";
import { hex, swatch, paintAscii } from "../core/render.js";
import { playFrames, omnitrixActivation, transition } from "../core/animation.js";

/** Levenshtein distance for nearest-id suggestion. */
function distance(a: string, b: string): number {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[a.length][b.length];
}

function nearestId(id: string): string | undefined {
  const ids = listThemes().map((t) => t.id);
  if (ids.length === 0) return undefined;
  return ids
    .map((candidate) => ({ candidate, d: distance(id, candidate) }))
    .sort((a, b) => a.d - b.d)[0]?.candidate;
}

export async function themeSet(id: string): Promise<void> {
  const theme = getTheme(id);
  if (!theme) {
    const suggestion = nearestId(id);
    console.error(chalk.hex("#ff5555")(`✖ Unknown theme: ${chalk.bold(id)}`));
    if (suggestion) {
      console.error(chalk.gray(`  Did you mean ${chalk.hex("#50fa7b")(suggestion)}?`));
    }
    console.error(chalk.gray(`  Run ${chalk.bold("omnitrix theme list")} to see all themes.`));
    return;
  }
  setTheme(theme.id);
  await transition(theme);
  console.log(paintAscii(theme));
  console.log(swatch(theme));
}

export function themeList(): void {
  const current = getCurrentThemeId();
  const grouped = themesByGroup();
  for (const group of GROUP_ORDER) {
    const themes = grouped[group] ?? [];
    if (themes.length === 0) continue;
    const label = GROUP_LABELS[group] ?? group;
    console.log("");
    console.log(chalk.bold.underline(label));
    for (const t of themes) {
      const marker = t.id === current ? hex(t.colors.accent)("►") : " ";
      const glyph = hex(t.colors.primary)(t.glyph);
      const name = hex(t.colors.text)(t.name.padEnd(18));
      const idText = chalk.gray(t.id.padEnd(16));
      console.log(`${marker} ${glyph} ${name} ${idText} ${swatch(t)}`);
    }
  }
  console.log("");
}

export async function themeRandom(): Promise<void> {
  const theme: Theme = randomTheme();
  await playFrames(omnitrixActivation(theme));
  await themeSet(theme.id);
}
