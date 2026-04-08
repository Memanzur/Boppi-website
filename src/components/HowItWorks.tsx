import { Download, MessageSquare, Shield, BarChart3 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    icon: Download,
    title: "Install from the Chrome Web Store",
    description:
      "One click to add Boppi to Chrome. No account, no config, no onboarding survey. The badge appears in the corner of every tab immediately.",
  },
  {
    icon: MessageSquare,
    title: "Open any AI tool",
    description:
      "Go to ChatGPT, Claude, Gemini, Copilot, or anywhere else your team works. Boppi is already watching the input field.",
  },
  {
    icon: Shield,
    title: "Type normally. Boppi masks before send",
    description:
      "The moment sensitive data shows up in your prompt, Boppi replaces it with a safe placeholder. You see the mask. The AI only ever sees the mask.",
  },
  {
    icon: BarChart3,
    title: "Check the dashboard",
    description:
      "See exactly what was caught, on which tools, and how often. IT managers can export audit logs as CSV for compliance reviews.",
  },
];

const HowItWorks = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="how-it-works" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four steps. No training. Your team keeps working the way they already do.
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
