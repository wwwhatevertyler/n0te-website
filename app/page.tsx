import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StoryScrollSection from "@/components/StoryScrollSection";
import StayInFlow from "@/components/FeatureStrip";
import FeatureGrid from "@/components/FeatureGrid";
import LandscapeNoteSection from "@/components/LandscapeNoteSection";
import ObsidianVault from "@/components/ObsidianVault";
import ForBuilders from "@/components/ForBuilders";
import ObjectionSection from "@/components/ObjectionSection";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/PowerFeatures";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-bg">
      <Nav />
      <Hero />
      <div className="px-6 pt-8 sm:px-8 sm:pt-10 lg:px-10" aria-hidden="true">
        <div className="mx-auto max-w-5xl">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
      <StayInFlow />
      <div className="px-6 py-24 sm:px-8 sm:py-28 lg:px-10" aria-hidden="true">
        <div className="mx-auto max-w-5xl">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
      <div>
        <StoryScrollSection compactEnd />
      </div>
      <div className="px-6 sm:px-8 lg:px-10" aria-hidden="true">
        <div className="mx-auto max-w-5xl">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
      <FeatureGrid />
      <LandscapeNoteSection />
      <ObsidianVault />
      <ForBuilders />
      <ObjectionSection />
      <Reviews />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
