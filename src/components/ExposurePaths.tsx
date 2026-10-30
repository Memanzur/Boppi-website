import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type Severity = "critical" | "high";

const TEMPLATES: { id: string; name: string; chain: string; severity: Severity }[] = [
  { id: "EP-A", name: "Data exfiltration", chain: "readable data reaches an external destination", severity: "critical" },
  { id: "EP-B", name: "Credential exposure", chain: "credential access reaches execution and the network", severity: "critical" },
  { id: "EP-C", name: "Software supply chain", chain: "source modification reaches production", severity: "critical" },
  { id: "EP-D", name: "Unverified server", chain: "sensitive-data access is modeled through a server with insufficient trust evidence", severity: "high" },
  { id: "EP-E", name: "Privilege", chain: "untrusted content reaches shell, code, or destructive file tools", severity: "high" },
  { id: "EP-F", name: "Impersonation", chain: "untrusted content reaches email or messaging", severity: "high" },
];

const SEVERITY_CLASS: Record<Severity, string> = {
  critical: "bg-red-500/15 text-red-300 border-red-400/30",
  high: "bg-amber-500/15 text-amber-300 border-amber-400/30",
};

const ExposurePaths = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="paths" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-10 space-y-3">
          <p className="section-kicker">Under the hood</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">How Boppi spots risk.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some access is only dangerous in combination. Boppi looks for these chains,
            called exposure paths. Here are the six it checks for. A match means
            "take a look," not "you've been hacked."
          </p>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden divide-y divide-border/50">
          {TEMPLATES.map((t) => (
            <div
              key={t.id}
              className="grid grid-cols-[auto_1fr] md:grid-cols-[5rem_12rem_1fr_auto] items-center gap-x-4 gap-y-1 px-5 py-4"
            >
              <span className="font-mono text-xs text-muted-foreground">{t.id}</span>
              <span className="font-semibold">{t.name}</span>
              <span className="col-span-2 md:col-span-1 text-sm text-muted-foreground">{t.chain}</span>
              <span
                className={`col-start-2 md:col-start-auto justify-self-start md:justify-self-end text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${SEVERITY_CLASS[t.severity]}`}
              >
                {t.severity}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Boppi also runs seven checks on each agent, including one for broad file access given
          to a vendor with an unclear policy on training AI with your data.
        </p>
      </div>
    </section>
  );
};

export default ExposurePaths;
