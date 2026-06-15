// Terminal animation helpers: frame playback and the Omnitrix activation sequence.
import { hex } from "./render.js";
import type { Theme } from "./types.js";

const CLEAR = "\x1b[2J\x1b[H";

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/** Play a sequence of pre-rendered string frames at a given fps. */
export async function playFrames(
  frames: string[],
  opts: { fps?: number; loops?: number; clear?: boolean } = {},
): Promise<void> {
  const safeFrames = Array.isArray(frames) ? frames.filter((f) => typeof f === "string") : [];
  if (safeFrames.length === 0) return;

  const fps = opts.fps && opts.fps > 0 ? opts.fps : 12;
  const loops = opts.loops && opts.loops > 0 ? opts.loops : 1;
  const clear = opts.clear !== false;
  const delay = Math.round(1000 / fps);

  try {
    for (let loop = 0; loop < loops; loop++) {
      for (const frame of safeFrames) {
        if (clear) process.stdout.write(CLEAR);
        process.stdout.write(frame + "\n");
        await sleep(delay);
      }
    }
  } catch {
    // Never let an animation crash the app.
  }
}

/** ~8 hand-crafted frames of the Omnitrix dial spinning, ending on the glyph. */
export function omnitrixActivation(theme: Theme): string[] {
  const primary = hex(theme.colors.primary);
  const secondary = hex(theme.colors.secondary);
  const accent = hex(theme.colors.accent);
  const glyph = typeof theme.glyph === "string" && theme.glyph.length > 0 ? theme.glyph : "◉";

  const dial = (spinner: string, ring: (s: string) => string, core: string): string =>
    [
      ring("      .-\"\"\"\"\"-.      "),
      ring("    /  ") + accent(spinner) + ring("   ") + accent(spinner) + ring("  \\    "),
      ring("   |   ") + core + ring("   |   "),
      ring("    \\  ") + accent(spinner) + ring("   ") + accent(spinner) + ring("  /    "),
      ring("      '-.....-'      "),
    ].join("\n");

  return [
    dial("·", primary, secondary("░░░")),
    dial("•", primary, secondary("▒▒▒")),
    dial("◦", secondary, primary("▓▓▓")),
    dial("○", secondary, accent("███")),
    dial("◎", primary, accent("◉◉◉")),
    dial("●", secondary, primary("▓▓▓")),
    dial("◉", primary, secondary("▒▒▒")),
    [
      primary("      .-\"\"\"\"\"-.      "),
      primary("    /         \\    "),
      primary("   |    ") + accent(glyph) + primary("    |   "),
      primary("    \\         /    "),
      primary("      '-.....-'      "),
      "",
      accent(`        ${theme.name}`),
    ].join("\n"),
  ];
}

/** Quick green-flash wipe followed by the destination theme's name. */
export async function transition(toTheme: Theme): Promise<void> {
  const flash = hex("#00ff00");
  const accent = hex(toTheme.colors.accent);
  try {
    const cols = Math.max(20, Math.min(process.stdout.columns ?? 60, 80));
    const wipe = "█".repeat(cols);
    for (let i = 0; i < 3; i++) {
      process.stdout.write(CLEAR);
      process.stdout.write("\n".repeat(i + 1) + flash(wipe) + "\n");
      await sleep(60);
    }
    process.stdout.write(CLEAR);
    process.stdout.write(
      "\n  " + accent(`${toTheme.glyph ?? "◉"} ${toTheme.name}`) + "\n",
    );
  } catch {
    // Non-fatal cosmetic effect.
  }
}
