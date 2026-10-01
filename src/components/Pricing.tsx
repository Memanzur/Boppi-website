import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LINKS, SCAN_COMMAND } from "@/lib/links";

const scannerFeatures = [
  "Discovery for Claude Desktop, Claude Code, and Cursor",
  "Agent inventory, risk scores, and the six exposure path templates",
  "Root cause with the smallest fix, verified by re-simulation",
  "HTML and JSON reports with evidence per claim",
  "CI gate with --fail-on and clear exit codes",
  "Apache-2.0, no account, no telemetry, no network code",
];

const pilotFeatures = [
  "Thirty minutes, on a call, on your machines",
  "You write down what you think your agents can reach before we scan",
  "We count the high and critical findings that were not on your list",
  "You keep the report either way",
  "If it finds nothing, that is a valid result and we say so",
];

const Pricing = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="pricing" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The scanner is free and stays free. Teams start with a pilot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8 flex flex-col bg-gradient-to-b from-primary/10 to-card border-primary/30 glow-primary backdrop-blur-sm relative">
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
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-background font-mono font-semibold"
              onClick={() => window.open(LINKS.github, "_blank", "noopener")}
            >
              {SCAN_COMMAND}
            </Button>
          </Card>

          <Card className="p-8 flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="mb-6 pt-4">
              <h3 className="text-2xl font-bold mb-2">Boppi for teams</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold">Pilot</span>
                <span className="text-muted-foreground text-sm">free, then let's talk</span>
              </div>
              <p className="text-sm text-muted-foreground">
                For security leads at companies whose engineers use AI coding tools.
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {pilotFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open(LINKS.pilot, "_blank")}
            >
              Book a pilot
            </Button>
          </Card>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>No card, no signup, no sales deck before you have seen a scan of your own machine.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
