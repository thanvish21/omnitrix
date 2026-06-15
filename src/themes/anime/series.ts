import type { Theme } from "../../core/types.js";

const animeThemes: Theme[] = [
  {
    id: "naruto",
    name: "Naruto",
    group: "anime",
    colors: {
      primary: "#F77F00",
      secondary: "#1A1A1A",
      accent: "#FFB347",
      background: "#15100A",
      text: "#FFF3E0",
      border: "#F77F00",
      success: "#7FB069",
      error: "#D7263D",
      warning: "#FFB347",
    },
    ascii: ` _  _   _   ___ _   _ _____ ___
| \\| | /_\\ | _ \\ | | |_   _/ _ \\
| .\` |/ _ \\|   / |_| | | || (_) |
|_|\\_/_/ \\_\\_|_\\\\___/  |_| \\___/`,
    glyph: "🍥",
    borderStyle: "bold",
    statusIcons: { ok: "✓", busy: "◑", idle: "·", error: "✗", bullet: "▸" },
  },
  {
    id: "dragon-ball-z",
    name: "Dragon Ball Z",
    group: "anime",
    colors: {
      primary: "#F2A100",
      secondary: "#3FA7D6",
      accent: "#FFD700",
      background: "#120E06",
      text: "#FFF6DC",
      border: "#F2A100",
      success: "#7FB069",
      error: "#D7263D",
      warning: "#FFD700",
    },
    ascii: ` ___  ___  ____    ____
|   \\| _ ) |_  /   |_  /
| |) | _ \\  / /     / /
|___/|___/ /___|   /___|`,
    glyph: "🐉",
    borderStyle: "bold",
    statusIcons: { ok: "★", busy: "◔", idle: "·", error: "✗", bullet: "▸" },
  },
  {
    id: "one-piece",
    name: "One Piece",
    group: "anime",
    colors: {
      primary: "#D7263D",
      secondary: "#E6B800",
      accent: "#F5C26B",
      background: "#130A0C",
      text: "#FFF1E6",
      border: "#D7263D",
      success: "#5BB85B",
      error: "#D7263D",
      warning: "#E6B800",
    },
    ascii: `  ___  _  _ ___   ___ ___ ___ ___ ___
 / _ \\| \\| | __| | _ \\_ _| __/ __| __|
| (_) | .\` | _|  |  _/| || _| (__| _|
 \\___/|_|\\_|___| |_| |___|___\\___|___|`,
    glyph: "🏴‍☠️",
    borderStyle: "classic",
    statusIcons: { ok: "✓", busy: "◑", idle: "·", error: "☠", bullet: "•" },
  },
  {
    id: "attack-on-titan",
    name: "Attack on Titan",
    group: "anime",
    colors: {
      primary: "#5A6B3B",
      secondary: "#8B5A2B",
      accent: "#C2B280",
      background: "#0C0E08",
      text: "#E8E4D6",
      border: "#5A6B3B",
      success: "#7A8C4E",
      error: "#9A2B2B",
      warning: "#C9A227",
    },
    ascii: `  ___  ___ _____
 / _ \\/ _ \\_   _|   wings
| (_) |(_) || |     of
 \\___/\\___/ |_|     freedom`,
    glyph: "⚔",
    borderStyle: "double",
    statusIcons: { ok: "✓", busy: "◐", idle: "·", error: "✗", bullet: "▸" },
  },
  {
    id: "demon-slayer",
    name: "Demon Slayer",
    group: "anime",
    colors: {
      primary: "#1A1A1A",
      secondary: "#D7263D",
      accent: "#3FB8AF",
      background: "#0B0608",
      text: "#F5ECEC",
      border: "#D7263D",
      success: "#54C6A4",
      error: "#D7263D",
      warning: "#E6A23C",
    },
    ascii: ` ___  ___ __  __  ___  _  _
|   \\| __|  \\/  |/ _ \\| \\| |
| |) | _|| |\\/| | (_) | .\` |
|___/|___|_|  |_|\\___/|_|\\_| slayer`,
    glyph: "🔥",
    borderStyle: "bold",
    statusIcons: { ok: "✓", busy: "◑", idle: "·", error: "✗", bullet: "❯" },
  },
  {
    id: "my-hero-academia",
    name: "My Hero Academia",
    group: "anime",
    colors: {
      primary: "#D7263D",
      secondary: "#3FA84E",
      accent: "#F2C14E",
      background: "#100A0B",
      text: "#FFF0F0",
      border: "#D7263D",
      success: "#3FA84E",
      error: "#D7263D",
      warning: "#F2C14E",
    },
    ascii: ` ___ _    _   _ ___    _   ___ ___ _   _
| _ \\ |  | | | / __|  | | | | | | | | | | UA
|  _/ |__| |_| \\__ \\  | |_| | | | |_| |
|_| |____|\\___/|___/   \\___/|___|\\___/`,
    glyph: "💥",
    borderStyle: "bold",
    statusIcons: { ok: "★", busy: "◑", idle: "·", error: "✗", bullet: "▸" },
  },
  {
    id: "jujutsu-kaisen",
    name: "Jujutsu Kaisen",
    group: "anime",
    colors: {
      primary: "#6A3FB8",
      secondary: "#3F6BB8",
      accent: "#9B6BFF",
      background: "#0A0712",
      text: "#ECE6FA",
      border: "#6A3FB8",
      success: "#54A6C6",
      error: "#C0392B",
      warning: "#E6A23C",
    },
    ascii: `   ___ _ _   _ _____ ___ _   _
  | _ \\ | | | |_   _/ __| | | |
  |  _/ |_| | | || (_ | |_| |
 _|_| \\___/  |_| \\___|\\___/ JK`,
    glyph: "👁",
    borderStyle: "double",
    statusIcons: { ok: "◆", busy: "◈", idle: "·", error: "✗", bullet: "•" },
  },
  {
    id: "bleach",
    name: "Bleach",
    group: "anime",
    colors: {
      primary: "#1A1A1A",
      secondary: "#F5F5F5",
      accent: "#E6552E",
      background: "#0A0A0A",
      text: "#F5F5F5",
      border: "#F5F5F5",
      success: "#7FB069",
      error: "#E6552E",
      warning: "#E6B800",
    },
    ascii: ` ___ _    ___   _   ___ _  _
| _ ) |  | __| /_\\ / __| || |
| _ \\ |__| _| / _ \\ (__| __ |
|___/____|___/_/ \\_\\___|_||_|`,
    glyph: "⚔",
    borderStyle: "single",
    statusIcons: { ok: "✓", busy: "◐", idle: "·", error: "✗", bullet: "—" },
  },
  {
    id: "fullmetal-alchemist",
    name: "Fullmetal Alchemist",
    group: "anime",
    colors: {
      primary: "#E6B800",
      secondary: "#7A1F1F",
      accent: "#C0392B",
      background: "#120A08",
      text: "#FBF1DA",
      border: "#E6B800",
      success: "#8FA95E",
      error: "#9A2B2B",
      warning: "#E6B800",
    },
    ascii: ` ___ __  __   _
| __|  \\/  | /_\\    alchemist
| _|| |\\/| |/ _ \\
|_| |_|  |_/_/ \\_\\`,
    glyph: "⚗",
    borderStyle: "classic",
    statusIcons: { ok: "✓", busy: "⟳", idle: "·", error: "✗", bullet: "▸" },
  },
  {
    id: "sword-art-online",
    name: "Sword Art Online",
    group: "anime",
    colors: {
      primary: "#3F8FE0",
      secondary: "#1A1A2E",
      accent: "#7FC8FF",
      background: "#070A14",
      text: "#E6F1FF",
      border: "#3F8FE0",
      success: "#54C6A4",
      error: "#D7263D",
      warning: "#E6B800",
    },
    ascii: ` ___    _    ___
/ __|  /_\\  / _ \\    link
\\__ \\ / _ \\| (_) |   start
|___/_/ \\_\\\\___/`,
    glyph: "🗡",
    borderStyle: "arrow",
    statusIcons: { ok: "▸", busy: "◆", idle: "·", error: "✗", bullet: "»" },
  },
  {
    id: "hunter-x-hunter",
    name: "Hunter x Hunter",
    group: "anime",
    colors: {
      primary: "#2FB8A6",
      secondary: "#1A1A1A",
      accent: "#7FE0D4",
      background: "#08120F",
      text: "#E6FAF6",
      border: "#2FB8A6",
      success: "#2FB8A6",
      error: "#D7263D",
      warning: "#E6B800",
    },
    ascii: ` _  _ __  __ _  _
| || |\\ \\/ /| || |   hunter
| __ | >  < | __ |
|_||_|/_/\\_\\|_||_|`,
    glyph: "✦",
    borderStyle: "single",
    statusIcons: { ok: "✓", busy: "◑", idle: "·", error: "✗", bullet: "▸" },
  },
  {
    id: "death-note",
    name: "Death Note",
    group: "anime",
    colors: {
      primary: "#1A1A1A",
      secondary: "#D7263D",
      accent: "#8C8C8C",
      background: "#070707",
      text: "#EDEDED",
      border: "#D7263D",
      success: "#6B8C5E",
      error: "#D7263D",
      warning: "#C9A227",
    },
    ascii: ` ___  ___   _ _____ _  _
|   \\| __| /_\\_   _| || |
| |) | _| / _ \\| | | __ |
|___/|___/_/ \\_\\_| |_||_| NOTE`,
    glyph: "📓",
    borderStyle: "double",
    statusIcons: { ok: "✓", busy: "◐", idle: "·", error: "☠", bullet: "•" },
  },
  {
    id: "one-punch-man",
    name: "One Punch Man",
    group: "anime",
    colors: {
      primary: "#F2C14E",
      secondary: "#1A1A1A",
      accent: "#FFD93B",
      background: "#14110A",
      text: "#FFF8E1",
      border: "#F2C14E",
      success: "#A6C44E",
      error: "#D7263D",
      warning: "#FFD93B",
    },
    ascii: `  ___  ___ __  __
 / _ \\| _ \\  \\/  |   ok.
| (_) |  _/ |\\/| |
 \\___/|_| |_|  |_|`,
    glyph: "👊",
    borderStyle: "single",
    statusIcons: { ok: "✓", busy: "·", idle: "·", error: "✗", bullet: "—" },
  },
  {
    id: "chainsaw-man",
    name: "Chainsaw Man",
    group: "anime",
    colors: {
      primary: "#B11226",
      secondary: "#E68A2E",
      accent: "#FF4D4D",
      background: "#0C0606",
      text: "#FBE9E9",
      border: "#B11226",
      success: "#7FB069",
      error: "#B11226",
      warning: "#E68A2E",
    },
    ascii: `  ___ _  _   _   ___ _  _
 / __| || | /_\\ |_ _| \\| |
| (__| __ |/ _ \\ | || .\` |  saw
 \\___|_||_/_/ \\_\\___|_|\\_|`,
    glyph: "🪚",
    borderStyle: "bold",
    statusIcons: { ok: "✓", busy: "◑", idle: "·", error: "☠", bullet: "▸" },
  },
];

export default animeThemes;
