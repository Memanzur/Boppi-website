import { Clock, KeyRound, Users, Scale, Wrench, Sparkles, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const planned = [
  { icon: KeyRound, label: "Just-in-time access", hint: "Expiry and approval windows" },
  { icon: Users, label: "SSO and SCIM", hint: "Org identity lifecycle" },
  { icon: Scale, label: "Policy engine", hint: "Rules you author" },
  { icon: Wrench, label: "Automatic enforcement", hint: "Applying a change for you" },
  { icon: Sparkles, label: "Boppi Intelligence", hint: "Reviewed, consented learning" },
  { icon: CreditCard, label: "Billing", hint: "Paid plans and checkout" },
];

const Planned = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="planned" className="py-16 px-6 relative">
      {/* Old in-page links used #admin for the IT section. */}
      <div id="admin" />
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
            <Clock className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary">Planned</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Not in the account yet</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating an account does not turn these on. Remediation today is a
            proposal you approve and apply yourself, then check on the next scan.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {planned.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-card/60 backdrop-blur-sm border border-secondary/20"
              >
                <Icon className="w-4 h-4 text-secondary shrink-0" />
                <div className="flex items-baseline gap-1.5">
                  <span className="text-sm font-semibold">{item.label}</span>
                  <span className="text-[11px] text-muted-foreground hidden sm:inline">
                    {item.hint}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <Card className="p-5 md:p-6 bg-card/40 backdrop-blur-sm border-secondary/20 max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Plan names from the product direction — Free, Professional,
            Business, and Enterprise — are not a price list. Prices are not
            published, and checkout is not available. Packaging is a decision
            still open.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Planned;
