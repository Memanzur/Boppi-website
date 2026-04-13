import { Download, ArrowRight, Shield, Zap, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 mb-6 glow-primary">
            <img src="/boppi-logo.png" alt="Boppi" className="w-12 h-12" />
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">boppi</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm font-medium">
              PII masking for teams using AI
            </Badge>
            <Badge className="bg-success/10 text-success border border-success/30 hover:bg-success/20 px-4 py-2 text-sm font-medium gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-success" />
              Now on Chrome Web Store
            </Badge>
          </div>
        </div>

        {/* Main Headline.
            Mobile: drops the hard <br/> so the browser can wrap naturally,
            and uses [text-wrap:balance] so the line breaks land cleanly
            instead of orphaning "Gemini." on its own line. */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground [text-wrap:balance] px-2 md:px-0">
          Stop sensitive data from leaking into{" "}
          <span className="font-serif italic font-normal text-foreground md:whitespace-nowrap">
            ChatGPT, Claude, and Gemini
          </span>
          <span className="text-primary">.</span>
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Your employees paste SSNs, patient records, bank details, and API keys into AI tools every day.
          Boppi detects and masks that data
          <span className="text-primary font-semibold"> before it ever reaches the model</span>.
        </p>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
            <Shield className="w-4 h-4" />
            <span>100% in-browser detection</span>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <Zap className="w-4 h-4" />
            <span>Masks as you type</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full">
            <Lock className="w-4 h-4" />
            <span>No data sent anywhere</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg font-semibold glow-primary"
            onClick={() => window.open('https://chromewebstore.google.com/detail/Boppi/pnfpbhjhmpfmkjdjpdbkapaibjmpmkld', '_blank')}
          >
            <Download className="w-5 h-5 mr-2" />
            Add to Chrome — Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/20 hover:bg-primary/5 px-8 py-4 text-lg"
            onClick={() => {
              const el = document.getElementById('how-it-works');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See how it works
          </Button>
        </div>

        {/* Supported surfaces */}
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Works on ChatGPT, Claude, Gemini, Perplexity, Copilot, Notion, Gmail, Salesforce,
          and any other web tool your team pastes into.
        </p>
      </div>

      {/* Floating orbs: slowly drift on their own tempos for a living feel. */}
      <div className="absolute top-16 left-8 w-28 h-28 md:w-40 md:h-40 rounded-full bg-primary/15 blur-2xl animate-boppi-drift-1" />
      <div className="absolute top-32 right-12 w-24 h-24 md:w-36 md:h-36 rounded-full bg-secondary/15 blur-2xl animate-boppi-drift-2" />
      <div className="absolute bottom-20 left-1/4 w-20 h-20 md:w-32 md:h-32 rounded-full bg-accent/15 blur-2xl animate-boppi-drift-3" />
      <div className="absolute bottom-32 right-8 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/10 blur-xl animate-boppi-drift-1" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default Hero;
