import Hero from "@/components/Hero";
import AiToolsMarquee from "@/components/AiToolsMarquee";
import LiveDemo from "@/components/LiveDemo";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ComingSoon from "@/components/ComingSoon";
import Pricing from "@/components/Pricing";
import Privacy from "@/components/Privacy";
import Footer from "@/components/Footer";
import FloatingBadge from "@/components/FloatingBadge";
import CursorStars from "@/components/CursorStars";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global fixed dot pattern behind all content. */}
      <div className="boppi-dot-pattern" aria-hidden="true" />

      {/* Actual page content sits above the dot pattern. */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <AiToolsMarquee />
        <LiveDemo />
        <Features />
        <HowItWorks />
        <ComingSoon />
        <Pricing />
        <Privacy />
        <Footer />
      </div>

      {/* Global overlays */}
      <CursorStars />
      <FloatingBadge />
    </div>
  );
};

export default Index;
