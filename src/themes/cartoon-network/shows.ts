import type { Theme } from "../../core/types.js";

const showThemes: Theme[] = [
  {
    id: "adventure-time",
    name: "Adventure Time",
    group: "cartoon-network",
    colors: {
      primary: "#F2C14E",
      secondary: "#3FA7D6",
      accent: "#F77F00",
      background: "#1A2238",
      text: "#FDF6E3",
      border: "#3FA7D6",
      success: "#7FB069",
      error: "#D7263D",
      warning: "#F2C14E",
    },
    ascii: `  _   _  ___ ___  _____
 / \\ |~|/  _|_ _|/  _  \\
| O || |\\_  \\| || (_) |
 \\_/ |_|/___/|_||_| |_|`,
    glyph: "🗡",
    borderStyle: "round",
    statusIcons: { ok: "★", busy: "◔", idle: "☾", error: "✗", bullet: "•" },
  },
  {
    id: "regular-show",
    name: "Regular Show",
    group: "cartoon-network",
    colors: {
      primary: "#5C7A99",
      secondary: "#7A5230",
      accent: "#9BB8D3",
      background: "#1C232B",
      text: "#E8ECEF",
      border: "#5C7A99",
      success: "#6AA84F",
      error: "#B33A3A",
      warning: "#D9A441",
    },
    ascii: `  ___ ___ ___ _   _ _      _   ___
 | _ \\ __/ __| | | | |    /_\\ | _ \\
 |   / _| (_ | |_| | |__ / _ \\|   /
 |_|_\\___\\___|\\___/|____/_/ \\_\\_|_\\`,
    glyph: "☕",
    borderStyle: "classic",
    statusIcons: { ok: "✓", busy: "◑", idle: "·", error: "✗", bullet: "◦" },
  },
  {
    id: "steven-universe",
    name: "Steven Universe",
    group: "cartoon-network",
    colors: {
      primary: "#E84A8A",
      secondary: "#3FB8AF",
      accent: "#F6C1D8",
      background: "#221033",
      text: "#FCEEF5",
      border: "#E84A8A",
      success: "#54C6A4",
      error: "#E0436B",
      warning: "#F2A65A",
    },
    ascii: `   __ _____ _____ _   _ ___ _  _
  / _\\_   _| __\\ \\ / /__| \\| |
  \\__ \\| | | _| \\ V /| -_| .\` |
  |___/|_| |___| \\_/ |___|_|\\_|`,
    glyph: "💎",
    borderStyle: "round",
    statusIcons: { ok: "◆", busy: "◈", idle: "◇", error: "✗", bullet: "•" },
  },
  {
    id: "gumball",
    name: "The Amazing World of Gumball",
    group: "cartoon-network",
    colors: {
      primary: "#6FCBE8",
      secondary: "#F5A6C9",
      accent: "#FCE38A",
      background: "#202840",
      text: "#FFF7FB",
      border: "#A0E7A0",
      success: "#9BE39B",
      error: "#FF6B8A",
      warning: "#FFD86B",
    },
    ascii: ` ___ _   _ __  __ ___   _   _    _
 / __| | | |  \\/  | _ ) /_\\ | |  | |
| (_ | |_| | |\\/| | _ \\/ _ \\| |__| |__
 \\___|\\___/|_|  |_|___/_/ \\_\\____|____|`,
    glyph: "🐱",
    borderStyle: "round",
    statusIcons: { ok: "✓", busy: "◕", idle: "○", error: "✗", bullet: "•" },
  },
  {
    id: "powerpuff-girls",
    name: "The Powerpuff Girls",
    group: "cartoon-network",
    colors: {
      primary: "#F25C9C",
      secondary: "#5BC8F2",
      accent: "#7FD957",
      background: "#1F1426",
      text: "#FFF0F7",
      border: "#F25C9C",
      success: "#7FD957",
      error: "#F2425C",
      warning: "#F2C14E",
    },
    ascii: `  ___  ___  ___
 | _ \\| _ \\/ __|
 |  _/|  _/| (_ |
 |_|  |_|   \\___| ~ sugar+spice`,
    glyph: "✨",
    borderStyle: "round",
    statusIcons: { ok: "★", busy: "◔", idle: "○", error: "✗", bullet: "♥" },
  },
  {
    id: "dexter-lab",
    name: "Dexter's Laboratory",
    group: "cartoon-network",
    colors: {
      primary: "#D7263D",
      secondary: "#F5F5F5",
      accent: "#3FA7D6",
      background: "#15171C",
      text: "#F0F0F0",
      border: "#D7263D",
      success: "#4CAF50",
      error: "#D7263D",
      warning: "#E6B800",
    },
    ascii: ` ___  _____  _____ ___
|   \\| __\\ \\/ /_   _| _ \\
| |) | _| >  <  | | |   /
|___/|___/_/\\_\\ |_| |_|_\\`,
    glyph: "⚗",
    borderStyle: "single",
    statusIcons: { ok: "✓", busy: "⟳", idle: "·", error: "✗", bullet: "▸" },
  },
  {
    id: "courage-cowardly-dog",
    name: "Courage the Cowardly Dog",
    group: "cartoon-network",
    colors: {
      primary: "#6A2C70",
      secondary: "#E84393",
      accent: "#B83B5E",
      background: "#0E0A12",
      text: "#EADCE7",
      border: "#6A2C70",
      success: "#7A9E5E",
      error: "#B83B5E",
      warning: "#C9A227",
    },
    ascii: `  ___ ___  _   _ ___    _   ___ ___
 / __/ _ \\| | | | _ \\  /_\\ / __| __|
| (_| (_) | |_| |   / / _ \\ (_ | _|
 \\___\\___/ \\___/|_|_\\/_/ \\_\\___|___|`,
    glyph: "👁",
    borderStyle: "double",
    statusIcons: { ok: "✓", busy: "◴", idle: "☾", error: "☠", bullet: "•" },
  },
  {
    id: "johnny-bravo",
    name: "Johnny Bravo",
    group: "cartoon-network",
    colors: {
      primary: "#E6B800",
      secondary: "#1A1A1A",
      accent: "#FFD700",
      background: "#15130A",
      text: "#FFF8DC",
      border: "#E6B800",
      success: "#A6C44E",
      error: "#C0392B",
      warning: "#FFD700",
    },
    ascii: `    _  ___  _  _ _  _ _  _ _   _
   | |/ _ \\| || | \\| | \\| | \\ | |
 _ | | (_) | __ | .\` | .\` |  \\| |
(__|_|\\___/|_||_|_|\\_|_|\\_|_|\\_|`,
    glyph: "😎",
    borderStyle: "bold",
    statusIcons: { ok: "✓", busy: "◑", idle: "·", error: "✗", bullet: "▸" },
  },
  {
    id: "samurai-jack",
    name: "Samurai Jack",
    group: "cartoon-network",
    colors: {
      primary: "#F5F5F5",
      secondary: "#9A9A9A",
      accent: "#C0392B",
      background: "#0A0A0A",
      text: "#F5F5F5",
      border: "#F5F5F5",
      success: "#8FA98F",
      error: "#C0392B",
      warning: "#C9A227",
    },
    ascii: `   _   _   ___ _  _
  | | /_\\ / __| |/ /
 _| |/ _ \\ (__| ' <
|__/_/ \\_\\___|_|\\_\\`,
    glyph: "⚔",
    borderStyle: "single",
    statusIcons: { ok: "✓", busy: "◐", idle: "·", error: "✗", bullet: "—" },
  },
  {
    id: "cow-and-chicken",
    name: "Cow and Chicken",
    group: "cartoon-network",
    colors: {
      primary: "#E0436B",
      secondary: "#F5A6C9",
      accent: "#FF8FA3",
      background: "#1E1014",
      text: "#FFF0F4",
      border: "#E0436B",
      success: "#7FB069",
      error: "#D7263D",
      warning: "#F2C14E",
    },
    ascii: `  ___ _____      __
 / __/ _ \\ \\    / / + chicken
| (_| (_) \\ \\/\\/ /
 \\___\\___/ \\_/\\_/`,
    glyph: "🐄",
    borderStyle: "round",
    statusIcons: { ok: "✓", busy: "◔", idle: "○", error: "✗", bullet: "•" },
  },
  {
    id: "ed-edd-n-eddy",
    name: "Ed, Edd n Eddy",
    group: "cartoon-network",
    colors: {
      primary: "#F2C14E",
      secondary: "#F77F00",
      accent: "#E6B800",
      background: "#1C1608",
      text: "#FFF6DD",
      border: "#F77F00",
      success: "#9BB85E",
      error: "#C0392B",
      warning: "#F2C14E",
    },
    ascii: ` ___ ___    ___ ___  ___
| __|   \\  | __|   \\|   \\
| _|| |) | | _|| |) | |) |
|___|___/  |___|___/|___/  n eddy`,
    glyph: "🍬",
    borderStyle: "classic",
    statusIcons: { ok: "✓", busy: "◑", idle: "·", error: "✗", bullet: "▸" },
  },
  {
    id: "fosters-home",
    name: "Foster's Home for Imaginary Friends",
    group: "cartoon-network",
    colors: {
      primary: "#F58220",
      secondary: "#3FA7D6",
      accent: "#FFB871",
      background: "#1A130A",
      text: "#FFF3E6",
      border: "#F58220",
      success: "#7FB069",
      error: "#D7263D",
      warning: "#F2C14E",
    },
    ascii: ` ___ ___  ___ _____ ___ ___
| __/ _ \\/ __|_   _| __| _ \\
| _| (_) \\__ \\ | | | _||   /
|_| \\___/|___/ |_| |___|_|_\\`,
    glyph: "🏠",
    borderStyle: "round",
    statusIcons: { ok: "✓", busy: "◕", idle: "○", error: "✗", bullet: "•" },
  },
  {
    id: "teen-titans",
    name: "Teen Titans",
    group: "cartoon-network",
    colors: {
      primary: "#5B3FA7",
      secondary: "#D7263D",
      accent: "#3FA7D6",
      background: "#0F0C1A",
      text: "#ECE6F7",
      border: "#5B3FA7",
      success: "#4FA86A",
      error: "#D7263D",
      warning: "#E6B800",
    },
    ascii: ` _____ _____ ___ _  _
|_   _|_   _|_ _| \\| |
  | |   | |  | || .\` |
  |_|   |_| |___|_|\\_|  TITANS`,
    glyph: "🛡",
    borderStyle: "bold",
    statusIcons: { ok: "✓", busy: "◐", idle: "·", error: "✗", bullet: "▸" },
  },
  {
    id: "teen-titans-go",
    name: "Teen Titans Go!",
    group: "cartoon-network",
    colors: {
      primary: "#00E5FF",
      secondary: "#FF2E97",
      accent: "#C6FF00",
      background: "#13091F",
      text: "#FBFEFF",
      border: "#FF2E97",
      success: "#39FF8B",
      error: "#FF2E63",
      warning: "#FFE600",
    },
    ascii: ` _____ _____ ___    ___  ___
|_   _|_   _/ __|  / __|/ _ \\!
  | |   | || (_ | | (_ | (_) |
  |_|   |_| \\___|  \\___|\\___/`,
    glyph: "⚡",
    borderStyle: "double",
    statusIcons: { ok: "★", busy: "◔", idle: "○", error: "✗", bullet: "✦" },
  },
  {
    id: "ok-ko",
    name: "OK K.O.! Let's Be Heroes",
    group: "cartoon-network",
    colors: {
      primary: "#F25C54",
      secondary: "#3FA7D6",
      accent: "#F2C14E",
      background: "#181018",
      text: "#FFF1EE",
      border: "#F25C54",
      success: "#5BC97F",
      error: "#E03131",
      warning: "#F2C14E",
    },
    ascii: `  ___  _  __  _  __ ___
 / _ \\| |/ / | |/ // _ \\
| (_) | ' <  | ' <| (_) |
 \\___/|_|\\_\\ |_|\\_\\\\___/  !`,
    glyph: "👊",
    borderStyle: "bold",
    statusIcons: { ok: "★", busy: "◑", idle: "·", error: "✗", bullet: "▸" },
  },
  {
    id: "we-bare-bears",
    name: "We Bare Bears",
    group: "cartoon-network",
    colors: {
      primary: "#7FB3D5",
      secondary: "#8B5A2B",
      accent: "#F5F5F5",
      background: "#10161C",
      text: "#EAF2F8",
      border: "#7FB3D5",
      success: "#82C49A",
      error: "#C0524A",
      warning: "#D9A441",
    },
    ascii: ` _      _____   ___ ___ ___ ___
| | /| / / _ ) / _ ) _ \\ _ \\ __|
| |/ |/ / _  )/ _  )   /   / _|
|__/|__/____/(_)___/_|_\\_|_\\___|`,
    glyph: "🐻",
    borderStyle: "round",
    statusIcons: { ok: "✓", busy: "◔", idle: "○", error: "✗", bullet: "•" },
  },
  {
    id: "infinity-train",
    name: "Infinity Train",
    group: "cartoon-network",
    colors: {
      primary: "#00D4C7",
      secondary: "#7A3FF2",
      accent: "#FF5FA2",
      background: "#070A14",
      text: "#E6FBFA",
      border: "#00D4C7",
      success: "#2BE3B0",
      error: "#FF3D6E",
      warning: "#FFC93C",
    },
    ascii: ` _ _  _ ___ ___ _  _ ___ _____ _   _
| | \\| | __|_ _| \\| |_ _|_   _| | | |
| | .\` | _| | || .\` || |  | | | |_| |
|_|_|\\_|_| |___|_|\\_|___| |_|  \\___/  >>`,
    glyph: "🚂",
    borderStyle: "arrow",
    statusIcons: { ok: "▸", busy: "◆", idle: "·", error: "✗", bullet: "»" },
  },
  {
    id: "over-the-garden-wall",
    name: "Over the Garden Wall",
    group: "cartoon-network",
    colors: {
      primary: "#C06B2C",
      secondary: "#3A4A35",
      accent: "#E0A458",
      background: "#0E0B07",
      text: "#F0E4D0",
      border: "#C06B2C",
      success: "#7A8C57",
      error: "#9A3B2C",
      warning: "#D9A441",
    },
    ascii: `  ___ _____ _____      __
 / _ \\_   _/ __\\ \\    / / wall
| (_) || || (_ |\\ \\/\\/ /
 \\___/ |_| \\___| \\_/\\_/`,
    glyph: "🍂",
    borderStyle: "classic",
    statusIcons: { ok: "✓", busy: "◐", idle: "☾", error: "✗", bullet: "❧" },
  },
  {
    id: "the-owl-house",
    name: "The Owl House",
    group: "cartoon-network",
    colors: {
      primary: "#8E5BD9",
      secondary: "#3FB8AF",
      accent: "#F2C14E",
      background: "#0E0818",
      text: "#EFE6FA",
      border: "#8E5BD9",
      success: "#54C6A4",
      error: "#C0392B",
      warning: "#F2C14E",
    },
    ascii: `  ___ _    _ _    _  _ ___
 / _ \\ \\  / | |  | || / __|
| (_) \\ \\/| | |__| __ \\__ \\
 \\___/ \\__|_|____|_||_|___/  owl`,
    glyph: "🦉",
    borderStyle: "round",
    statusIcons: { ok: "✦", busy: "◔", idle: "☾", error: "✗", bullet: "•" },
  },
  {
    id: "amphibia",
    name: "Amphibia",
    group: "cartoon-network",
    colors: {
      primary: "#5BA85B",
      secondary: "#B49BE0",
      accent: "#C6E377",
      background: "#0C140C",
      text: "#EAF7E6",
      border: "#5BA85B",
      success: "#7FD957",
      error: "#C0524A",
      warning: "#E6C84E",
    },
    ascii: `  ___  __  __ ___ _  _ ___ ___ ___
 / _ \\|  \\/  | _ \\ || |_ _| _ )_ _|
| (_) | |\\/| |  _/ __ || || _ \\| |
 \\___/|_|  |_|_| |_||_|___|___/___|`,
    glyph: "🐸",
    borderStyle: "round",
    statusIcons: { ok: "✓", busy: "◕", idle: "○", error: "✗", bullet: "•" },
  },
];

export default showThemes;
