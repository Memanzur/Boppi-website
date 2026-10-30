import { useState } from "react";
import { Check, Copy, ArrowRight, FileSearch, GitBranch, LockKeyhole } from "lucide-react";
import ScanTerminal from "@/components/ScanTerminal";
import { SCAN_COMMAND } from "@/lib/links";

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
      className="group inline-flex items-center gap-3 pl-5 pr-3 py-3.5 rounded-xl bg-card/80 backdrop-blur-sm border border-primary/30 hover:border-primary/60 glow-primary transition-colors font-mono text-base md:text-lg"
    >
      <span className="text-muted-foreground select-none">$</span>
      <span className="text-foreground">{SCAN_COMMAND}</span>
      <span className="ml-1 p-1.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </span>
      <span className="sr-only">{copied ? ", copied to the clipboard" : ", copy to the clipboard"}</span>
    </button>
  );
};

const proofs = [
  { icon: LockKeyhole, text: "Run a local configuration check without an account." },
  { icon: FileSearch, text: "See the evidence and limits behind each finding." },
  { icon: GitBranch, text: "Open source analysis. Permission changes need your authorization." },
];

const Hero = () => {
  return (
    <section className="relative px-6 pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-14 lg:gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary tracking-[0.18em] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-success" />
            AI access security · start free
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[4.25rem] font-semibold tracking-[-0.055em] leading-[0.98] [text-wrap:balance] mb-7">
            Know what your AI can access. Stay in control.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Boppi is an AI security and access-control platform built to help you see what
            your AI tools can reach, understand the risk, and decide what access to keep.
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xl">
            Start today with the free scanner for supported Claude Desktop, Claude Code, and Cursor
            configurations. Cloud governance, verified controls, and monitoring are in development.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <CopyCommand />
            <a
              href="/checkup"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              Start a guest checkup <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mb-6 text-xs text-muted-foreground leading-relaxed">
            Public scanner v0.3.0 · Run in your terminal with Node.js 18+. Tested on macOS;
            Windows and Linux discovery are not yet verified on real machines.
          </p>

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
            Illustrative scan output from a sample configuration. This animation does not scan
            your device or show live activity.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
