import { Shield, Download, Star, Users, ArrowRight, Zap, Lock } from "lucide-react";
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
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">Boppi</span>
          </h1>
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm font-medium mb-6">
            🛡️ Your AI Data Guard
          </Badge>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          Protect Your Personal Information
          <br />
          <span className="gradient-text">In Real-Time</span>
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Detect and mask sensitive data across your web activity. 
          <span className="text-primary font-semibold"> Privacy-first</span>, 
          <span className="text-secondary font-semibold"> lightweight</span>, and 
          <span className="text-accent font-semibold"> fast</span>.
        </p>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
            <Shield className="w-4 h-4" />
            <span>100% Local Processing</span>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <Zap className="w-4 h-4" />
            <span>Real-time Detection</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full">
            <Lock className="w-4 h-4" />
            <span>Zero Data Collection</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg font-semibold glow-primary">
            <Download className="w-5 h-5 mr-2" />
            Download Extension
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 px-8 py-4 text-lg">
            Watch Demo
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-background" />
              ))}
            </div>
            <span className="text-sm">Join 10,000+ users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm">4.9/5 rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span className="text-sm">Trusted by privacy advocates</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-secondary/10 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-12 h-12 rounded-full bg-accent/10 animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;
