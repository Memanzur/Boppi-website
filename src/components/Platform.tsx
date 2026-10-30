import { Activity, Building2, EyeOff, KeyRound, Network, RefreshCw, ShieldCheck, Users, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LINKS } from "@/lib/links";

const capabilities = [
  {
    icon: KeyRound,
    title: "You choose what to share",
    description: "Scans run on each device. You decide what gets sent to your team workspace, and you can withdraw or erase it at any time.",
  },
  {
    icon: Network,
    title: "Everything in one place",
    description: "See every device's AI connections, findings, and access in one dashboard, with how recent each scan is.",
  },
  {
    icon: RefreshCw,
    title: "Request, approve, verify",
    description: "Teammates request changes, admins approve them, and Boppi confirms each fix took effect. Roll back with one click.",
  },
  {
    icon: Users,
    title: "Built for the whole organization",
    description: "Organizations, roles, approval policies, single sign-on, and a full audit trail of who changed what and when.",
  },
];

const productTruth = [
  {
    icon: ShieldCheck,
    label: "Visibility",
    title: "Know what is connected.",
    body: "Your AI agents, MCP servers, and tools in one list, with what each one can reach.",
  },
  {
    icon: Building2,
    label: "Understanding",
    title: "Know why it matters.",
    body: "A clear explanation of every risk, backed by evidence and ranked by what to fix first.",
  },
  {
    icon: Wrench,
    label: "Control",
    title: "Choose what happens next.",
    body: "Grant, restrict, or revoke access, then confirm the change took effect.",
  },
];

const roadmap = [
  {
    phase: "Discover",
    title: "Boppi Agent",
    body: "Runs on your device. Finds AI agents, MCP servers, and tools, maps what they can reach, and applies the fixes you approve.",
    icon: ShieldCheck,
    tone: "bg-primary/15 text-primary border-primary/30",
  },
  {
    phase: "Organize",
    title: "Boppi Cloud",
    body: "One dashboard for every device, team, and finding, with organizations, roles, and audit history built in.",
    icon: Network,
    tone: "bg-secondary/15 text-secondary border-secondary/30",
  },
  {
    phase: "Control",
    title: "Boppi Control",
    body: "One-click remediation, rollback, and Just-in-Time access with approvals and automatic expiration.",
    icon: Activity,
    tone: "bg-accent/15 text-accent border-accent/30",
  },
  {
    phase: "Analyze",
    title: "Boppi Intelligence",
    body: "Evidence-based security analysis that explains each risk and how confident Boppi is about it.",
    icon: Wrench,
    tone: "bg-muted text-muted-foreground border-border",
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
            <span className="text-sm font-semibold text-secondary">Agent + Cloud + Control + Intelligence</span>
          </div>
          <p className="section-kicker">One AI security platform</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">See it. Understand it. Control it.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For individuals, developers, teams, and enterprises. Boppi brings your AI
            connections, risks, and permissions into one place, so the right people
            make the call.
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

        <div className="mb-10">
          <div className="text-center mb-7">
            <p className="section-kicker">The platform</p>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mt-2">Four parts. One platform.</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
              Each part is useful on its own. Together, they cover AI access from your laptop to your whole company.
            </p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="hidden md:block absolute left-[12.5%] right-[12.5%] top-7 h-px bg-gradient-to-r from-primary/50 via-secondary/50 to-border" aria-hidden="true" />
            {roadmap.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.phase} className="relative text-center">
                  <div className={`relative z-10 mx-auto w-14 h-14 rounded-2xl border flex items-center justify-center shadow-lg shadow-background/40 ${item.tone}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground font-semibold mt-4">{item.phase}</p>
                  <h4 className="font-semibold text-lg mt-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mb-7">
          <p className="section-kicker">For teams and enterprises</p>
          <h3 className="text-3xl font-semibold tracking-[-0.03em]">Shared visibility. Accountable decisions.</h3>
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
                <h3 className="font-semibold">Changes you can see and undo</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Boppi makes changes through each AI tool's own settings, so you always know
                exactly what changed and where. A tool that's already running picks up the
                change when it restarts. Want to see it first? Try the demo or talk to us.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-stretch gap-2">
              <Button
                className="bg-gradient-to-r from-secondary to-accent text-background hover:opacity-90"
                asChild
              >
                <a href="/demo">Explore the demo</a>
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
        <Card id="beta-preview" className="mt-10 p-6 md:p-8 bg-card border-border scroll-mt-24">
          <p className="section-kicker">Interactive demo · sample data</p>
          <h3 className="text-2xl font-semibold mb-3">Try it with sample data.</h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Explore example connections, open a finding, and preview a fix. The demo uses
            made-up data, so nothing on your device is scanned or changed.
          </p>
          <a className="inline-block mt-4 text-primary underline" href="/demo">Explore the demo →</a>
        </Card>
      </div>
    </section>
  );
};

export default Platform;
