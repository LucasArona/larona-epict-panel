export interface SimpleOptions {
  bgURL: string;
  boxes: Box[];
}

export interface Box {
  serie: string;
  text: string;
  suffix: string;
  prefix: string;
  xpos: number;
  ypos: number;
  angle: number;
  fontSize: number;
  prefixSize: number;
  suffixSize: number;
  color: string;
  decimal: number;
  isUsingThresholds: boolean;
  thresholds: string;
  colorLow: string;
  colorMedium: string;
  colorHigh: string;
  blinkLow: boolean;
  blinkHigh: boolean;
  hasOrb: boolean;
  hasBackground: boolean;
  backgroundColor: string;
  orbSize: number;
  orbHideText: boolean;
  orbLocation: OrbLocations;
  url: string;
}

export type OrbLocations = 'Top' | 'Bottom' | 'Left' | 'Right';
