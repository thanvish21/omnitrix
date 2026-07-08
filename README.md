# 🛸 omnitrix

> Terminal dashboard & theme engine for AI coding agents — themed around **Ben 10**, **Cartoon Network**, and **Anime**.

Styled after [pixtuoid](https://www.npmjs.com/package/pixtuoid): omnitrix watches your active AI coding sessions (Claude Code, Codex, OpenCode) read-only and renders a themed dashboard. **102 hand-crafted themes** across 5 groups, each with its own color palette, ASCII logo, accent glyph, border style, and status icons.

## Install

Requires Node.js 18+.

```bash
git clone https://github.com/thanvish21/omnitrix.git
cd omnitrix
npm install
npm run build
npm link        # exposes the `omnitrix` command
```

## Usage

```bash
omnitrix                    # open the themed dashboard (default)
omnitrix theme list         # all themes grouped, with color-swatch previews
omnitrix theme set xlr8     # switch theme (animated Omnitrix transition)
omnitrix theme random       # random theme + Omnitrix activation animation
omnitrix theme current      # show the active theme
omnitrix roll 21            # cycle all 21 classic aliens, 2s each
omnitrix watch --loop       # live-summarize detected agent sessions
omnitrix --help
```

Typo in a theme id? `theme set` suggests the nearest match (`Did you mean xlr8?`) and exits non-zero.

## Themes

| Group | Count | Examples |
|-------|------:|----------|
| `ben10-aliens`    | 53 | Heatblast, XLR8, Diamondhead, Big Chill, Alien X, Way Big, Rath… |
| `ben10-humans`    | 5  | Ben, Gwen, Kevin, Grandpa Max, Rook |
| `ben10-villains`  | 10 | Vilgax, Hex, Charmcaster, Albedo, Zs'Skayr… |
| `cartoon-network` | 20 | Adventure Time, Steven Universe, Samurai Jack, Regular Show… |
| `anime`           | 14 | Naruto, DBZ, One Piece, Demon Slayer, JJK, Chainsaw Man… |

Each theme exposes color tokens: `primary`, `secondary`, `accent`, `background`, `text`, `border`, `success`, `error`, `warning`.

Run `omnitrix theme list` for the full list — every theme with its id, glyph, and a live color-swatch preview.

## Agent watching

`omnitrix watch` scans (read-only) for active sessions:

- **Claude Code** — `~/.claude/projects/**/*.jsonl`
- **Codex** — `~/.codex/sessions/**`
- **OpenCode** — `~/.local/share/opencode/**`, `~/.opencode/**`

A session is `busy` if touched in the last 60s, else `idle`. With `--loop` it re-scans every second and prints only when something changes. omnitrix never writes to or controls these agents — it only observes.

## Config

Selected theme persists to `~/.config/omnitrix/config.toml`.

## Development

```bash
npm run dev         # run from source via tsx (no build step)
npm run typecheck   # tsc --noEmit
npm run build       # emit dist/
```

## Tech

Node.js · TypeScript (ESM) · chalk · figlet · @iarna/toml

## License

MIT
