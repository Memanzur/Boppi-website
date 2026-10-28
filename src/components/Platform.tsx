import { Activity, Building2, EyeOff, KeyRound, Network, RefreshCw, ShieldCheck, Users, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LINKS } from "@/lib/links";

const capabilities = [
  {
    icon: KeyRound,
    title: "Share only when you choose",
    description: "The optional team workspace receives a sanitized scan inventory only when you run boppi push. Review the payload with --dry-run first. The unpublished 0.4.0 candidate requires explicit workspace sync consent, withdrawal and erasure; hosted rollout is still pending. Local scanning needs no account.",
  },
  {
    icon: Network,
    title: "Review submitted snapshots together",
    description: "A workspace brings uploaded agent and server inventories together for team review. It reflects submitted configuration evidence, not a live view of every machine or action.",
  },
  {
    icon: RefreshCw,
    title: "Rescan to check a change",
    description: "A local rescan can show whether a modeled path remains. Updating workspace evidence requires another push; it is not continuous monitoring. Empty or incomplete discovery may leave older evidence in place.",
  },
  {
    icon: Users,
    title: "An optional team beta",
    description: "The hosted workspace is a separate free beta at app.boppi.io. It can change or be unavailable. It is not the planned Boppi Intelligence service, and the local scanner works independently.",
  },
];

const productTruth = [
  {
    icon: ShieldCheck,
    label: "Visibility",
    title: "Know what is connected.",
    body: "Today: inspect supported configuration on your machine. The vision: expand coverage so individuals and teams can understand more of their AI environment.",
  },
  {
    icon: Building2,
    label: "Understanding",
    title: "Know why it matters.",
    body: "Today: review potential risks with evidence and inference labels. The vision: connect richer signals into clearer explanations and more reliable priorities.",
  },
  {
    icon: Wrench,
    label: "Control",
    title: "Choose what to do next.",
    body: "Today: compare configuration changes and rescan after an edit. The vision: add reviewed, reversible actions and policy controls, with clear consent and measurable results.",
  },
];

const roadmap = [
  {
    phase: "Live · v0.3.0",
    title: "Local scanner",
    body: "Configuration discovery, potential-risk modeling, suggested edits, verification, local history, reports, and CI checks. Optional push shares a sanitized inventory.",
    icon: ShieldCheck,
    tone: "bg-primary/15 text-primary border-primary/30",
  },
  {
    phase: "Local only · v0.4.0 candidate",
    title: "Unpublished improvements",
    body: "Agent + Cloud: a synthetic demo, approved fixes and rollback, consent-controlled history, finding management, activity sync, and paired dashboard remediation are implemented and tested with synthetic data locally. Human testing, independent review, publication and hosted rollout remain gated.",
    icon: Network,
    tone: "bg-secondary/15 text-secondary border-secondary/30",
  },
  {
    phase: "Experimental · local only",
    title: "Tool-event hook prototype",
    body: "An optional Claude Code hook records limited event metadata when manually configured. Concurrent synthetic capture is tested; real-client delivery remains unverified. Explicit activity sync is separate from inventory sync. It is not continuous protection.",
    icon: Activity,
    tone: "bg-accent/15 text-accent border-accent/30",
  },
  {
    phase: "Local foundations · not activated",
    title: "Boppi Intelligence",
    body: "Workspace corrections carry provenance and separate contribution consent. A research prototype, not part of the scanner, evaluates, signs, verifies and rolls back synthetic rule candidates that stay inactive. Reviewed production updates, prompt investigation and selective enforcement remain planned; corrections never activate rules automatically.",
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
            <span className="text-sm font-semibold text-secondary">Agent + Cloud + Intelligence</span>
          </div>
          <p className="section-kicker">One hybrid product</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">Visibility. Understanding. Control.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Boppi Agent checks supported connections on your device. Optional Boppi Cloud brings
            consented evidence and team decisions together. Boppi Intelligence is the reviewed
            improvement loop, with local foundations and no automatic rule activation.
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
              The public release, unpublished local work, experiments, and planned capabilities are different stages. Local work is not a release announcement.
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
          <p className="section-kicker">Optional team workspace · current beta</p>
          <h3 className="text-3xl font-semibold tracking-[-0.03em]">Bring scan snapshots together.</h3>
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
                <h3 className="font-semibold">A snapshot, with clear limits</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The published scanner and workspace do not continuously watch AI activity,
                detect prompt injection, or block actions at runtime. A scan is a configuration
                snapshot; local history compares scans you run. Planned monitoring and enforcement
                will need separate implementation, validation, and consent.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-stretch gap-2">
              <Button
                className="bg-gradient-to-r from-secondary to-accent text-background hover:opacity-90"
                onClick={() => window.open(LINKS.app, "_blank", "noopener")}
              >
                Create a beta workspace
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
          <p className="section-kicker">Interactive synthetic demo · local website build</p>
          <h3 className="text-2xl font-semibold mb-3">Explore with sample data first.</h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Explore example connections, inspect a finding, and preview a simulated change.
            This demo uses fictional data from the unpublished candidate. It does not scan your
            device or change your permissions. Publishing this website build remains a separate step.
          </p>
          <a className="inline-block mt-4 text-primary underline" href="/demo">Explore the synthetic demo →</a>
        </Card>
      </div>
    </section>
  );
};

export default Platform;
