import { FileSearch, ShieldQuestion, Scale } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const rules = [
  {
    icon: FileSearch,
    title: "The scanner reads metadata only",
    body:
      "It never collects secret values, environment variable values, file contents, or raw filesystem paths. Paths become fingerprints before they reach the report. Every file read is listed at the end of the run so you can check the claim yourself.",
  },
  {
    icon: ShieldQuestion,
    title: "Paths are potential, not attacks",
    body:
      "Boppi sees what the configuration would allow. It cannot tell you an agent has been exploited. Capabilities inferred from a package name are labeled inferred, and if you ask, we say so plainly.",
  },
  {
    icon: Scale,
    title: "We do not claim to be the only ones",
    body:
      "Other vendors can see local agents and MCP servers too. What Boppi adds is the graph, the path, and the computed smallest fix, with the evidence attached. Judge it on a scan of your own machine.",
  },
];

const Honesty = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="honesty" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-8 space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Honest by design</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A security tool that overstates what it knows is a liability. These are the rules the
            code is written to.
          </p>
        </div>

        <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20">
          <ul className="space-y-5">
            {rules.map((rule) => {
              const Icon = rule.icon;
              return (
                <li key={rule.title} className="flex items-start gap-4">
                  <div className="shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{rule.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{rule.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 pt-5 border-t border-border/50 text-center">
            <a href="/privacy" className="text-sm text-primary hover:underline font-semibold">
              Read the privacy policy
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Honesty;
