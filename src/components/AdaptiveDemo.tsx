
import { useGeoContext } from '@/context/GeoContext';
import { AtlasButton } from './atlas/AtlasButton';
import { AtlasCard, AtlasCardHeader, AtlasCardTitle, AtlasCardContent, AtlasCardFooter } from './atlas/AtlasCard';

export const AdaptiveDemo = () => {
  const { currentRegion } = useGeoContext();

  return (
    <div className="space-y-6 animate-region-transition">
      <h2 className="text-2xl font-semibold mb-3">Adaptive UI Components</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Buttons Demo */}
        <AtlasCard>
          <AtlasCardHeader>
            <AtlasCardTitle>Adaptive Buttons</AtlasCardTitle>
          </AtlasCardHeader>
          <AtlasCardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <AtlasButton variant="cultural">Primary Action</AtlasButton>
              <AtlasButton variant="outline">Secondary Action</AtlasButton>
              <AtlasButton variant="ghost">Subtle Action</AtlasButton>
            </div>
            <p className="text-sm text-muted-foreground">
              Buttons adapt their styling based on {currentRegion.name}'s design principles.
            </p>
          </AtlasCardContent>
        </AtlasCard>

        {/* Cards Demo */}
        <AtlasCard>
          <AtlasCardHeader>
            <AtlasCardTitle>Adaptive Cards</AtlasCardTitle>
          </AtlasCardHeader>
          <AtlasCardContent className="space-y-4">
            <p className="text-sm">
              This card's appearance changes based on regional preferences:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
              <li>Border weight and style</li>
              <li>Shadow intensity</li>
              <li>Corner radius</li>
              <li>Typography scale</li>
            </ul>
          </AtlasCardContent>
          <AtlasCardFooter>
            <div className="text-xs text-muted-foreground">
              Current style: {currentRegion.name}
            </div>
          </AtlasCardFooter>
        </AtlasCard>
      </div>

      {/* Typography Demo */}
      <AtlasCard>
        <AtlasCardHeader>
          <AtlasCardTitle>Regional Typography</AtlasCardTitle>
        </AtlasCardHeader>
        <AtlasCardContent className="space-y-4">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold">Heading Level 1</h1>
            <h2 className="text-2xl font-semibold">Heading Level 2</h2>
            <h3 className="text-xl font-medium">Heading Level 3</h3>
            <p className="text-base">
              This is paragraph text that demonstrates the regionally adaptive typography system.
              Notice how spacing, line height, and text weight may change based on regional preferences.
            </p>
            <p className="text-sm text-muted-foreground">
              This is smaller text with reduced emphasis, useful for supporting content.
            </p>
          </div>
        </AtlasCardContent>
      </AtlasCard>

      {/* Color Palette Demo */}
      <AtlasCard>
        <AtlasCardHeader>
          <AtlasCardTitle>Regional Color Palette</AtlasCardTitle>
        </AtlasCardHeader>
        <AtlasCardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="space-y-1">
              <div className="h-16 rounded bg-atlas-primary"></div>
              <p className="text-xs font-medium">Primary</p>
            </div>
            <div className="space-y-1">
              <div className="h-16 rounded bg-atlas-secondary"></div>
              <p className="text-xs font-medium">Secondary</p>
            </div>
            <div className="space-y-1">
              <div className="h-16 rounded bg-atlas-accent"></div>
              <p className="text-xs font-medium">Accent</p>
            </div>
            <div className="space-y-1">
              <div className="h-16 rounded bg-atlas-muted"></div>
              <p className="text-xs font-medium">Muted</p>
            </div>
            <div className="space-y-1">
              <div className="h-16 rounded bg-atlas-surface border"></div>
              <p className="text-xs font-medium">Surface</p>
            </div>
          </div>
        </AtlasCardContent>
      </AtlasCard>
    </div>
  );
};
