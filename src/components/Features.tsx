import { Route, Wrench, FileSearch, GitBranch, FileOutput, ListTree } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: ListTree,
    title: "Agent inventory with a risk score",
    description:
      "Every agent on the machine, the MCP servers behind it, the capabilities those servers grant, and a 0 to 100 score you can trace back to the rules that produced it.",
    category: "Discover",
  },
  {
    icon: Route,
    title: "Exposure paths, not a pile of findings",
    description:
      "Boppi builds a graph of agents, servers, capabilities, data, credentials, and destinations, then walks it. A path is reported only when the whole chain is in the graph.",
    category: "Understand",
  },
  {
    icon: Wrench,
    title: "The smallest fix, computed",
    description:
      "For each grant, the engine removes it, reruns the search, and counts the paths that disappear. The grant that breaks the most paths is the recommended fix. npx boppi-cli verify boppi-scan.json rescans and confirms it is gone.",
    category: "Prioritize",
  },
  {
    icon: FileSearch,
    title: "Evidence on every claim",
    description:
      "Capabilities inferred from a package name say so, with a confidence. Unknown stays unknown. Nothing is presented as observed fact that the scanner did not observe.",
    category: "Trust",
  },
  {
    icon: GitBranch,
    title: "A gate for CI",
    description:
      "npx boppi-cli scan --fail-on critical --quiet fails the job when a critical path exists on the runner, or when a client config could not be analyzed.",
    category: "Ship",
  },
  {
    icon: FileOutput,
    title: "Reports you can hand over",
    description:
      "npx boppi-cli scan --html boppi-report.html writes a self-contained report for the security lead, JSON carries the full evidence per claim, and npx boppi-cli history keeps a sanitized local record of past scans.",
    category: "Share",
  },
];

const Features = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="features" className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-12 space-y-4">
          <p className="section-kicker">Product surface</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">From config to a fix you can defend.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each hop in a path is authorized. The path never was. Boppi shows you the path.
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
