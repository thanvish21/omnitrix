// `omnitrix roll <n>` — cycle through the classic 21 Ben 10 aliens.

import chalk from "chalk";
import { getTheme } from "../core/registry.js";
import { hex, paintAscii, swatch } from "../core/render.js";

const CLASSIC_21: string[] = [
  "heatblast",
  "wildmutt",
  "diamondhead",
  "xlr8",
  "grey-matter",
  "four-arms",
  "stinkfly",
  "ripjaws",
  "upgrade",
  "ghostfreak",
  "cannonbolt",
  "wildvine",
  "blitzwolfer",
  "snare-oh",
  "frankenstrike",
  "upchuck",
  "ditto",
  "eye-guy",
  "way-big",
  "spitter",
  "benmummy",
];

const FRAME_MS = 2000;

function clampCount(n: number): number {
  if (!Number.isFinite(n)) return 1;
  return Math.max(1, Math.min(21, Math.trunc(n)));
}

const sleep = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

export async function roll(n: number): Promise<void> {
  const count = clampCount(n);
  const ids = CLASSIC_21.slice(0, count);
  for (const id of ids) {
    const theme = getTheme(id);
    if (!theme) continue; // skip missing ids gracefully
    process.stdout.write("\x1b[2J\x1b[H"); // clear screen + home cursor
    console.log(paintAscii(theme));
    console.log(chalk.bold(hex(theme.colors.primary)(`${theme.glyph} ${theme.name}`)));
    console.log(swatch(theme));
    await sleep(FRAME_MS);
  }
}
