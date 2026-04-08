import Hero from "@/components/Hero";
import LiveDemo from "@/components/LiveDemo";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import BetaBanner from "@/components/BetaBanner";
import ComingSoon from "@/components/ComingSoon";
import Pricing from "@/components/Pricing";
import Privacy from "@/components/Privacy";
import Support from "@/components/Support";
import Footer from "@/components/Footer";
import FloatingBadge from "@/components/FloatingBadge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <LiveDemo />
      <Features />
      <HowItWorks />
      <BetaBanner />
      <ComingSoon />
      <Pricing />
      <Privacy />
      <Support />
      <Footer />
      <FloatingBadge />
    </div>
  );
};

export default Index;
