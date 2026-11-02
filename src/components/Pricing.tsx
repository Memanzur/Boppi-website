import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LINKS } from "@/lib/links";

const scannerFeatures = [
  "Works with Claude Desktop, Claude Code, and Cursor",
  "Finds MCP connections and maps what their configuration can reach",
  "Potential exposure paths, with evidence and plain-language explanations",
  "A ranked plan of edits, and a fix that asks before it removes one server",
  "HTML, JSON, and SARIF reports",
  "CI checks with --config and --fail-on",
  "An optional local policy file. It grades the scan. It does not block tools while they run",
  "Open source (Apache-2.0). No account and no telemetry. A scan stays on your machine unless you run boppi push",
];

const teamFeatures = [
  "Inventory, findings, and history for scans you push",
  "Team invites",
  "Multi-factor authentication on the account",
  "Versioned policies",
  "Remediation proposals a person approves",
  "Exports",
];

const Pricing = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="pricing" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-12 space-y-4">
          <p className="section-kicker">Get started</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">Start with the scanner. Add a workspace.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Run the scanner today. Open a workspace when the team should see the same inventory. Creating an account does not collect payment today.
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
                Version 0.3.0. Scans locally. A fix asks first.
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
                <span className="text-5xl font-bold">No charge</span>
                <span className="text-muted-foreground text-sm">at app.boppi.io</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Shared inventory for the scans you push, with a person in the loop before a change.
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
          <p>
            The scanner needs no account. The workspace at app.boppi.io does not collect payment today.
            Coming soon: just-in-time access, single sign-on, automatic enforcement, and Boppi Intelligence.
            A foreground watch command is in development and is not in the published 0.3.0 scanner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
