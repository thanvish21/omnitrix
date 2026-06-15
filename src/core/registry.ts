// Theme registry: aggregates all theme arrays into a keyed ThemeMap and exposes lookups.
import type { Theme, ThemeGroup, ThemeMap } from "./types.js";

import aliens from "../themes/ben10/aliens.js";
import humans from "../themes/ben10/humans.js";
import villains from "../themes/ben10/villains.js";
import cartoonNetwork from "../themes/cartoon-network/shows.js";
import anime from "../themes/anime/series.js";

export const GROUP_ORDER: ThemeGroup[] = [
  "ben10-aliens",
  "ben10-humans",
  "ben10-villains",
  "cartoon-network",
  "anime",
];

export const GROUP_LABELS: Record<ThemeGroup, string> = {
  "ben10-aliens": "Ben 10 — Aliens",
  "ben10-humans": "Ben 10 — Humans",
  "ben10-villains": "Ben 10 — Villains",
  "cartoon-network": "Cartoon Network",
  anime: "Anime",
};

/** A theme is well-formed only if it has an id and a colors object. */
function isValidTheme(t: unknown): t is Theme {
  if (!t || typeof t !== "object") return false;
  const candidate = t as Partial<Theme>;
  return (
    typeof candidate.id === "string" &&
    candidate.id.length > 0 &&
    !!candidate.colors &&
    typeof candidate.colors === "object"
  );
}

/** Coerce a default import that may be undefined/non-array into a safe Theme[]. */
function safeArray(arr: unknown): Theme[] {
  if (!Array.isArray(arr)) return [];
  return arr.filter(isValidTheme);
}

const SOURCES: Theme[] = [
  ...safeArray(aliens),
  ...safeArray(humans),
  ...safeArray(villains),
  ...safeArray(cartoonNetwork),
  ...safeArray(anime),
];

function buildThemes(source: Theme[]): ThemeMap {
  const map: ThemeMap = {};
  for (const theme of source) {
    let key = theme.id;
    if (map[key]) {
      let suffix = 2;
      while (map[`${theme.id}-${suffix}`]) suffix++;
      key = `${theme.id}-${suffix}`;
      console.warn(
        `[omnitrix] duplicate theme id "${theme.id}" — registered as "${key}"`,
      );
    }
    map[key] = key === theme.id ? theme : { ...theme, id: key };
  }
  return map;
}

export const themes: ThemeMap = buildThemes(SOURCES);

export function getTheme(id: string): Theme | undefined {
  return themes[id];
}

export function listThemes(): Theme[] {
  return Object.values(themes);
}

export function themesByGroup(): Record<ThemeGroup, Theme[]> {
  const grouped = {
    "ben10-aliens": [],
    "ben10-humans": [],
    "ben10-villains": [],
    "cartoon-network": [],
    anime: [],
  } as Record<ThemeGroup, Theme[]>;
  for (const theme of listThemes()) {
    if (grouped[theme.group]) grouped[theme.group].push(theme);
  }
  return grouped;
}

export function randomTheme(): Theme {
  const all = listThemes();
  if (all.length === 0) {
    // Defensive fallback so callers never crash on an empty registry.
    return {
      id: "void",
      name: "Void",
      group: "ben10-aliens",
      colors: {
        primary: "#00ff00",
        secondary: "#00aa00",
        accent: "#ffffff",
        background: "#000000",
        text: "#e0e0e0",
        border: "#00ff00",
        success: "#00ff00",
        error: "#ff0000",
        warning: "#ffaa00",
      },
      ascii: "OMNITRIX",
      glyph: "◉",
      borderStyle: "round",
      statusIcons: { ok: "✔", busy: "⏳", idle: "•", error: "✖", bullet: "▸" },
    };
  }
  const idx = Math.floor(Math.random() * all.length);
  return all[idx]!;
}
