import { Building2, KeyRound, Network, RefreshCw, Users, EyeOff } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LINKS } from "@/lib/links";

const capabilities = [
  {
    icon: KeyRound,
    title: "Collectors push, the workspace analyzes",
    description:
      "Each machine runs the same free scanner and pushes a snapshot with a token you can rotate or revoke. The engine runs server-side on the whole inventory.",
  },
  {
    icon: Network,
    title: "Attack paths across the org",
    description:
      "One view of every agent, every server, every path, and the single fix that removes the most risk across all machines, with the evidence behind each claim.",
  },
  {
    icon: RefreshCw,
    title: "Fixed machines show up fixed",
    description:
      "Snapshots replace what a collector reported last time. Remove a grant, rescan, and the path is gone in the dashboard too. Evidence that comes back reopens it.",
  },
  {
    icon: Users,
    title: "Workspaces, roles, audit trail",
    description:
      "Organizations with owner, admin, and member roles, email-matched invites, and an audit event for every change. Tenant isolation is enforced in the database, not the app.",
  },
];

const Platform = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="platform" className="py-16 px-6 relative bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
            <Building2 className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary">Boppi for teams · private pilots</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">The same engine, every machine</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A scan on one laptop is a snapshot. A security lead needs the whole fleet. The Boppi
            control plane takes scanner snapshots from every machine and answers the question
            your CEO will eventually ask: what can our AI agents actually reach?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <Card key={c.title} className="p-6 bg-card/50 backdrop-blur-sm border-secondary/15 hover:border-secondary/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 rounded-xl bg-secondary/15">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-6 md:p-8 bg-gradient-to-b from-secondary/10 to-card border-secondary/30 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <EyeOff className="w-4 h-4 text-secondary" />
                <h3 className="font-semibold">What it is not, yet</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Boppi reports posture from configuration. It does not watch agents at runtime
                and it does not block anything. We will not claim either until it is built.
                The control plane is running with design partners now, not open for self-serve
                signup.
              </p>
            </div>
            <Button
              className="shrink-0 bg-gradient-to-r from-secondary to-accent text-background hover:opacity-90"
              onClick={() => window.open(LINKS.pilot, "_blank")}
            >
              Ask about a pilot
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Platform;
