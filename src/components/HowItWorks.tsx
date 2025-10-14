import { Search, Shield, Eye, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Install & Activate",
    description: "Add Boppi to your browser with one click. No configuration needed."
  },
  {
    icon: Shield,
    title: "Browse Normally",
    description: "Continue using the web as usual. Boppi works silently in the background."
  },
  {
    icon: Eye,
    title: "Automatic Detection",
    description: "AI scans in real-time, identifying sensitive information before it's exposed."
  },
  {
    icon: CheckCircle,
    title: "Smart Protection",
    description: "PII is masked or blocked instantly. You stay safe without lifting a finger."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to complete protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center group-hover:glow-secondary transition-all">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%+1rem)] w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
