import { Route, Wrench, FileSearch, KeyRound, Activity, ListTree } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: ListTree,
    title: "Find your AI connections",
    description:
      "Boppi reads MCP configuration for Claude Desktop, Claude Code, and Cursor. It lists the agents and servers it finds, and the capabilities that configuration implies.",
    category: "Discover",
  },
  {
    icon: Route,
    title: "See where the risk is",
    description:
      "Reading files is one grant. Sending data to the internet is another. Together they can be a problem. Boppi models those chains and explains the evidence in plain words. A path is potential, not proof of an incident.",
    category: "Understand",
  },
  {
    icon: Wrench,
    title: "Propose a fix, then approve it",
    description:
      "boppi plan compares edits and changes nothing. boppi fix removes one server only after you confirm in the terminal, and it saves a backup first. The next scan is how you check the result.",
    category: "Control",
  },
  {
    icon: KeyRound,
    title: "Just-in-time access",
    description:
      "Coming soon. The published scanner does not grant temporary access or expire it for you. A person still approves any configuration change.",
    category: "Coming soon",
  },
  {
    icon: Activity,
    title: "See what changed",
    description:
      "Run the scan again. Local history compares it with the previous one. A foreground watch command is coming soon and is not in the published 0.3.0 scanner.",
    category: "History",
  },
  {
    icon: FileSearch,
    title: "Evidence behind every finding",
    description:
      "Each path names what the configuration showed, how confident the model is, and what is still unknown. You can check the reason. It is not a black-box score.",
    category: "Evidence",
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
