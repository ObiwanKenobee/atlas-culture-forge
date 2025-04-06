
import { AtlasButton } from './atlas/AtlasButton';
import { useGeoContext } from '@/context/GeoContext';

export const AtlasHeader = () => {
  const { currentRegion } = useGeoContext();

  return (
    <header className="py-6 mb-8 border-b transition-colors">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-atlas-primary">
              Atlas Platform
            </h1>
            <p className="text-atlas-muted mt-1">Geo-Adaptive Framework: Code as Culture</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Current Region: {currentRegion.flagEmoji} {currentRegion.name}
            </span>
            <AtlasButton size="sm">View Documentation</AtlasButton>
          </div>
        </div>
      </div>
    </header>
  );
};
