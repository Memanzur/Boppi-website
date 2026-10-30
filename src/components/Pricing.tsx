import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LINKS } from "@/lib/links";

const scannerFeatures = [
  "Discovery for Claude Desktop, Claude Code, and Cursor",
  "Agent inventory, risk scores, and the six exposure path templates",
  "Suggested configuration changes ranked by modeled paths removed",
  "HTML and JSON reports with evidence per claim",
  "CI checks with --config and --fail-on",
  "Apache-2.0, no account or telemetry for scans. Explicit boppi push shares a sanitized inventory",
];

const teamFeatures = [
  "Centralized inventories and findings from submitted evidence — in development",
  "Organization roles, approvals, and audit workflows — locally implemented, unpublished",
  "Paired remediation and rollback — local synthetic tests; real-device validation pending",
  "Just-in-Time MCP configuration access — limited local implementation, unpublished",
  "Enterprise identity integrations — staged development; hosted validation pending",
];

const Pricing = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="pricing" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-12 space-y-4">
          <p className="section-kicker">Access</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">Start today. Help shape what comes next.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Use the free scanner now. For Cloud access and enterprise requirements, email us while the wider platform is in development.
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
                Public v0.3.0 · local analysis and supported server removal.
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
                <span className="text-5xl font-bold">In progress</span>
                <span className="text-muted-foreground text-sm">early access</span>
              </div>
              <p className="text-sm text-muted-foreground">
                For teams and enterprises that need shared visibility, access reviews, and supported controls.
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
              <a href={LINKS.earlyAccess}>Email about early access</a>
            </Button>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Email opens in your mail app
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>One platform, different release stages. The public scanner works without an account; this page does not promise immediate Cloud access or a general release date.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
