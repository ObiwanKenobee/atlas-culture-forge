
import { AtlasHeader } from "@/components/AtlasHeader";
import { RegionSelector } from "@/components/RegionSelector";
import { RegionInfo } from "@/components/RegionInfo";
import { AdaptiveDemo } from "@/components/AdaptiveDemo";
import { useGeoContext } from "@/context/GeoContext";

const Index = () => {
  const { themeClass } = useGeoContext();

  return (
    <div className={`min-h-screen ${themeClass} region-transition-container`}>
      <AtlasHeader />
      <main className="container pb-16 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h1 className="text-3xl font-bold mb-4 text-atlas-primary">Geo-Adaptive Framework</h1>
              <p className="text-lg mb-6">
                Experience how the interface adapts to different regional design patterns and cultural contexts.
                Select a region below to see how components, typography, colors, and spacing change to
                reflect local design philosophies.
              </p>
            </section>
            
            <RegionSelector />
            
            <AdaptiveDemo />
          </div>
          
          <aside className="space-y-6">
            <RegionInfo />
            
            <div className="p-4 bg-atlas-secondary/50 rounded-lg border">
              <h3 className="text-lg font-medium mb-2">About this Demo</h3>
              <p className="text-sm mb-3">
                This demonstration showcases the Atlas Platform's ability to adapt interfaces
                based on geographic and cultural contexts. Components dynamically change their appearance
                to match regional design preferences.
              </p>
              <p className="text-sm text-muted-foreground">
                In a full implementation, the system would automatically detect the user's location
                and apply appropriate design patterns while allowing manual overrides.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Index;
