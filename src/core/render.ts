// Themed terminal rendering primitives: color wrappers, boxes, swatches, ASCII paint.
import chalk from "chalk";
import type { BorderStyle, Theme } from "./types.js";

const HEX_RE = /^#?[0-9a-fA-F]{6}$/;

/** Returns a colorizer for the given hex; identity function on invalid input. */
export function hex(color: string): (s: string) => string {
  if (typeof color !== "string" || !HEX_RE.test(color.trim())) {
    return (s: string) => s;
  }
  const normalized = color.trim().startsWith("#")
    ? color.trim()
    : `#${color.trim()}`;
  try {
    const fn = chalk.hex(normalized);
    return (s: string) => fn(s);
  } catch {
    return (s: string) => s;
  }
}

interface BorderChars {
  tl: string;
  tr: string;
  bl: string;
  br: string;
  h: string;
  v: string;
}

export const BORDERS: Record<BorderStyle, BorderChars> = {
  single: { tl: "┌", tr: "┐", bl: "└", br: "┘", h: "─", v: "│" },
  double: { tl: "╔", tr: "╗", bl: "╚", br: "╝", h: "═", v: "║" },
  round: { tl: "╭", tr: "╮", bl: "╰", br: "╯", h: "─", v: "│" },
  bold: { tl: "┏", tr: "┓", bl: "┗", br: "┛", h: "━", v: "┃" },
  classic: { tl: "+", tr: "+", bl: "+", br: "+", h: "-", v: "|" },
  arrow: { tl: "▛", tr: "▜", bl: "▙", br: "▟", h: "▀", v: "█" },
};

/** Strip ANSI escape codes to measure visible width. */
function visibleLength(s: string): number {
  // eslint-disable-next-line no-control-regex
  return s.replace(/\x1b\[[0-9;]*m/g, "").length;
}

function padTo(s: string, width: number): string {
  const len = visibleLength(s);
  if (len >= width) return s;
  return s + " ".repeat(width - len);
}

/** Render a themed bordered box around the given lines. */
export function box(
  lines: string[],
  opts: { theme: Theme; title?: string; width?: number },
): string {
  const { theme, title } = opts;
  const safeLines = Array.isArray(lines) ? lines : [];
  const chars = BORDERS[theme.borderStyle] ?? BORDERS.single;
  const paintBorder = hex(theme.colors.border);
  const paintTitle = hex(theme.colors.accent);

  const contentWidth = Math.max(
    opts.width ?? 0,
    title ? visibleLength(title) + 2 : 0,
    ...safeLines.map(visibleLength),
    1,
  );

  const out: string[] = [];

  if (title) {
    const label = ` ${title} `;
    const fill = chars.h.repeat(Math.max(0, contentWidth - visibleLength(label) + 2));
    out.push(
      paintBorder(chars.tl) +
        paintTitle(label) +
        paintBorder(fill + chars.tr),
    );
  } else {
    out.push(paintBorder(chars.tl + chars.h.repeat(contentWidth + 2) + chars.tr));
  }

  for (const line of safeLines) {
    out.push(
      paintBorder(chars.v) +
        " " +
        padTo(line, contentWidth) +
        " " +
        paintBorder(chars.v),
    );
  }

  out.push(paintBorder(chars.bl + chars.h.repeat(contentWidth + 2) + chars.br));
  return out.join("\n");
}

/** A horizontal row of colored blocks for the theme's key tokens. */
export function swatch(theme: Theme): string {
  const c = theme.colors;
  const order = [
    c.primary,
    c.secondary,
    c.accent,
    c.success,
    c.error,
    c.warning,
  ];
  return order
    .map((color) => {
      if (typeof color !== "string" || !HEX_RE.test(color.trim())) return "  ";
      const norm = color.trim().startsWith("#") ? color.trim() : `#${color.trim()}`;
      try {
        return chalk.bgHex(norm)("  ");
      } catch {
        return "  ";
      }
    })
    .join("");
}

/** Color the theme's ASCII art, alternating primary/secondary per line. */
export function paintAscii(theme: Theme): string {
  const ascii = typeof theme.ascii === "string" ? theme.ascii : "";
  const primary = hex(theme.colors.primary);
  const secondary = hex(theme.colors.secondary);
  return ascii
    .split("\n")
    .map((line, i) => (i % 2 === 0 ? primary(line) : secondary(line)))
    .join("\n");
}
