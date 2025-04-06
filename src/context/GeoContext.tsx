
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { GeoService } from '../services/GeoService';
import { GeoContextType, RegionCode } from '../types/atlas';
import { regions } from '../data/regions';

// Create the context with a default value
const GeoContext = createContext<GeoContextType>({
  currentRegion: regions.global,
  setRegion: () => {},
  regions,
  themeClass: '',
});

export const GeoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentRegionCode, setCurrentRegionCode] = useState<RegionCode>('global');
  const [isLoading, setIsLoading] = useState(true);
  const [themeClass, setThemeClass] = useState<string>('');

  // On mount, detect the user's region
  useEffect(() => {
    const detectRegion = async () => {
      try {
        const detectedRegion = await GeoService.detectUserRegion();
        setCurrentRegionCode(detectedRegion);
        setThemeClass(GeoService.getThemeClassForRegion(detectedRegion));
      } catch (error) {
        console.error('Failed to detect region:', error);
        // Fallback to global
        setCurrentRegionCode('global');
        setThemeClass('');
      } finally {
        setIsLoading(false);
      }
    };

    detectRegion();
  }, []);

  // Update the theme class when region changes
  useEffect(() => {
    setThemeClass(GeoService.getThemeClassForRegion(currentRegionCode));
  }, [currentRegionCode]);

  // Function to manually change the region
  const setRegion = (region: RegionCode) => {
    setCurrentRegionCode(region);
  };

  return (
    <GeoContext.Provider
      value={{
        currentRegion: regions[currentRegionCode],
        setRegion,
        regions,
        themeClass,
      }}
    >
      {children}
    </GeoContext.Provider>
  );
};

// Custom hook to use the geo context
export const useGeoContext = () => useContext(GeoContext);
