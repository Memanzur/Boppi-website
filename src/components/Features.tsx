import { Route, Wrench, FileSearch, GitBranch, FileOutput, ListTree } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: ListTree,
    title: "See what is connected",
    description:
      "Find supported AI assistants and their configured tool connections. Understand which connections suggest access to files, credentials, commands, or external services.",
    category: "Visibility",
  },
  {
    icon: Route,
    title: "Understand why access matters",
    description:
      "Reading files and connecting to the internet can each be useful. Together, they may create a way for private data to leave your machine. Boppi highlights potential combinations like this and explains the evidence.",
    category: "Understanding",
  },
  {
    icon: Wrench,
    title: "Choose a change, then check it",
    description:
      "Compare suggested configuration changes and the access you would give up. The public fix command can remove a selected MCP server entry after confirmation, with a backup. Rescan to check the configuration; a scan itself changes no permissions.",
    category: "Control",
  },
  {
    icon: FileSearch,
    title: "Evidence on every claim",
    description:
      "Review what was read and what was inferred. Findings include evidence and confidence; a risk score helps prioritize review, rather than measuring the probability of an attack.",
    category: "Trust",
  },
  {
    icon: GitBranch,
    title: "Check configuration before shipping",
    description:
      "Developers can scan a specific configuration in CI with --config and --fail-on. Fail a check on a chosen severity or an unreadable configuration. This checks settings; it does not block an assistant at runtime.",
    category: "Ship",
  },
  {
    icon: FileOutput,
    title: "Keep a report you can review",
    description:
      "Save an HTML report, inspect the evidence in JSON, or compare local scan history. Reports stay on your machine unless you share them or explicitly push a sanitized inventory to a team workspace.",
    category: "Share",
  },
];

const Features = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="features" className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-12 space-y-4">
          <p className="section-kicker">Start today · public scanner v0.3.0</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">Useful access can add up to unexpected risk.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            As you add AI tools, it gets harder to keep track of what they can reach.
            Boppi connects the settings to the risk, so you can decide which access is necessary.
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
