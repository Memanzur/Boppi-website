import { Shield, Zap, Lock, TrendingUp, Briefcase, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Shield,
    title: "Real-time Detection",
    description: "Detects PII instantly as you type or browse, keeping you protected at every moment.",
    status: "live",
    category: "Core"
  },
  {
    icon: Zap,
    title: "Smart Masking",
    description: "Automatically replaces or hides sensitive text before it can be exposed.",
    status: "live",
    category: "Core"
  },
  {
    icon: Lock,
    title: "Privacy-first",
    description: "All processing stays local to your browser. Your data never leaves your device.",
    status: "live",
    category: "Core"
  },
  {
    icon: TrendingUp,
    title: "Risk Analytics",
    description: "Shows risk levels and privacy trends to help you understand your exposure.",
    status: "beta",
    category: "Beta"
  },
  {
    icon: Briefcase,
    title: "Industry-specific Patterns",
    description: "Custom PII rules for healthcare, finance, legal, and other regulated industries.",
    status: "beta",
    category: "Beta"
  },
  {
    icon: AlertCircle,
    title: "Fraud Detection",
    description: "Identifies phishing and scam patterns before you click, keeping you safe.",
    status: "coming",
    category: "Advanced"
  }
];

const Features = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live":
        return <Badge className="bg-success/20 text-success hover:bg-success/30">✅ Live</Badge>;
      case "beta":
        return <Badge className="bg-warning/20 text-warning hover:bg-warning/30">⚙️ Beta</Badge>;
      case "coming":
        return <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30">🚀 Coming Soon</Badge>;
      default:
        return null;
    }
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built to protect you at every step, with more capabilities being added continuously
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:glow-primary group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 group-hover:glow-secondary transition-all">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  {getStatusBadge(feature.status)}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                
                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{feature.category}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
