import { FileSearch, ShieldQuestion, Scale } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const rules = [
  {
    icon: FileSearch,
    title: "Local analysis, with explicit sharing",
    body:
      "The scanner reads configuration files locally and reports sanitized metadata, not the contents of files your assistant can access. Scans are not uploaded on their own. Data leaves only when you run boppi push (a sanitized inventory), boppi events push (hook activity metadata) or boppi connect (a paired computer's fix offers and results); review a push first with --dry-run. Downloading the package with npx uses the npm registry.",
  },
  {
    icon: ShieldQuestion,
    title: "A finding is a reason to review",
    body:
      "Boppi models potential access from supported configuration. It does not prove that access works, detect an attack in progress, or guarantee safety after a clean scan. Missing sources and inference limits matter.",
  },
  {
    icon: Scale,
    title: "You decide what changes",
    body:
      "Scanning and planning do not change permissions. The optional boppi fix command removes a chosen server entry, asks for confirmation by default, and creates a local backup. Review the tradeoff: a removed connection may stop a useful workflow, and backups contain the original configuration, including any secrets.",
  },
];

const Honesty = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="honesty" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-8 space-y-3">
          <p className="section-kicker">Boundary</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">Know what the results can tell you.</h2>
          <p className="text-lg text-muted-foreground">
            Clear evidence, clear limits, and a choice about what happens next.
          </p>
        </div>

        <Card className="p-6 md:p-8 bg-card border-border">
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
