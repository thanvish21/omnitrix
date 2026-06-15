import type { Theme } from "../../core/types.js";

const villainThemes: Theme[] = [
  {
    id: "vilgax",
    name: "Vilgax",
    group: "ben10-villains",
    colors: {
      primary: "#1f6b4a",
      secondary: "#b3231f",
      accent: "#37c98a",
      background: "#050d0a",
      text: "#d6f0e2",
      border: "#16442f",
      success: "#2fae73",
      error: "#d6291f",
      warning: "#d9a23a",
    },
    ascii: `  \\===/
  (VILGAX)
   |||||
  conqueror`,
    glyph: "⨂",
    borderStyle: "bold",
    statusIcons: { ok: "⨂", busy: "⟳", idle: "○", error: "✖", bullet: "▪" },
  },
  {
    id: "hex",
    name: "Hex",
    group: "ben10-villains",
    colors: {
      primary: "#7d3cc4",
      secondary: "#e8e2d0",
      accent: "#b07fff",
      background: "#0c0714",
      text: "#e7dcf5",
      border: "#4d2680",
      success: "#7fcf9f",
      error: "#d6394f",
      warning: "#d9b24a",
    },
    ascii: `   /HEX\\
  | sigil |
   \\_†_/
  sorcerer`,
    glyph: "☥",
    borderStyle: "double",
    statusIcons: { ok: "☥", busy: "✶", idle: "·", error: "✖", bullet: "•" },
  },
  {
    id: "charmcaster",
    name: "Charmcaster",
    group: "ben10-villains",
    colors: {
      primary: "#d63caa",
      secondary: "#6a2f9e",
      accent: "#ff7fe0",
      background: "#120718",
      text: "#f6dcf2",
      border: "#7a2f8f",
      success: "#9f7fff",
      error: "#e0395f",
      warning: "#e0b04a",
    },
    ascii: `  *~CHARM~*
  ( spell )
  bag o'tricks
  *~~~~~~~*`,
    glyph: "✷",
    borderStyle: "round",
    statusIcons: { ok: "✷", busy: "✶", idle: "·", error: "✖", bullet: "•" },
  },
  {
    id: "kevin-11",
    name: "Kevin 11",
    group: "ben10-villains",
    colors: {
      primary: "#7a3fd6",
      secondary: "#1a1018",
      accent: "#b85cff",
      background: "#0b0610",
      text: "#e2d2f0",
      border: "#4a2680",
      success: "#7fd0a0",
      error: "#d62f3f",
      warning: "#d6a83a",
    },
    ascii: `  [X#@%!]
  [KEVIN 11]
  [chaos~~]
  [%!@#X]`,
    glyph: "⌖",
    borderStyle: "bold",
    statusIcons: { ok: "⌖", busy: "▰", idle: "▱", error: "✖", bullet: "▪" },
  },
  {
    id: "aggregor",
    name: "Aggregor",
    group: "ben10-villains",
    colors: {
      primary: "#c0392b",
      secondary: "#e07a2f",
      accent: "#ff9a4a",
      background: "#150805",
      text: "#f5dcc8",
      border: "#8f3320",
      success: "#7fae5f",
      error: "#e0392b",
      warning: "#f0a73a",
    },
    ascii: `  /==AGG==\\
  [ armor ]
  [ absorb]
  \\=======/`,
    glyph: "⛨",
    borderStyle: "bold",
    statusIcons: { ok: "⛨", busy: "⟳", idle: "○", error: "✖", bullet: "▪" },
  },
  {
    id: "khyber",
    name: "Khyber",
    group: "ben10-villains",
    colors: {
      primary: "#2f5d3a",
      secondary: "#e6dcc4",
      accent: "#5faf6f",
      background: "#070d09",
      text: "#dde8d6",
      border: "#1f3f28",
      success: "#4faf6f",
      error: "#c0392b",
      warning: "#cdaa4a",
    },
    ascii: `  >-KHYBER-<
  ( hunter )
   \\_bone_/
  >--------<`,
    glyph: "➷",
    borderStyle: "arrow",
    statusIcons: { ok: "➷", busy: "⟳", idle: "▹", error: "✖", bullet: "›" },
  },
  {
    id: "malware",
    name: "Malware",
    group: "ben10-villains",
    colors: {
      primary: "#7d2fc4",
      secondary: "#0a0a0a",
      accent: "#a05cff",
      background: "#060409",
      text: "#ddc8f0",
      border: "#3f1a66",
      success: "#7f5fcf",
      error: "#e0293f",
      warning: "#c89a3a",
    },
    ascii: `  [01MAL01]
  ]corrupt[
  [10WARE10]
  ]~glitch~[`,
    glyph: "⊠",
    borderStyle: "classic",
    statusIcons: { ok: "⊠", busy: "▦", idle: "▢", error: "✖", bullet: "▪" },
  },
  {
    id: "dr-psychobos",
    name: "Dr. Psychobos",
    group: "ben10-villains",
    colors: {
      primary: "#ff5fa2",
      secondary: "#2f9fb0",
      accent: "#ff8ec7",
      background: "#0a0710",
      text: "#f6d6e8",
      border: "#8f3f66",
      success: "#5fd0c8",
      error: "#e0395f",
      warning: "#d9b04a",
    },
    ascii: `   (~brain~)
  [PSYCHOBOS]
   <cyber++>
   (~~~~~~~)`,
    glyph: "❋",
    borderStyle: "double",
    statusIcons: { ok: "❋", busy: "✶", idle: "·", error: "✖", bullet: "•" },
  },
  {
    id: "zs-skayr",
    name: "Zs'Skayr",
    group: "ben10-villains",
    colors: {
      primary: "#0d0d0d",
      secondary: "#c0392b",
      accent: "#f0f0f0",
      background: "#040404",
      text: "#ededed",
      border: "#8f2920",
      success: "#9faf9f",
      error: "#d6291f",
      warning: "#c8aa4a",
    },
    ascii: `   .-~~~-.
  ( GHOST )
   \\_O_O_/
  Zs'Skayr`,
    glyph: "☠",
    borderStyle: "classic",
    statusIcons: { ok: "☠", busy: "⟳", idle: "○", error: "✖", bullet: "•" },
  },
  {
    id: "albedo",
    name: "Albedo",
    group: "ben10-villains",
    colors: {
      primary: "#d6291f",
      secondary: "#f0f0f0",
      accent: "#ff6b5f",
      background: "#0d0606",
      text: "#f5e2e0",
      border: "#8f2018",
      success: "#7faf7f",
      error: "#e0291f",
      warning: "#e0a83a",
    },
    ascii: `   ___
  ( - )  ALBEDO
   \\_/   negative
  /-X-\\`,
    glyph: "⊗",
    borderStyle: "round",
    statusIcons: { ok: "⊗", busy: "⟳", idle: "○", error: "✖", bullet: "▸" },
  },
];

export default villainThemes;
