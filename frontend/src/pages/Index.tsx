import { HeroSection } from "../components/HeroSection";
import { WallsSection } from "../components/WallsSection";
import { TitansScale } from "../components/TitansScale";
import { TitanGallery } from "../components/TitanGallery";
import { TimelineSection } from "../components/TimelineSection";
import { Cursor } from "../components/Cursor";
import { AudioPlayer } from "../components/AudioPlayer";

export default function Index() {
  return (
    <div className="relative bg-background min-h-screen text-foreground selection:bg-primary/30">
      <div className="film-grain" />
      <Cursor />
      <AudioPlayer />
      
      <main>
        <HeroSection />
        <WallsSection />
        <TitansScale />
        <TitanGallery />
        <TimelineSection />
      </main>
    </div>
  );
}