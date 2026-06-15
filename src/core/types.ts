// Shared theme contract. ALL themes across ben10/cartoon-network/anime conform to this.

export type ThemeGroup =
  | "ben10-aliens"
  | "ben10-humans"
  | "ben10-villains"
  | "cartoon-network"
  | "anime";

export type BorderStyle =
  | "single"
  | "double"
  | "round"
  | "bold"
  | "classic"
  | "arrow";

export interface ColorTokens {
  primary: string; // hex
  secondary: string;
  accent: string;
  background: string;
  text: string;
  border: string;
  success: string;
  error: string;
  warning: string;
}

export interface StatusIcons {
  ok: string;
  busy: string;
  idle: string;
  error: string;
  bullet: string;
}

export interface Theme {
  id: string; // kebab-case, unique across ALL groups
  name: string; // display name
  group: ThemeGroup;
  colors: ColorTokens;
  /** Multi-line ASCII logo. Keep <= 80 cols wide. */
  ascii: string;
  /** Single decorative glyph used as accent throughout the UI. */
  glyph: string;
  borderStyle: BorderStyle;
  statusIcons: StatusIcons;
}

export type ThemeMap = Record<string, Theme>;
