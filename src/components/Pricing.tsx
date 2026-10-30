import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LINKS } from "@/lib/links";

const scannerFeatures = [
  "Works with Claude Desktop, Claude Code, and Cursor",
  "Finds AI connections and maps what they can reach",
  "Risk scores with plain-language explanations",
  "Suggested fixes, ranked by how much risk they remove",
  "HTML and JSON reports with evidence for every finding",
  "CI checks with --config and --fail-on",
  "Open source (Apache-2.0). No account, no telemetry. Scans stay on your machine unless you share them",
];

const teamFeatures = [
  "One dashboard for every device and finding",
  "Organizations, roles, and audit history",
  "One-click remediation with rollback",
  "Just-in-Time access with approvals and automatic expiration",
  "Single sign-on and organization-wide policies",
];

const Pricing = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="pricing" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-12 space-y-4">
          <p className="section-kicker">Get started</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">Start free. Bring your whole team.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Run the free scanner today. Bring your team into a free workspace when you're ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8 flex flex-col bg-card border-primary/40 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-xs font-semibold whitespace-nowrap text-background">
              Open source
            </div>

            <div className="mb-6 pt-4">
              <h3 className="text-2xl font-bold mb-2">boppi scan</h3>
              <div className="flex flex-wrap items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold">Free</span>
                <span className="text-muted-foreground text-sm">Apache-2.0</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Version 0.3.0 · scans and one-click fixes.
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {scannerFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-mono font-semibold"
              asChild
            >
              <a href="/checkup">Run a free checkup</a>
            </Button>
          </Card>

          <Card className="p-8 flex flex-col bg-card border-border hover:border-secondary/50 transition-colors duration-200">
            <div className="mb-6 pt-4">
              <h3 className="text-2xl font-bold mb-2">Boppi Cloud & Control</h3>
              <div className="flex flex-wrap items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold">Free beta</span>
                <span className="text-muted-foreground text-sm">at app.boppi.io</span>
              </div>
              <p className="text-sm text-muted-foreground">
                For teams and enterprises that need shared visibility, approvals, and control over AI access.
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {teamFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90"
              asChild
            >
              <a href={LINKS.signup} target="_blank" rel="noopener noreferrer">Create a workspace</a>
            </Button>
            <a
              href={LINKS.talk}
              className="mt-3 text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Talk to us
            </a>
          </Card>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>The scanner works with no account. The team workspace is a free beta at app.boppi.io. Need enterprise features? Talk to us.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
