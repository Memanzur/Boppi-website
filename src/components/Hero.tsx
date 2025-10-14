import { Button } from "@/components/ui/button";
import { Shield, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card" />
      
      {/* Animated background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-glow-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20 backdrop-blur-sm mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </span>
          <span className="text-sm text-muted-foreground">Beta Access Now Available</span>
        </div>

        <div className="flex justify-center mb-8">
          <img src="/boppi-logo.png" alt="Boppi Logo" className="w-32 h-32 animate-float glow-primary" />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          <span className="gradient-text">Boppi</span>
        </h1>
        
        <p className="text-2xl md:text-3xl font-semibold text-foreground/90 max-w-3xl mx-auto">
          Your AI Data Guard
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Protect your personal information in real-time. Boppi detects and masks sensitive data 
          across your web activity—lightweight, fast, and privacy-first.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" className="gap-2 text-lg px-8 py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity glow-primary">
            <Download className="w-5 h-5" />
            Install Extension
          </Button>
          <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
            <Shield className="w-5 h-5" />
            Learn More
          </Button>
        </div>

        <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-success" />
            <span>100% Local Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-success" />
            <span>No Data Storage</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-success" />
            <span>Real-time Protection</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
