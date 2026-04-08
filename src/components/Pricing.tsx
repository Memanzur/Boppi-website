import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const launchFeatures = [
  "Real-time detection as you type",
  "Format-preserving masking (SSNs, credit cards, emails, API keys, and more)",
  "Works on ChatGPT, Claude, Gemini, Copilot, Perplexity, Notion, Gmail, and any web tool",
  "Right-click \"Check this text\" on-demand scan",
  "Local activity log and detection dashboard",
  "Industry profiles: Healthcare, Finance, Legal, Government, Education",
  "CSV audit log export",
  "Audited pause (with reason)",
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Free through launch. Team and enterprise plans coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free during launch */}
          <Card className="p-8 flex flex-col bg-gradient-to-b from-primary/10 to-card border-primary/30 glow-primary backdrop-blur-sm relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-xs font-semibold whitespace-nowrap">
              Available at Launch
            </div>

            <div className="mb-6 pt-4">
              <h3 className="text-2xl font-bold mb-2">Boppi for Individuals</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold">Free</span>
                <span className="text-muted-foreground text-sm">through launch</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Everything the extension ships with, no card required.
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {launchFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90"
              onClick={() => window.open('https://form.typeform.com/to/rqp5yYJf', '_blank')}
            >
              Join the Waitlist
            </Button>
          </Card>

          {/* Enterprise */}
          <Card className="p-8 flex flex-col bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="mb-6 pt-4">
              <h3 className="text-2xl font-bold mb-2">Boppi for Teams</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold">Let's talk</span>
              </div>
              <p className="text-sm text-muted-foreground">
                For IT, compliance, and security teams rolling Boppi out across an org.
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-sm">Company-wide masking policies</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-sm">Industry profile enforcement</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-sm">Centralized audit log export</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-sm">Deployment support and white-glove onboarding</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-sm">Direct line to the founding team</span>
              </li>
            </ul>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open('mailto:boppii.ioo@gmail.com?subject=Boppi%20for%20Teams', '_blank')}
            >
              Contact Sales
            </Button>
          </Card>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>No credit card required. No activation fee. Cancel any time.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
