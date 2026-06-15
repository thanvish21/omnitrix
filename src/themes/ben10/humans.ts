import type { Theme } from "../../core/types.js";

const humanThemes: Theme[] = [
  {
    id: "ben-tennyson",
    name: "Ben Tennyson",
    group: "ben10-humans",
    colors: {
      primary: "#3fe85f",
      secondary: "#0a0a0a",
      accent: "#9bff7d",
      background: "#061206",
      text: "#d9ffd9",
      border: "#2db84a",
      success: "#3fe85f",
      error: "#e53935",
      warning: "#f4c430",
    },
    ascii: `   ___
  ( o )   BEN 10
   \\_/    hero time
  /---\\`,
    glyph: "⌾",
    borderStyle: "round",
    statusIcons: { ok: "⌾", busy: "⟳", idle: "○", error: "✖", bullet: "▸" },
  },
  {
    id: "gwen-tennyson",
    name: "Gwen Tennyson",
    group: "ben10-humans",
    colors: {
      primary: "#3a7bd5",
      secondary: "#ff5fa2",
      accent: "#ff8ec7",
      background: "#070b16",
      text: "#dfe9ff",
      border: "#2c5fa8",
      success: "#5fd0ff",
      error: "#e5396b",
      warning: "#f4b942",
    },
    ascii: `  *  .  *
 .  GWEN  .
  ( mana )
 *  .  *  .`,
    glyph: "✶",
    borderStyle: "single",
    statusIcons: { ok: "✦", busy: "✶", idle: "·", error: "✖", bullet: "•" },
  },
  {
    id: "kevin-levin",
    name: "Kevin Levin",
    group: "ben10-humans",
    colors: {
      primary: "#5a5f66",
      secondary: "#1c1f24",
      accent: "#9aa0a8",
      background: "#0d0f12",
      text: "#c9ced4",
      border: "#3a3f46",
      success: "#7fbf7f",
      error: "#c0392b",
      warning: "#caa84a",
    },
    ascii: `  [##====]
  | KEVIN |
  [absorb]
  [##====]`,
    glyph: "⬢",
    borderStyle: "bold",
    statusIcons: { ok: "⬢", busy: "▰", idle: "▱", error: "✖", bullet: "▪" },
  },
  {
    id: "grandpa-max",
    name: "Grandpa Max",
    group: "ben10-humans",
    colors: {
      primary: "#c0392b",
      secondary: "#c8a06a",
      accent: "#e6c089",
      background: "#160c08",
      text: "#f0e2cf",
      border: "#8f4034",
      success: "#6fae5f",
      error: "#d63b2a",
      warning: "#e0a93f",
    },
    ascii: `  .-----.
  | MAX  |  plumber
  '--+--'
   PLUMBERS`,
    glyph: "✚",
    borderStyle: "classic",
    statusIcons: { ok: "✚", busy: "⟳", idle: "○", error: "✖", bullet: "•" },
  },
  {
    id: "rook-blonko",
    name: "Rook Blonko",
    group: "ben10-humans",
    colors: {
      primary: "#2f6fd6",
      secondary: "#0c0f14",
      accent: "#62b0ff",
      background: "#05080f",
      text: "#d6e6ff",
      border: "#234e96",
      success: "#4fd0c0",
      error: "#e0413f",
      warning: "#e8b14a",
    },
    ascii: `  >>--ROOK--<<
  [ proto ]
  [ tool  ]
  >>------<<`,
    glyph: "➤",
    borderStyle: "arrow",
    statusIcons: { ok: "➤", busy: "⟳", idle: "▹", error: "✖", bullet: "›" },
  },
];

export default humanThemes;
