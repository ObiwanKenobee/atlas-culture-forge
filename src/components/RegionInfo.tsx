
import { useGeoContext } from '@/context/GeoContext';
import { AtlasCard, AtlasCardHeader, AtlasCardTitle, AtlasCardDescription, AtlasCardContent } from './atlas/AtlasCard';

export const RegionInfo = () => {
  const { currentRegion } = useGeoContext();

  return (
    <AtlasCard className="animate-region-transition">
      <AtlasCardHeader>
        <AtlasCardTitle>
          {currentRegion.flagEmoji} {currentRegion.name}
        </AtlasCardTitle>
        <AtlasCardDescription>
          {currentRegion.description}
        </AtlasCardDescription>
      </AtlasCardHeader>
      <AtlasCardContent className="space-y-4">
        <div>
          <h3 className="font-medium text-lg mb-1">Cultural Note</h3>
          <p className="text-sm text-muted-foreground">{currentRegion.culturalNote}</p>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-1">Design Philosophy</h3>
          <p className="text-sm text-muted-foreground">{currentRegion.designPhilosophy}</p>
        </div>
      </AtlasCardContent>
    </AtlasCard>
  );
};
