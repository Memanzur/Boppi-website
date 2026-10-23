import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LINKS, SCAN_COMMAND } from "@/lib/links";

const scannerFeatures = [
  "Discovery for Claude Desktop, Claude Code, and Cursor",
  "Agent inventory, risk scores, and the six exposure path templates",
  "Suggested configuration changes ranked by modeled paths removed",
  "HTML and JSON reports with evidence per claim",
  "CI gate with --fail-on and clear exit codes",
  "Apache-2.0, no account or telemetry for scans. Explicit boppi push shares a sanitized inventory",
];

const teamFeatures = [
  "Create a workspace, invite your team, generate a collector token",
  "npx boppi push sends one scan's sanitized inventory per machine",
  "Review supported agents, servers, and potential paths from submitted inventories",
  "Rescan and push again to update workspace evidence; incomplete scans can retain older records",
  "Free during the beta. Any change to that shows up on this page first",
];

const Pricing = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="pricing" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-12 space-y-4">
          <p className="section-kicker">Access</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">Start with one machine. Add the workspace when you need it.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The scanner is free and stays free. The team workspace is a free public beta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8 flex flex-col bg-card border-primary/40 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-xs font-semibold whitespace-nowrap text-background">
              Open source
            </div>

            <div className="mb-6 pt-4">
              <h3 className="text-2xl font-bold mb-2">boppi scan</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold">Free</span>
                <span className="text-muted-foreground text-sm">forever, Apache-2.0</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The local scanner and the whole engine, in the open.
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
              onClick={() => window.open(LINKS.github, "_blank", "noopener")}
            >
              {SCAN_COMMAND}
            </Button>
          </Card>

          <Card className="p-8 flex flex-col bg-card border-border hover:border-secondary/50 transition-colors duration-200">
            <div className="mb-6 pt-4">
              <h3 className="text-2xl font-bold mb-2">Boppi for teams</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold">Free beta</span>
                <span className="text-muted-foreground text-sm">at app.boppi.io</span>
              </div>
              <p className="text-sm text-muted-foreground">
                For teams reviewing AI assistant configuration across multiple machines.
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
              onClick={() => window.open(LINKS.app, "_blank", "noopener")}
            >
              Create a workspace
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
          <p>Start locally without an account. The scanner and optional workspace are separate from the planned Boppi Intelligence platform.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
