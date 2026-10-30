import { Activity, Building2, EyeOff, KeyRound, Network, RefreshCw, ShieldCheck, Users, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LINKS } from "@/lib/links";

const capabilities = [
  {
    icon: KeyRound,
    title: "Choose what to share",
    description: "Local scans need no account. The public push command sends scan metadata to a workspace you choose. New consent, withdrawal, and erasure controls are implemented locally; a compatible hosted release is still pending. Review exports before sharing.",
  },
  {
    icon: Network,
    title: "Bring evidence together",
    description: "Boppi Cloud is designed to organize submitted inventories, security findings, and access relationships across devices. It reflects configuration snapshots you submit, with their coverage and age. The current development build is not the hosted release.",
  },
  {
    icon: RefreshCw,
    title: "Review, approve, verify",
    description: "Paired-device removal, supported directory narrowing, verification, and rollback are tested with synthetic data locally. These workflows still need release review and real-device validation. Updating Cloud evidence requires a fresh submission.",
  },
  {
    icon: Users,
    title: "Build toward organization-wide governance",
    description: "Organizations, roles, findings, and audit workflows have local implementations. SSO, SCIM, service identities, and approval policies are at different development stages; they are not a publicly verified enterprise suite. Ask us about your requirements.",
  },
];

const productTruth = [
  {
    icon: ShieldCheck,
    label: "Visibility",
    title: "Know what is connected.",
    body: "Start with supported AI and MCP configuration. See the sources checked, the access they suggest, and the gaps Boppi cannot inspect.",
  },
  {
    icon: Building2,
    label: "Understanding",
    title: "Know why it matters.",
    body: "Follow the evidence behind a potential risk. Keep configured access, inferred capabilities, and observed activity distinct.",
  },
  {
    icon: Wrench,
    label: "Control",
    title: "Choose what happens next.",
    body: "Review permission changes before authorizing them. Verify the configuration afterward; broader enforcement depends on the integration and release.",
  },
];

const roadmap = [
  {
    phase: "Scanner public · v0.3.0",
    title: "Boppi Agent",
    body: "Discovers supported AI and MCP configurations, maps potential access, and explains risky combinations. Public controls include selected server removal and rescanning. Broader discovery, narrowing, rollback, and foreground watching are unpublished.",
    icon: ShieldCheck,
    tone: "bg-primary/15 text-primary border-primary/30",
  },
  {
    phase: "In development · hosted parity pending",
    title: "Boppi Cloud",
    body: "Centralizes submitted evidence, security findings, organizations, and access reviews. An older hosted beta exists; the current development workflows and end-to-end onboarding have not been verified publicly.",
    icon: Network,
    tone: "bg-secondary/15 text-secondary border-secondary/30",
  },
  {
    phase: "In development · limited control points",
    title: "Boppi Control",
    body: "Authorized remediation, verification, rollback, and Just-in-Time access. Local JIT tests cover temporary MCP configuration entries. Expiry removal needs an Agent invocation or foreground watcher; running clients may retain access until restart or reload. Public JIT and enterprise-wide enforcement are not available.",
    icon: Activity,
    tone: "bg-accent/15 text-accent border-accent/30",
  },
  {
    phase: "In development · learning not activated",
    title: "Boppi Intelligence",
    body: "Evidence-based analysis today, with privacy-preserving learning and improved detection in development. Local prototypes accept reviewed corrections and verify signed rule bundles in shadow mode, without changing scan results. Production learning and monitoring are not active.",
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
          <p className="section-kicker">One AI access-security platform</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">Visibility. Understanding. Control.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For individuals, developers, teams, and enterprises: understand AI access,
            make informed permission decisions, and build toward governed access across
            your organization. Each part below has a clear release status.
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
            <p className="section-kicker">Product status</p>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] mt-2">What is available, and what comes next.</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
              Start with the public scanner. Cloud, Control, and Intelligence are being developed and validated; local test success does not mean a capability is publicly available.
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
          <p className="section-kicker">Boppi Cloud · in development</p>
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
                <h3 className="font-semibold">Control is specific to the integration</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Removing or narrowing a configuration entry changes what a client can load next.
                It does not revoke a vendor credential or stop an already running tool. Optional
                Claude Code event capture and a JIT call gate exist locally; real-client delivery
                and enforcement remain unverified. Always check the supported control point.
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
          <h3 className="text-2xl font-semibold mb-3">Explore with sample data first.</h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Explore example connections, inspect a finding, and preview a simulated change.
            This demo uses fictional data from the unpublished candidate. It does not scan your
            device or change your permissions. A simulated result is not a verified real-device fix.
          </p>
          <a className="inline-block mt-4 text-primary underline" href="/demo">Explore the synthetic demo →</a>
        </Card>
      </div>
    </section>
  );
};

export default Platform;
