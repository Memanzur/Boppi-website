import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import BetaBanner from "@/components/BetaBanner";
import ComingSoon from "@/components/ComingSoon";
import Pricing from "@/components/Pricing";
import Privacy from "@/components/Privacy";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <HowItWorks />
      <BetaBanner />
      <ComingSoon />
      <Pricing />
      <Privacy />
      <Support />
      <Footer />
    </div>
  );
};

export default Index;
