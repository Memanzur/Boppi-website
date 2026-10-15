import { Activity, Building2, EyeOff, KeyRound, Network, RefreshCw, ShieldCheck, Users, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LINKS } from "@/lib/links";

const capabilities = [
  {
    icon: KeyRound,
    title: "Collectors push, the workspace analyzes",
    description:
      "Each machine runs the same free scanner. npx boppi push sends one scan's sanitized inventory to your workspace with a token you can rotate or revoke, and it is the only scanner command that touches the network. The engine runs server-side on the whole inventory.",
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

const productTruth = [
  {
    icon: ShieldCheck,
    label: "What Boppi does today",
    title: "Turn AI-agent configuration into evidence.",
    body: "Boppi discovers supported agent and MCP configurations, maps what those servers can reach, identifies potential exposure paths, explains the evidence, and recommends the smallest high-leverage fix. You can verify the result locally, generate a report, or send a sanitized inventory to a workspace.",
  },
  {
    icon: Building2,
    label: "Why companies need it",
    title: "Know what your AI agents can access before it becomes an incident.",
    body: "AI tools are being configured faster than security teams can inventory them. Boppi gives a security lead a repeatable answer to which agents and MCP servers exist, what they can reach, which paths deserve attention, and whether a fix actually removed the risk.",
  },
  {
    icon: Wrench,
    label: "What we are building",
    title: "From configuration visibility to continuous control.",
    body: "The roadmap includes broader provider coverage, clearer one-click remediation, policy enforcement, stronger fleet workflows, and runtime activity monitoring. Those capabilities are not in the beta yet, and Boppi will label them clearly as they arrive.",
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
            <span className="text-sm font-semibold text-secondary">Boppi for teams · free public beta</span>
          </div>
          <p className="section-kicker">Optional workspace</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">Bring the evidence together.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A scan on one laptop is a snapshot. A security lead needs the whole fleet. Create a
            workspace at app.boppi.io, generate a collector token, and push scans from every
            machine to answer the question your CEO will eventually ask: what could our AI agents
            reach, according to their configuration?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {productTruth.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.label} className="p-6 bg-card border-border/80">
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-4 h-4 text-secondary" />
                  <span className="section-kicker !text-xs">{item.label}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.02em] mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </Card>
            );
          })}
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

        <Card className="p-6 md:p-8 bg-card border-secondary/30 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <EyeOff className="w-4 h-4 text-secondary" />
                <h3 className="font-semibold">What it is not, yet</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Boppi reports potential exposure from configuration evidence. It does not watch
                agents at runtime and it does not block anything. We will not claim either until
                it is built. The workspace is a free public beta: expect rough edges, and tell us
                about them.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-stretch gap-2">
              <Button
                className="bg-gradient-to-r from-secondary to-accent text-background hover:opacity-90"
                onClick={() => window.open(LINKS.app, "_blank", "noopener")}
              >
                Create a workspace
              </Button>
              <a
                href={LINKS.talk}
                className="text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Talk to us
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Platform;
