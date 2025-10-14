import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const BetaBanner = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 p-8 md:p-12 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/30">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Public Beta</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Join the Beta Program
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're in public beta and actively gathering feedback to improve accuracy and performance. 
              Help shape the future of online privacy protection.
            </p>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>🎯 Core features are live and stable</p>
              <p>⚡ New capabilities being added weekly</p>
              <p>🔧 Some advanced features still in development</p>
            </div>

            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity"
              onClick={() => window.open('https://form.typeform.com/to/rqp5yYJf', '_blank')}
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaBanner;
