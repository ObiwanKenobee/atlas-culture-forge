
export type RegionCode = 
  | 'global' 
  | 'east-asia' 
  | 'south-asia' 
  | 'africa' 
  | 'europe' 
  | 'latin-america' 
  | 'north-america' 
  | 'oceania';

export interface Region {
  id: RegionCode;
  name: string;
  description: string;
  culturalNote: string;
  designPhilosophy: string;
  flagEmoji?: string;
}

export type RegionThemeClass = `theme-${RegionCode}`;

export interface GeoContextType {
  currentRegion: Region;
  setRegion: (region: RegionCode) => void;
  regions: Record<RegionCode, Region>;
  themeClass: RegionThemeClass | '';
}

export interface DesignToken {
  name: string;
  value: string;
  description: string;
}

export interface CulturalDesignSystem {
  regionId: RegionCode;
  spacing: DesignToken[];
  typography: {
    fontFamily: string;
    headingStyle: string;
    bodyStyle: string;
  };
  colorPalette: DesignToken[];
  layoutPreferences: {
    density: 'compact' | 'balanced' | 'spacious';
    alignment: 'left' | 'center' | 'right';
    cornerStyle: 'sharp' | 'rounded' | 'pill';
  };
}
