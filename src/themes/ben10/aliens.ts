import type { Theme } from "../../core/types.js";

const alienThemes: Theme[] = [
  {
    id: "heatblast",
    name: "Heatblast",
    group: "ben10-aliens",
    colors: {
      primary: "#ff5511",
      secondary: "#ffaa22",
      accent: "#ffdd33",
      background: "#0a0606",
      text: "#fff2e0",
      border: "#ff7722",
      success: "#ffcc33",
      error: "#cc2200",
      warning: "#ff8800",
    },
    ascii: String.raw`
  )  (  )
 ( /\ )( /\
 (_||_)(_||_)
  HEATBLAST`,
    glyph: "🔥",
    borderStyle: "bold",
    statusIcons: { ok: "🔥", busy: "♨", idle: "·", error: "✖", bullet: "▸" },
  },
  {
    id: "wildmutt",
    name: "Wildmutt",
    group: "ben10-aliens",
    colors: {
      primary: "#cc7733",
      secondary: "#aa5522",
      accent: "#ffaa55",
      background: "#0a0805",
      text: "#fbeedd",
      border: "#bb6622",
      success: "#88bb44",
      error: "#bb3311",
      warning: "#ddaa33",
    },
    ascii: String.raw`
  /^ ^\
 ( o o )
  \ ~ /
 WILDMUTT`,
    glyph: "🐾",
    borderStyle: "classic",
    statusIcons: { ok: "🐾", busy: "≈", idle: "·", error: "✖", bullet: "•" },
  },
  {
    id: "diamondhead",
    name: "Diamondhead",
    group: "ben10-aliens",
    colors: {
      primary: "#22cc77",
      secondary: "#11aa66",
      accent: "#88ffbb",
      background: "#04100a",
      text: "#e6fff2",
      border: "#33dd88",
      success: "#44ff99",
      error: "#cc3344",
      warning: "#ccdd44",
    },
    ascii: String.raw`
   /\/\
  /\/\/\
  \/\/\/
 DIAMONDHEAD`,
    glyph: "💎",
    borderStyle: "single",
    statusIcons: { ok: "💎", busy: "◆", idle: "◇", error: "✖", bullet: "◈" },
  },
  {
    id: "xlr8",
    name: "XLR8",
    group: "ben10-aliens",
    colors: {
      primary: "#2266dd",
      secondary: "#1144aa",
      accent: "#33ccff",
      background: "#04060f",
      text: "#e0f0ff",
      border: "#3377ee",
      success: "#33ddaa",
      error: "#dd3344",
      warning: "#ffbb33",
    },
    ascii: String.raw`
  >>=====
 >>> XLR8
  >>=====`,
    glyph: "⚡",
    borderStyle: "arrow",
    statusIcons: { ok: "⚡", busy: "»", idle: "·", error: "✖", bullet: "›" },
  },
  {
    id: "grey-matter",
    name: "Grey Matter",
    group: "ben10-aliens",
    colors: {
      primary: "#8899aa",
      secondary: "#667788",
      accent: "#bbccdd",
      background: "#070809",
      text: "#eef2f6",
      border: "#99aabb",
      success: "#77cc99",
      error: "#cc4455",
      warning: "#ccbb55",
    },
    ascii: String.raw`
  ( . . )
   \ - /
 GREYMATTER`,
    glyph: "🧠",
    borderStyle: "round",
    statusIcons: { ok: "🧠", busy: "◌", idle: "·", error: "✖", bullet: "∙" },
  },
  {
    id: "four-arms",
    name: "Four Arms",
    group: "ben10-aliens",
    colors: {
      primary: "#dd3344",
      secondary: "#aa2233",
      accent: "#ff8866",
      background: "#0f0505",
      text: "#ffe6e0",
      border: "#ee4455",
      success: "#ddaa33",
      error: "#bb1122",
      warning: "#ffaa44",
    },
    ascii: String.raw`
 \_o_o_/
  | _ |
 /     \
 FOURARMS`,
    glyph: "✊",
    borderStyle: "bold",
    statusIcons: { ok: "✊", busy: "✺", idle: "·", error: "✖", bullet: "▪" },
  },
  {
    id: "stinkfly",
    name: "Stinkfly",
    group: "ben10-aliens",
    colors: {
      primary: "#88aa33",
      secondary: "#667722",
      accent: "#bbdd55",
      background: "#080a04",
      text: "#f2f6e0",
      border: "#99bb44",
      success: "#aacc55",
      error: "#cc4433",
      warning: "#ddcc44",
    },
    ascii: String.raw`
  \o/ \o/
 -( >< )-
  STINKFLY`,
    glyph: "🪰",
    borderStyle: "single",
    statusIcons: { ok: "🪰", busy: "≋", idle: "·", error: "✖", bullet: "•" },
  },
  {
    id: "ripjaws",
    name: "Ripjaws",
    group: "ben10-aliens",
    colors: {
      primary: "#2299bb",
      secondary: "#117799",
      accent: "#55ccdd",
      background: "#040b0d",
      text: "#e0f6fa",
      border: "#33aacc",
      success: "#44ccaa",
      error: "#cc4455",
      warning: "#ddbb44",
    },
    ascii: String.raw`
  <vvvvv>
 ( >===< )
  RIPJAWS`,
    glyph: "🦈",
    borderStyle: "classic",
    statusIcons: { ok: "🦈", busy: "≈", idle: "·", error: "✖", bullet: "▾" },
  },
  {
    id: "upgrade",
    name: "Upgrade",
    group: "ben10-aliens",
    colors: {
      primary: "#22bbaa",
      secondary: "#117788",
      accent: "#66ffdd",
      background: "#04090a",
      text: "#e0fbf6",
      border: "#33ccbb",
      success: "#44ddbb",
      error: "#cc3355",
      warning: "#bbcc44",
    },
    ascii: String.raw`
 [=( O )=]
 [=======]
  UPGRADE`,
    glyph: "🛸",
    borderStyle: "round",
    statusIcons: { ok: "◉", busy: "◌", idle: "·", error: "✖", bullet: "▮" },
  },
  {
    id: "ghostfreak",
    name: "Ghostfreak",
    group: "ben10-aliens",
    colors: {
      primary: "#bbbbcc",
      secondary: "#777788",
      accent: "#ddddee",
      background: "#070608",
      text: "#f2f0f6",
      border: "#9999aa",
      success: "#88bb99",
      error: "#bb3355",
      warning: "#ccbb66",
    },
    ascii: String.raw`
  .-~~~-.
 ( o   o )
  )_____(
 GHOSTFREAK`,
    glyph: "👻",
    borderStyle: "double",
    statusIcons: { ok: "👻", busy: "◌", idle: "·", error: "✖", bullet: "∘" },
  },
  {
    id: "cannonbolt",
    name: "Cannonbolt",
    group: "ben10-aliens",
    colors: {
      primary: "#ddaa33",
      secondary: "#aa7722",
      accent: "#ffcc55",
      background: "#0a0805",
      text: "#fdf3e0",
      border: "#eebb44",
      success: "#bbcc44",
      error: "#cc4433",
      warning: "#ffbb33",
    },
    ascii: String.raw`
   _____
  /( O )\
  \_____/
 CANNONBOLT`,
    glyph: "🌀",
    borderStyle: "round",
    statusIcons: { ok: "●", busy: "◍", idle: "·", error: "✖", bullet: "•" },
  },
  {
    id: "wildvine",
    name: "Wildvine",
    group: "ben10-aliens",
    colors: {
      primary: "#33aa55",
      secondary: "#227744",
      accent: "#88dd77",
      background: "#050c06",
      text: "#e6fbe6",
      border: "#44bb66",
      success: "#66dd77",
      error: "#cc4444",
      warning: "#ccdd44",
    },
    ascii: String.raw`
  \|/ \|/
  -( o )-
  /|\ /|\
  WILDVINE`,
    glyph: "🌿",
    borderStyle: "single",
    statusIcons: { ok: "🌿", busy: "≀", idle: "·", error: "✖", bullet: "❧" },
  },
  {
    id: "blitzwolfer",
    name: "Blitzwolfer",
    group: "ben10-aliens",
    colors: {
      primary: "#8877aa",
      secondary: "#665588",
      accent: "#bbaadd",
      background: "#06070a",
      text: "#f0eefa",
      border: "#9988bb",
      success: "#88bbaa",
      error: "#cc3355",
      warning: "#ccbb55",
    },
    ascii: String.raw`
  /\___/\
 ( =o.o= )
  ) >v< (
 BLITZWOLFER`,
    glyph: "🐺",
    borderStyle: "bold",
    statusIcons: { ok: "🐺", busy: "≋", idle: "·", error: "✖", bullet: "▾" },
  },
  {
    id: "snare-oh",
    name: "Snare-oh",
    group: "ben10-aliens",
    colors: {
      primary: "#ccaa55",
      secondary: "#998833",
      accent: "#eecc77",
      background: "#0a0905",
      text: "#fbf6e0",
      border: "#ddbb66",
      success: "#bbcc55",
      error: "#cc5533",
      warning: "#ddaa44",
    },
    ascii: String.raw`
  |=====|
  |( o )|
  |=====|
  SNARE-OH`,
    glyph: "🪢",
    borderStyle: "classic",
    statusIcons: { ok: "▤", busy: "≡", idle: "·", error: "✖", bullet: "▬" },
  },
  {
    id: "frankenstrike",
    name: "Frankenstrike",
    group: "ben10-aliens",
    colors: {
      primary: "#44bb99",
      secondary: "#338866",
      accent: "#88ffcc",
      background: "#040a08",
      text: "#e6fbf2",
      border: "#55ccaa",
      success: "#66ddaa",
      error: "#cc3355",
      warning: "#ddcc44",
    },
    ascii: String.raw`
  [#]_[#]
  ( >z< )
 FRANKENSTRIKE`,
    glyph: "⚡",
    borderStyle: "bold",
    statusIcons: { ok: "⚡", busy: "≁", idle: "·", error: "✖", bullet: "▮" },
  },
  {
    id: "upchuck",
    name: "Upchuck",
    group: "ben10-aliens",
    colors: {
      primary: "#88bb33",
      secondary: "#669922",
      accent: "#bbee55",
      background: "#080b04",
      text: "#f2fae0",
      border: "#99cc44",
      success: "#aadd55",
      error: "#cc4433",
      warning: "#ddcc33",
    },
    ascii: String.raw`
  ( ^o^ )
  \_~~~_/
  UPCHUCK`,
    glyph: "🐸",
    borderStyle: "round",
    statusIcons: { ok: "🐸", busy: "≈", idle: "·", error: "✖", bullet: "•" },
  },
  {
    id: "ditto",
    name: "Ditto",
    group: "ben10-aliens",
    colors: {
      primary: "#dddddd",
      secondary: "#999999",
      accent: "#ffffff",
      background: "#080808",
      text: "#f6f6f6",
      border: "#bbbbbb",
      success: "#88cc99",
      error: "#cc4455",
      warning: "#ccbb55",
    },
    ascii: String.raw`
 (o)(o)(o)
  | | | |
  DITTO`,
    glyph: "👯",
    borderStyle: "single",
    statusIcons: { ok: "◎", busy: "◌", idle: "·", error: "✖", bullet: "∷" },
  },
  {
    id: "eye-guy",
    name: "Eye Guy",
    group: "ben10-aliens",
    colors: {
      primary: "#33aacc",
      secondary: "#227799",
      accent: "#77ddee",
      background: "#040a0c",
      text: "#e0f6fa",
      border: "#44bbdd",
      success: "#44ddbb",
      error: "#cc4455",
      warning: "#ddbb44",
    },
    ascii: String.raw`
 (o)(o)(o)
 (o)( )(o)
  EYE GUY`,
    glyph: "👁",
    borderStyle: "round",
    statusIcons: { ok: "👁", busy: "◉", idle: "·", error: "✖", bullet: "◦" },
  },
  {
    id: "way-big",
    name: "Way Big",
    group: "ben10-aliens",
    colors: {
      primary: "#dd4433",
      secondary: "#eeeeee",
      accent: "#ffffff",
      background: "#080608",
      text: "#fdf0ec",
      border: "#ee5544",
      success: "#44cc88",
      error: "#bb2222",
      warning: "#ffaa33",
    },
    ascii: String.raw`
   /|   |\
  / | W | \
 /__|___|__\
   WAY BIG`,
    glyph: "🌌",
    borderStyle: "double",
    statusIcons: { ok: "★", busy: "✦", idle: "·", error: "✖", bullet: "▲" },
  },
  {
    id: "spitter",
    name: "Spitter",
    group: "ben10-aliens",
    colors: {
      primary: "#55bb88",
      secondary: "#338866",
      accent: "#99ddaa",
      background: "#050b08",
      text: "#e6faf0",
      border: "#66cc99",
      success: "#77dd99",
      error: "#cc4444",
      warning: "#ccdd44",
    },
    ascii: String.raw`
  ( >o< )
  ~~~|~~~
  SPITTER`,
    glyph: "💧",
    borderStyle: "single",
    statusIcons: { ok: "💧", busy: "≈", idle: "·", error: "✖", bullet: "•" },
  },
  {
    id: "benmummy",
    name: "Benmummy",
    group: "ben10-aliens",
    colors: {
      primary: "#ccbb88",
      secondary: "#998855",
      accent: "#eeddaa",
      background: "#0a0906",
      text: "#fbf6e6",
      border: "#ddcc99",
      success: "#bbcc66",
      error: "#cc5533",
      warning: "#ddaa44",
    },
    ascii: String.raw`
  /=====\
 |( - - )|
  \=====/
  BENMUMMY`,
    glyph: "🪦",
    borderStyle: "classic",
    statusIcons: { ok: "▤", busy: "≡", idle: "·", error: "✖", bullet: "▬" },
  },
  {
    id: "swampfire",
    name: "Swampfire",
    group: "ben10-aliens",
    colors: {
      primary: "#33aa44",
      secondary: "#ff7722",
      accent: "#aadd55",
      background: "#060a05",
      text: "#eefbe0",
      border: "#44bb55",
      success: "#66cc55",
      error: "#dd5522",
      warning: "#ff9933",
    },
    ascii: String.raw`
  )\|/(
 ( >o< )
  )/|\(
 SWAMPFIRE`,
    glyph: "🔥",
    borderStyle: "bold",
    statusIcons: { ok: "🔥", busy: "≀", idle: "·", error: "✖", bullet: "❧" },
  },
  {
    id: "echo-echo",
    name: "Echo Echo",
    group: "ben10-aliens",
    colors: {
      primary: "#dddddd",
      secondary: "#88aabb",
      accent: "#ffffff",
      background: "#070809",
      text: "#f4f6f8",
      border: "#aabbcc",
      success: "#88ccaa",
      error: "#cc4455",
      warning: "#ccbb55",
    },
    ascii: String.raw`
 )) (( )) ((
 )) ECHO ((
 )) (( )) ((`,
    glyph: "🔊",
    borderStyle: "single",
    statusIcons: { ok: "🔊", busy: "≋", idle: "·", error: "✖", bullet: "›" },
  },
  {
    id: "humungousaur",
    name: "Humungousaur",
    group: "ben10-aliens",
    colors: {
      primary: "#aa7733",
      secondary: "#886622",
      accent: "#ddaa55",
      background: "#0a0805",
      text: "#fbf3e0",
      border: "#bb8844",
      success: "#aacc44",
      error: "#cc4433",
      warning: "#ddaa33",
    },
    ascii: String.raw`
   /\__/\
  / HUMU \
 /__o__o__\
 HUMUNGOUSAUR`,
    glyph: "🦖",
    borderStyle: "bold",
    statusIcons: { ok: "🦖", busy: "▰", idle: "·", error: "✖", bullet: "▪" },
  },
  {
    id: "jetray",
    name: "Jetray",
    group: "ben10-aliens",
    colors: {
      primary: "#dd3322",
      secondary: "#aa2211",
      accent: "#ffaa44",
      background: "#0f0504",
      text: "#ffe6dd",
      border: "#ee4433",
      success: "#ddaa33",
      error: "#bb1111",
      warning: "#ff8833",
    },
    ascii: String.raw`
  <======>
   \ Jet /
    \  /
  JETRAY`,
    glyph: "🛩",
    borderStyle: "arrow",
    statusIcons: { ok: "🛩", busy: "»", idle: "·", error: "✖", bullet: "›" },
  },
  {
    id: "big-chill",
    name: "Big Chill",
    group: "ben10-aliens",
    colors: {
      primary: "#33bbbb",
      secondary: "#227799",
      accent: "#88eeee",
      background: "#040b0c",
      text: "#e0fafa",
      border: "#44cccc",
      success: "#55ddcc",
      error: "#cc4466",
      warning: "#ccddaa",
    },
    ascii: String.raw`
  *  .  *
 ( >oo< )
  \____/
 BIG CHILL`,
    glyph: "❄",
    borderStyle: "round",
    statusIcons: { ok: "❄", busy: "❅", idle: "·", error: "✖", bullet: "❆" },
  },
  {
    id: "chromastone",
    name: "Chromastone",
    group: "ben10-aliens",
    colors: {
      primary: "#aa44cc",
      secondary: "#7733aa",
      accent: "#dd88ff",
      background: "#08040c",
      text: "#f4e6fb",
      border: "#bb55dd",
      success: "#55ccaa",
      error: "#cc3366",
      warning: "#ddbb44",
    },
    ascii: String.raw`
   /\/\
  < () >
   \/\/
 CHROMASTONE`,
    glyph: "🔮",
    borderStyle: "double",
    statusIcons: { ok: "◆", busy: "◇", idle: "·", error: "✖", bullet: "◈" },
  },
  {
    id: "brainstorm",
    name: "Brainstorm",
    group: "ben10-aliens",
    colors: {
      primary: "#dd9933",
      secondary: "#aa7722",
      accent: "#ffcc55",
      background: "#0a0805",
      text: "#fdf3e0",
      border: "#eeaa44",
      success: "#bbcc44",
      error: "#cc4433",
      warning: "#ffbb33",
    },
    ascii: String.raw`
  (~~~~~)
 (( o o ))
  \_~~~_/
 BRAINSTORM`,
    glyph: "🧠",
    borderStyle: "round",
    statusIcons: { ok: "🧠", busy: "⚡", idle: "·", error: "✖", bullet: "∙" },
  },
  {
    id: "spidermonkey",
    name: "Spidermonkey",
    group: "ben10-aliens",
    colors: {
      primary: "#3344bb",
      secondary: "#222288",
      accent: "#6688ee",
      background: "#04060e",
      text: "#e0e6fb",
      border: "#4455cc",
      success: "#44cc99",
      error: "#cc3344",
      warning: "#ddbb44",
    },
    ascii: String.raw`
  /\(o o)/\
 / / >-< \ \
 SPIDERMONKEY`,
    glyph: "🕷",
    borderStyle: "single",
    statusIcons: { ok: "🕷", busy: "✕", idle: "·", error: "✖", bullet: "•" },
  },
  {
    id: "goop",
    name: "Goop",
    group: "ben10-aliens",
    colors: {
      primary: "#66cc44",
      secondary: "#449933",
      accent: "#aaee66",
      background: "#060c05",
      text: "#eefbe0",
      border: "#77dd55",
      success: "#88ee66",
      error: "#cc4444",
      warning: "#ccdd44",
    },
    ascii: String.raw`
  .-~~~-.
 ( o o o )
  '~._.~'
   GOOP`,
    glyph: "🟢",
    borderStyle: "round",
    statusIcons: { ok: "●", busy: "◌", idle: "·", error: "✖", bullet: "∙" },
  },
  {
    id: "alien-x",
    name: "Alien X",
    group: "ben10-aliens",
    colors: {
      primary: "#9933dd",
      secondary: "#1a1a2a",
      accent: "#ffffff",
      background: "#050308",
      text: "#f2e6ff",
      border: "#aa44ee",
      success: "#66ddcc",
      error: "#dd3366",
      warning: "#ffcc44",
    },
    ascii: String.raw`
  *  .  ✦  .  *
 (   X   X   )
  *  ALIEN-X  *`,
    glyph: "✶",
    borderStyle: "double",
    statusIcons: { ok: "✶", busy: "✦", idle: "✧", error: "✖", bullet: "✷" },
  },
  {
    id: "lodestar",
    name: "Lodestar",
    group: "ben10-aliens",
    colors: {
      primary: "#bb8833",
      secondary: "#886622",
      accent: "#eebb55",
      background: "#0a0805",
      text: "#fbf3e0",
      border: "#cc9944",
      success: "#aacc44",
      error: "#cc4433",
      warning: "#ddaa33",
    },
    ascii: String.raw`
  [N]---[S]
   \  o  /
  LODESTAR`,
    glyph: "🧲",
    borderStyle: "bold",
    statusIcons: { ok: "◉", busy: "◌", idle: "·", error: "✖", bullet: "▮" },
  },
  {
    id: "nanomech",
    name: "Nanomech",
    group: "ben10-aliens",
    colors: {
      primary: "#33cc66",
      secondary: "#229944",
      accent: "#77ee99",
      background: "#040c07",
      text: "#e6fbec",
      border: "#44dd77",
      success: "#55ee88",
      error: "#cc4455",
      warning: "#ccdd44",
    },
    ascii: String.raw`
  \o/_\o/
  =[ o ]=
  NANOMECH`,
    glyph: "🐝",
    borderStyle: "single",
    statusIcons: { ok: "▴", busy: "≋", idle: "·", error: "✖", bullet: "•" },
  },
  {
    id: "rath",
    name: "Rath",
    group: "ben10-aliens",
    colors: {
      primary: "#dd8833",
      secondary: "#aa6622",
      accent: "#ffbb55",
      background: "#0f0805",
      text: "#fdf0e0",
      border: "#ee9944",
      success: "#ccbb44",
      error: "#cc3322",
      warning: "#ffaa33",
    },
    ascii: String.raw`
  >( =o= )<
   \ >v< /
    RATH!`,
    glyph: "🐯",
    borderStyle: "bold",
    statusIcons: { ok: "🐯", busy: "✺", idle: "·", error: "✖", bullet: "▸" },
  },
  {
    id: "water-hazard",
    name: "Water Hazard",
    group: "ben10-aliens",
    colors: {
      primary: "#2288cc",
      secondary: "#116699",
      accent: "#55bbee",
      background: "#04090e",
      text: "#e0f2fb",
      border: "#3399dd",
      success: "#44ccbb",
      error: "#cc4455",
      warning: "#ddbb44",
    },
    ascii: String.raw`
  [=( O )=]
  ~~~|~~~
 WATER HAZARD`,
    glyph: "💦",
    borderStyle: "round",
    statusIcons: { ok: "💦", busy: "≈", idle: "·", error: "✖", bullet: "◦" },
  },
  {
    id: "terraspin",
    name: "Terraspin",
    group: "ben10-aliens",
    colors: {
      primary: "#33aa88",
      secondary: "#227766",
      accent: "#77ddbb",
      background: "#050b09",
      text: "#e6fbf4",
      border: "#44bb99",
      success: "#55ccaa",
      error: "#cc4455",
      warning: "#ccdd55",
    },
    ascii: String.raw`
   _____
  /( ~ )\
  \_>o<_/
 TERRASPIN`,
    glyph: "🌪",
    borderStyle: "round",
    statusIcons: { ok: "🌪", busy: "◍", idle: "·", error: "✖", bullet: "∙" },
  },
  {
    id: "armodrillo",
    name: "Armodrillo",
    group: "ben10-aliens",
    colors: {
      primary: "#ccaa44",
      secondary: "#998833",
      accent: "#eecc66",
      background: "#0a0905",
      text: "#fbf6e0",
      border: "#ddbb55",
      success: "#bbcc44",
      error: "#cc5533",
      warning: "#ddaa33",
    },
    ascii: String.raw`
  [#]=[#]
 (( >O< ))
 ARMODRILLO`,
    glyph: "⚙",
    borderStyle: "bold",
    statusIcons: { ok: "⚙", busy: "◍", idle: "·", error: "✖", bullet: "▮" },
  },
  {
    id: "nrg",
    name: "NRG",
    group: "ben10-aliens",
    colors: {
      primary: "#dd3322",
      secondary: "#888888",
      accent: "#ff7733",
      background: "#0f0504",
      text: "#ffe6dd",
      border: "#aaaaaa",
      success: "#ccbb33",
      error: "#bb1111",
      warning: "#ff9922",
    },
    ascii: String.raw`
  [|||||]
  [|(o)|]
  [|NRG|]`,
    glyph: "☢",
    borderStyle: "classic",
    statusIcons: { ok: "☢", busy: "◍", idle: "·", error: "✖", bullet: "▬" },
  },
  {
    id: "fasttrack",
    name: "Fasttrack",
    group: "ben10-aliens",
    colors: {
      primary: "#3366cc",
      secondary: "#224499",
      accent: "#6699ee",
      background: "#04060e",
      text: "#e0e8fb",
      border: "#4477dd",
      success: "#44ccaa",
      error: "#cc3344",
      warning: "#ddbb44",
    },
    ascii: String.raw`
  >>>( o )
  >>> >v<
  FASTTRACK`,
    glyph: "💨",
    borderStyle: "arrow",
    statusIcons: { ok: "💨", busy: "»", idle: "·", error: "✖", bullet: "›" },
  },
  {
    id: "ampfibian",
    name: "AmpFibian",
    group: "ben10-aliens",
    colors: {
      primary: "#33aacc",
      secondary: "#2277aa",
      accent: "#66ddff",
      background: "#04090e",
      text: "#e0f4fb",
      border: "#44bbdd",
      success: "#44ddcc",
      error: "#cc4455",
      warning: "#ddcc44",
    },
    ascii: String.raw`
  ~( o o )~
  ~\ ~~~ /~
  AMPFIBIAN`,
    glyph: "⚡",
    borderStyle: "single",
    statusIcons: { ok: "⚡", busy: "≋", idle: "·", error: "✖", bullet: "∿" },
  },
  {
    id: "clockwork",
    name: "Clockwork",
    group: "ben10-aliens",
    colors: {
      primary: "#bb8833",
      secondary: "#886622",
      accent: "#ddbb55",
      background: "#0a0805",
      text: "#fbf3e0",
      border: "#cc9944",
      success: "#aabb44",
      error: "#cc4433",
      warning: "#ddaa33",
    },
    ascii: String.raw`
   .-^-.
  ( o|o )
   '-v-'
 CLOCKWORK`,
    glyph: "⏱",
    borderStyle: "bold",
    statusIcons: { ok: "⏱", busy: "◴", idle: "·", error: "✖", bullet: "◵" },
  },
  {
    id: "jury-rigg",
    name: "Jury Rigg",
    group: "ben10-aliens",
    colors: {
      primary: "#cc3333",
      secondary: "#992222",
      accent: "#ff7755",
      background: "#0f0504",
      text: "#ffe6e0",
      border: "#dd4444",
      success: "#ccbb33",
      error: "#bb1111",
      warning: "#ff9933",
    },
    ascii: String.raw`
  >(>o<)<
   /| |\
 JURY RIGG`,
    glyph: "🔧",
    borderStyle: "classic",
    statusIcons: { ok: "🔧", busy: "✲", idle: "·", error: "✖", bullet: "▸" },
  },
  {
    id: "feedback",
    name: "Feedback",
    group: "ben10-aliens",
    colors: {
      primary: "#22bb66",
      secondary: "#0a0a0a",
      accent: "#66ee99",
      background: "#040a06",
      text: "#e6fbec",
      border: "#33cc77",
      success: "#44dd88",
      error: "#cc3355",
      warning: "#ddcc44",
    },
    ascii: String.raw`
  \  o  /
   >[#]<
  FEEDBACK`,
    glyph: "🔌",
    borderStyle: "bold",
    statusIcons: { ok: "⚡", busy: "≋", idle: "·", error: "✖", bullet: "▮" },
  },
  {
    id: "gravattack",
    name: "Gravattack",
    group: "ben10-aliens",
    colors: {
      primary: "#cc6633",
      secondary: "#1a1030",
      accent: "#ff9955",
      background: "#06040a",
      text: "#fbeee0",
      border: "#dd7744",
      success: "#66cc99",
      error: "#cc3355",
      warning: "#ffaa33",
    },
    ascii: String.raw`
   .-~~~-.
  ( ( o ) )
   '-~~~-'
 GRAVATTACK`,
    glyph: "🪐",
    borderStyle: "double",
    statusIcons: { ok: "🪐", busy: "◍", idle: "·", error: "✖", bullet: "◦" },
  },
  {
    id: "crashhopper",
    name: "Crashhopper",
    group: "ben10-aliens",
    colors: {
      primary: "#33aa66",
      secondary: "#cc8833",
      accent: "#77dd99",
      background: "#050b07",
      text: "#e6fbed",
      border: "#44bb77",
      success: "#66cc88",
      error: "#cc4444",
      warning: "#ddaa33",
    },
    ascii: String.raw`
  \(o o)/
   /\^/\
 CRASHHOPPER`,
    glyph: "🦗",
    borderStyle: "round",
    statusIcons: { ok: "🦗", busy: "▴", idle: "·", error: "✖", bullet: "‸" },
  },
  {
    id: "ball-weevil",
    name: "Ball Weevil",
    group: "ben10-aliens",
    colors: {
      primary: "#88bb33",
      secondary: "#669922",
      accent: "#bbee55",
      background: "#080b04",
      text: "#f2fae0",
      border: "#99cc44",
      success: "#aadd55",
      error: "#cc4433",
      warning: "#ddcc33",
    },
    ascii: String.raw`
  (o o)
  /( O )\
 BALL WEEVIL`,
    glyph: "🪲",
    borderStyle: "round",
    statusIcons: { ok: "🪲", busy: "◍", idle: "·", error: "✖", bullet: "•" },
  },
  {
    id: "astrodactyl",
    name: "Astrodactyl",
    group: "ben10-aliens",
    colors: {
      primary: "#ddaa33",
      secondary: "#cc5522",
      accent: "#ffcc55",
      background: "#0a0705",
      text: "#fdf3e0",
      border: "#eebb44",
      success: "#bbcc44",
      error: "#cc3322",
      warning: "#ff9933",
    },
    ascii: String.raw`
  <===*===>
   \ (o) /
 ASTRODACTYL`,
    glyph: "🦅",
    borderStyle: "arrow",
    statusIcons: { ok: "🦅", busy: "»", idle: "·", error: "✖", bullet: "›" },
  },
  {
    id: "bullfrag",
    name: "Bullfrag",
    group: "ben10-aliens",
    colors: {
      primary: "#33aa55",
      secondary: "#227744",
      accent: "#77dd88",
      background: "#050b06",
      text: "#e6fbec",
      border: "#44bb66",
      success: "#66cc77",
      error: "#cc4444",
      warning: "#ddcc44",
    },
    ascii: String.raw`
  (=o   o=)
   \  >  /
  BULLFRAG`,
    glyph: "🐸",
    borderStyle: "bold",
    statusIcons: { ok: "🐸", busy: "≈", idle: "·", error: "✖", bullet: "▸" },
  },
  {
    id: "pesky-dust",
    name: "Pesky Dust",
    group: "ben10-aliens",
    colors: {
      primary: "#cc66bb",
      secondary: "#993399",
      accent: "#ee99dd",
      background: "#0a050a",
      text: "#fbe6f6",
      border: "#dd77cc",
      success: "#88cc99",
      error: "#cc3366",
      warning: "#ddbb55",
    },
    ascii: String.raw`
  . * . * .
 ( ~(o)~ )
  PESKY DUST`,
    glyph: "✨",
    borderStyle: "round",
    statusIcons: { ok: "✨", busy: "✧", idle: "·", error: "✖", bullet: "✦" },
  },
  {
    id: "the-worst",
    name: "The Worst",
    group: "ben10-aliens",
    colors: {
      primary: "#cc8844",
      secondary: "#885533",
      accent: "#eeaa66",
      background: "#0a0705",
      text: "#fbf0e0",
      border: "#dd9955",
      success: "#aabb55",
      error: "#cc4433",
      warning: "#ddaa44",
    },
    ascii: String.raw`
  ( x_x )
   \_-_/
 THE WORST`,
    glyph: "💀",
    borderStyle: "classic",
    statusIcons: { ok: "☻", busy: "◌", idle: "·", error: "✖", bullet: "▬" },
  },
  {
    id: "atomix",
    name: "Atomix",
    group: "ben10-aliens",
    colors: {
      primary: "#33ccaa",
      secondary: "#cc7722",
      accent: "#77ffdd",
      background: "#040c0a",
      text: "#e6fbf4",
      border: "#44ddbb",
      success: "#55eecc",
      error: "#cc4455",
      warning: "#ffaa33",
    },
    ascii: String.raw`
   .-(o)-.
  ( =( )= )
   '-(o)-'
   ATOMIX`,
    glyph: "⚛",
    borderStyle: "double",
    statusIcons: { ok: "⚛", busy: "◍", idle: "·", error: "✖", bullet: "◦" },
  },
  {
    id: "gutrot",
    name: "Gutrot",
    group: "ben10-aliens",
    colors: {
      primary: "#77aa44",
      secondary: "#557733",
      accent: "#aacc66",
      background: "#070a05",
      text: "#f0fae0",
      border: "#88bb55",
      success: "#99cc55",
      error: "#cc4433",
      warning: "#ccbb44",
    },
    ascii: String.raw`
  [(o o)]
  [~~~~~]
  GUTROT`,
    glyph: "⚗",
    borderStyle: "classic",
    statusIcons: { ok: "⚗", busy: "≈", idle: "·", error: "✖", bullet: "▾" },
  },
  {
    id: "kickin-hawk",
    name: "Kickin Hawk",
    group: "ben10-aliens",
    colors: {
      primary: "#cc7733",
      secondary: "#aa5522",
      accent: "#ffaa55",
      background: "#0a0705",
      text: "#fbf0e0",
      border: "#dd8844",
      success: "#bbcc44",
      error: "#cc3322",
      warning: "#ffaa33",
    },
    ascii: String.raw`
  /( >o< )\
   \ /^\ /
 KICKIN HAWK`,
    glyph: "🐓",
    borderStyle: "bold",
    statusIcons: { ok: "🐓", busy: "✺", idle: "·", error: "✖", bullet: "▸" },
  },
];

export default alienThemes;
