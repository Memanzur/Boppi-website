import { Activity, Network, ShieldCheck, Wrench } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const products = [
  {
    phase: "Discover",
    title: "Boppi Agent",
    body: "Runs on your machine. It finds AI agents and MCP servers, maps what their configuration can reach, and removes one server only after you confirm.",
    icon: ShieldCheck,
    tone: "bg-primary/15 text-primary border-primary/30",
  },
  {
    phase: "Organize",
    title: "Boppi Cloud",
    body: "Inventory, findings, and history for the scans you push, plus team invites, MFA, versioned policies, and exports.",
    icon: Network,
    tone: "bg-secondary/15 text-secondary border-secondary/30",
  },
  {
    phase: "Control",
    title: "Boppi Control",
    body: "Remediation is a proposal. A person approves it before a configuration change. The next scan is how you check the result.",
    icon: Activity,
    tone: "bg-accent/15 text-accent border-accent/30",
  },
  {
    phase: "Coming soon",
    title: "Boppi Intelligence",
    body: "A separate analysis product is not available yet. Today's scan already explains each potential path, with the evidence and a confidence score.",
    icon: Wrench,
    tone: "bg-muted text-muted-foreground border-border",
  },
];

const Products = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="products" className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-10 space-y-3">
          <p className="section-kicker">The Boppi platform</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">Four parts. One platform.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The scanner is complete on its own. The workspace is there when a team wants that same inventory in one place.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="hidden md:block absolute left-[12.5%] right-[12.5%] top-7 h-px bg-gradient-to-r from-primary/50 via-secondary/50 to-border" aria-hidden="true" />
          {products.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.phase} className="relative text-center">
                <div className={`relative z-10 mx-auto w-14 h-14 rounded-2xl border flex items-center justify-center shadow-lg shadow-background/40 ${item.tone}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground font-semibold mt-4">{item.phase}</p>
                <h3 className="font-semibold text-lg mt-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
