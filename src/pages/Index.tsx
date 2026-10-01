import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import DiscoveryMarquee from "@/components/DiscoveryMarquee";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ExposurePaths from "@/components/ExposurePaths";
import Platform from "@/components/Platform";
import Pricing from "@/components/Pricing";
import Honesty from "@/components/Honesty";
import Footer from "@/components/Footer";
import CursorStars from "@/components/CursorStars";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="boppi-dot-pattern" aria-hidden="true" />

      <div className="relative" style={{ zIndex: 1 }}>
        <Nav />
        <Hero />
        <DiscoveryMarquee />
        <Features />
        <HowItWorks />
        <ExposurePaths />
        <Platform />
        <Pricing />
        <Honesty />
        <Footer />
      </div>

      <CursorStars />
    </div>
  );
};

export default Index;
