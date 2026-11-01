import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { signupUrl } from "@/lib/app-url";
import { contactMailto } from "@/lib/site";

const availableNow = [
  "Account and workspace in Boppi Cloud",
  "Discovery for Claude Desktop, Claude Code, and Cursor on an enrolled computer",
  "Potential access paths, with unknowns left visible",
  "Evidenced findings kept with history",
  "Monitoring, missed-report notices, and in-app alerts",
  "Propose and approve a remediation, apply it manually, verify on the next scan",
  "Audit record and export",
  "Optional MFA",
];

const Pricing = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="pricing" className="py-16 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Account</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Billing is planned. There is no checkout and no published price.
            Creating an account does not ask for a card.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8 flex flex-col bg-gradient-to-b from-primary/10 to-card border-primary/30 glow-primary backdrop-blur-sm relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-xs font-semibold whitespace-nowrap">
              Available now
            </div>

            <div className="mb-6 pt-4">
              <h3 className="text-2xl font-bold mb-2">Boppi Cloud</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold">No charge</span>
              </div>
              <p className="text-sm text-muted-foreground">
                What the control plane includes today. This is not a paid tier,
                and it is not a promise that it stays unpriced.
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {availableNow.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90"
            >
              <a href={signupUrl()}>Create a secure account</a>
            </Button>
          </Card>

          <Card className="p-8 flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="mb-6 pt-4">
              <h3 className="text-2xl font-bold mb-2">Planned</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold">Not priced</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Named here so they are not mistaken for something you can buy.
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "Billing and paid plans",
                "Just-in-time access",
                "SSO and SCIM",
                "Policy engine",
                "Automatic enforcement",
                "Boppi Intelligence",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-sm">{feature} — planned</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="outline" className="w-full">
              <a href={contactMailto("Boppi Cloud")}>Ask a question</a>
            </Button>
          </Card>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>No payment is collected when you create an account.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
