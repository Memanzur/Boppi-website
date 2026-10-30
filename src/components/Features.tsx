import { Route, Wrench, FileSearch, KeyRound, Activity, ListTree } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: ListTree,
    title: "Find your AI connections",
    description:
      "Boppi discovers the AI agents, MCP servers, and tools on your machine, plus the files, keys, and services they connect to.",
    category: "Discover",
  },
  {
    icon: Route,
    title: "See where the risk is",
    description:
      "Reading files is fine. Sending data to the internet is fine. Together, they can leak private data. Boppi spots risky combinations like this and explains why in plain words.",
    category: "Understand",
  },
  {
    icon: Wrench,
    title: "Fix it in one click",
    description:
      "Restrict, change, or revoke what an AI can do with one approved click. Boppi saves a backup first, then checks that the fix took effect.",
    category: "Control",
  },
  {
    icon: KeyRound,
    title: "Just-in-Time access",
    description:
      "Give an AI tool access only when it needs it. Someone approves the request, and the access expires on its own.",
    category: "Grant",
  },
  {
    icon: Activity,
    title: "Watch for changes",
    description:
      "Boppi keeps an eye out for new connections and permission changes, and flags new risks as they show up.",
    category: "Monitor",
  },
  {
    icon: FileSearch,
    title: "Evidence behind every finding",
    description:
      "Boppi Intelligence shows what it found, how sure it is, and why. No black-box scores, just reasons you can check.",
    category: "Intelligence",
  },
];

const Features = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="features" className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-12 space-y-4">
          <p className="section-kicker">What Boppi does</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">Useful access can add up to real risk.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every AI tool you add can reach a little more. Boppi puts it all in one place,
            so you can see the risk and decide what stays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="relative overflow-hidden p-6 bg-card border-border hover:border-primary/50 transition-colors duration-200 group"
              >
                <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 group-hover:glow-secondary transition-all mb-4">
                  <Icon className="w-5 h-5 text-primary" />
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
