import Hero from "@/components/Hero";
import SupportedTools from "@/components/SupportedTools";
import HowItWorks from "@/components/HowItWorks";
import ExampleReview from "@/components/ExampleReview";
import Features from "@/components/Features";
import Planned from "@/components/Planned";
import Pricing from "@/components/Pricing";
import Privacy from "@/components/Privacy";
import Footer from "@/components/Footer";
import FloatingBadge from "@/components/FloatingBadge";
import CursorStars from "@/components/CursorStars";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="boppi-dot-pattern" aria-hidden="true" />

      <div className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <SupportedTools />
        <HowItWorks />
        <ExampleReview />
        <Features />
        <Planned />
        <Pricing />
        <Privacy />
        <Footer />
      </div>

      <CursorStars />
      <FloatingBadge />
    </div>
  );
};

export default Index;
