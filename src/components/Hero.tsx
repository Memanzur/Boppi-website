import { useState } from "react";
import { Check, Copy, ArrowRight, FileSearch, GitBranch, LockKeyhole } from "lucide-react";
import ScanTerminal from "@/components/ScanTerminal";
import { LINKS, SCAN_COMMAND } from "@/lib/links";

const CopyCommand = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SCAN_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy the scan command"
      className="group inline-flex items-center gap-3 pl-5 pr-3 py-3.5 rounded-xl bg-card/80 backdrop-blur-sm border border-primary/30 hover:border-primary/60 glow-primary transition-colors font-mono text-base md:text-lg"
    >
      <span className="text-muted-foreground select-none">$</span>
      <span className="text-foreground">{SCAN_COMMAND}</span>
      <span className="ml-1 p-1.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </span>
    </button>
  );
};

const proofs = [
  { icon: LockKeyhole, text: "Local by default. No account or network access for a scan." },
  { icon: FileSearch, text: "Evidence attached to every inventory, inference, and path." },
  { icon: GitBranch, text: "Open source scanner with CI-friendly exit codes." },
];

const Hero = () => {
  return (
    <section className="relative px-6 pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-14 lg:gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary tracking-[0.18em] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-success" />
            Open beta · agent security
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[4.25rem] font-semibold tracking-[-0.055em] leading-[0.98] [text-wrap:balance] mb-7">
            Find the path before it becomes an incident.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Boppi maps what Claude Desktop, Claude Code, and Cursor can reach through MCP. It turns
            configuration evidence into exposure paths, then shows the smallest change that breaks
            the most risk.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <CopyCommand />
            <a
              href={LINKS.talk}
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              Request team beta <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <ul className="space-y-2.5">
            {proofs.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="shrink-0 w-7 h-7 rounded-lg bg-card/70 border border-border/60 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-accent" />
                  </span>
                  {p.text}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="min-w-0">
          <ScanTerminal />
          <p className="mt-4 text-xs text-muted-foreground text-center leading-relaxed">
            Real output from a lab machine with file, shell, web fetch, and 1Password servers wired
            into Claude Desktop. Each one looks reasonable alone.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
