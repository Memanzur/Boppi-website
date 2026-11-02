import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LINKS } from "@/lib/links";

const scannerFeatures = [
  "Discovery for Claude Desktop, Claude Code, and Cursor",
  "Security graph and attack paths from that configuration",
  "Permission-change recommendations",
  "Local remediation after you confirm, then verification",
  "Local rollback, in the latest scanner",
  "HTML, JSON, and SARIF reports",
  "Open source (Apache-2.0). A scan stays on your machine unless you run boppi push",
];

const teamFeatures = [
  "History for scans you push",
  "Team invites",
  "MFA on the account",
  "Versioned policies",
  "Exports",
];

const Pricing = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="pricing" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-12 space-y-4">
          <p className="section-kicker">Get started</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">Start local. Join the workspace.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The published scanner is v0.3.0. Rollback is in the latest scanner. The private beta is the cloud workspace.
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
                Version 0.3.0 asks before a local change. Rollback is in the latest scanner.
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
              <h3 className="text-2xl font-bold mb-2">Cloud workspace</h3>
              <div className="flex flex-wrap items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold">Private beta</span>
                <span className="text-muted-foreground text-sm">at app.boppi.io</span>
              </div>
              <p className="text-sm text-muted-foreground">
                History, invites, MFA, versioned policies, and exports. Cloud monitoring inside the workspace is in beta.
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
              <a href={LINKS.privateBeta} target="_blank" rel="noopener noreferrer">Join the private beta</a>
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
            On the roadmap, and not available in the beta: full just-in-time access with verified expiry, enterprise-wide permission changes, runtime blocking, and identity integrations including SSO.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
