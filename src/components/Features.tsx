import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const groups = [
  {
    label: "Available now",
    tone: "text-success border-success/40 bg-success/10",
    items: [
      "Discovery for Claude Desktop, Claude Code, and Cursor",
      "Security graph for what those scans can see",
      "Attack paths for the supported patterns",
      "Permission-change recommendations",
      "Local remediation of supported configuration changes, after you confirm",
      "Verification on the next scan",
      "Local rollback, in the latest scanner",
      "Cloud workspace: history, team invites, MFA, versioned policies, and exports",
    ],
  },
  {
    label: "In beta",
    tone: "text-amber-200 border-amber-400/40 bg-amber-500/10",
    items: [
      "Cloud monitoring",
      "Early intelligence components. Not a production learning system.",
    ],
  },
  {
    label: "On the roadmap",
    tone: "text-muted-foreground border-border bg-muted/40",
    items: [
      "Full just-in-time access with verified expiry",
      "Enterprise-wide permission changes",
      "Runtime blocking",
      "Identity integrations and single sign-on",
    ],
  },
];

const Features = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="features" className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-12 space-y-4">
          <p className="section-kicker">Capability status</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">What is built, in beta, and ahead.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Roadmap items are not in the product today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <Card key={group.label} className="p-6 bg-card border-border">
              <p className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${group.tone}`}>
                {group.label}
              </p>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-foreground/90">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
