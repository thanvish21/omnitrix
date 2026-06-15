// Persistent user config stored as TOML at ~/.config/omnitrix/config.toml.
import * as TOML from "@iarna/toml";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export interface OmniConfig {
  theme: string;
}

const DEFAULT_CONFIG: OmniConfig = { theme: "heatblast" };

const CONFIG_DIR = path.join(os.homedir(), ".config", "omnitrix");
export const CONFIG_PATH = path.join(CONFIG_DIR, "config.toml");

function ensureDir(): void {
  try {
    fs.mkdirSync(CONFIG_DIR, { recursive: true });
  } catch {
    // Best-effort; downstream writes will surface real failures.
  }
}

export function loadConfig(): OmniConfig {
  try {
    if (!fs.existsSync(CONFIG_PATH)) {
      saveConfig(DEFAULT_CONFIG);
      return { ...DEFAULT_CONFIG };
    }
    const raw = fs.readFileSync(CONFIG_PATH, "utf8");
    const parsed = TOML.parse(raw) as Partial<OmniConfig>;
    const theme =
      typeof parsed.theme === "string" && parsed.theme.length > 0
        ? parsed.theme
        : DEFAULT_CONFIG.theme;
    return { theme };
  } catch {
    // Corrupt/unreadable file — fall back to defaults without crashing.
    return { ...DEFAULT_CONFIG };
  }
}

export function saveConfig(cfg: OmniConfig): void {
  try {
    ensureDir();
    const data = TOML.stringify(cfg as unknown as TOML.JsonMap);
    fs.writeFileSync(CONFIG_PATH, data, "utf8");
  } catch {
    // Persistence is non-fatal; in-memory state continues.
  }
}

export function setTheme(id: string): void {
  const cfg = loadConfig();
  saveConfig({ ...cfg, theme: id });
}

export function getCurrentThemeId(): string {
  return loadConfig().theme;
}
