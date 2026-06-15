// FIGlet big-text rendering with a graceful plain-text fallback.
import figlet from "figlet";

const DEFAULT_FONT = "Standard";

/** Render text as FIGlet ASCII art; falls back to the raw text on any error. */
export function bigText(text: string, font: string = DEFAULT_FONT): string {
  const safe = typeof text === "string" ? text : "";
  try {
    return figlet.textSync(safe, { font: font as figlet.Fonts });
  } catch {
    try {
      return figlet.textSync(safe, { font: DEFAULT_FONT as figlet.Fonts });
    } catch {
      return safe;
    }
  }
}
