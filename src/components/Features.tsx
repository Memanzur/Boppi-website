import { Shield, Zap, Lock, MousePointer2, PauseCircle, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Zap,
    title: "Detects as you type",
    description:
      "Boppi watches the input field. The moment you start typing a SSN, credit card, API key, email, or phone number, it's flagged and masked before the submit.",
    category: "Core",
  },
  {
    icon: Shield,
    title: "Format-preserving masking",
    description:
      "SSNs become ***-**-6789. Emails become [Email]. Credit cards become **** **** **** 4242. The AI still gets a coherent prompt, just without the sensitive bits.",
    category: "Core",
  },
  {
    icon: Lock,
    title: "100% local, no network calls",
    description:
      "Detection and masking run entirely in your browser. Your activity log stays on your machine. Nothing is sent to Boppi, to us, or to anyone else.",
    category: "Privacy",
  },
  {
    icon: Sparkles,
    title: "Works on every AI surface",
    description:
      "ChatGPT, Claude, Gemini, Perplexity, Copilot, Notion AI, Gmail, Salesforce Einstein, and any other web tool your team pastes into.",
    category: "Coverage",
  },
  {
    icon: MousePointer2,
    title: "Right-click to scan",
    description:
      "Reviewing a draft or pasting from somewhere unexpected? Highlight any text on any page and choose \"Boppi: Check this text\" to scan on demand.",
    category: "Core",
  },
  {
    icon: PauseCircle,
    title: "Audited pause",
    description:
      "Users can pause masking if they genuinely need to, but they have to say why. The reason gets logged so IT has a full picture of when and why protection was off.",
    category: "Trust",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">What Boppi does</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A small badge sits in the corner of the screen so you always know Boppi is watching.
            Here's what it's doing.
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
                  <Badge className="bg-success/20 text-success hover:bg-success/30">Live</Badge>
                </div>

                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {feature.category}
                  </span>
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
