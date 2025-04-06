
import { useGeoContext } from '@/context/GeoContext';
import { RegionCode } from '@/types/atlas';
import { AtlasButton } from './atlas/AtlasButton';
import { cn } from '@/lib/utils';

export const RegionSelector = () => {
  const { regions, currentRegion, setRegion } = useGeoContext();
  
  const regionCodes = Object.keys(regions) as RegionCode[];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">Select Region</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {regionCodes.map((code) => (
          <AtlasButton
            key={code}
            variant={currentRegion.id === code ? 'cultural' : 'outline'}
            className={cn(
              'justify-start transition-all',
              currentRegion.id === code ? 'ring-2 ring-atlas-accent' : ''
            )}
            onClick={() => setRegion(code)}
          >
            <span className="mr-2 text-lg">{regions[code].flagEmoji}</span>
            {regions[code].name}
          </AtlasButton>
        ))}
      </div>
    </div>
  );
};
