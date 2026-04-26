import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
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
      <StayInFlow />
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
