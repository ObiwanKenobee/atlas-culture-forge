
import { RegionCode } from "../types/atlas";

export class GeoService {
  // In a real implementation, this would use geolocation APIs
  // For demo purposes, we'll simulate detection
  static async detectUserRegion(): Promise<RegionCode> {
    // Simulate an API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, return random region or fixed region
    // In production, this would be based on IP geolocation
    const regions: RegionCode[] = [
      'global', 'east-asia', 'south-asia', 'africa', 
      'europe', 'latin-america', 'north-america', 'oceania'
    ];
    
    // For demo purposes, choose a random region
    // const randomIndex = Math.floor(Math.random() * regions.length);
    // return regions[randomIndex];
    
    // For this demo, default to global
    return 'global';
  }

  static getThemeClassForRegion(region: RegionCode): string {
    if (region === 'global') {
      return '';
    }
    return `theme-${region}`;
  }
}
