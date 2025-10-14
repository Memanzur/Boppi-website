import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Beta Access",
    price: "$0",
    period: "until public release",
    description: "Get started with core protection features",
    features: [
      "Real-time PII detection",
      "Smart masking",
      "Local processing only",
      "Risk analytics dashboard",
      "Email support"
    ],
    cta: "Start Free Beta",
    highlight: false
  },
  {
    name: "General Use",
    price: "$8",
    period: "per month",
    description: "Complete protection for individuals",
    features: [
      "Everything in Beta",
      "Priority support",
      "Industry-specific patterns",
      "Advanced fraud detection",
      "Unlimited scanning",
      "Chrome & Firefox"
    ],
    cta: "Get Protected",
    highlight: true
  },
  {
    name: "Compliance Suite",
    price: "$25",
    period: "per month",
    description: "For professionals and small teams",
    features: [
      "Everything in General",
      "Compliance reporting",
      "HIPAA, SOC2, GDPR tools",
      "Risk dashboards",
      "Team management (up to 5)",
      "Audit logs"
    ],
    cta: "Start Trial",
    highlight: false
  },
  {
    name: "Enterprise",
    price: "$250",
    period: "per user/month",
    description: "Full suite for organizations",
    features: [
      "Everything in Compliance",
      "Admin controls",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantees",
      "On-premise options"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Simple Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include core protection features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-6 flex flex-col ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-primary/10 to-card border-primary/30 glow-primary scale-105' 
                  : 'bg-card/50 border-primary/10'
              } backdrop-blur-sm hover:border-primary/30 transition-all duration-300`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.highlight 
                    ? 'bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90' 
                    : ''
                }`}
                variant={plan.highlight ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>All prices in USD. Beta pricing subject to change upon public release.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
