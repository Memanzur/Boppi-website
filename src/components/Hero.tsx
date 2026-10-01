import { useState } from "react";
import { Check, Copy, Scale, Terminal, Unplug } from "lucide-react";
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
  { icon: Unplug, text: "No network code. Nothing leaves the machine." },
  { icon: Terminal, text: "No account, no install. Node 18 or newer." },
  { icon: Scale, text: "Apache-2.0. Scanner and engine in the open." },
];

const Hero = () => {
  return (
    <section className="relative px-6 pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(120,119,198,0.28),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_70%,rgba(59,130,246,0.18),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-12 lg:gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary tracking-wide uppercase mb-6">
            AI agent security
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.05] [text-wrap:balance] mb-6">
            See what your AI agents can reach{" "}
            <span className="font-serif italic font-normal text-primary">before they act</span>.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Your engineers wired Claude Desktop, Claude Code, and Cursor into files, shells,
            credentials, and the network. Boppi maps what each agent can touch, finds the exposure
            paths, and names the one change that breaks the most of them.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <CopyCommand />
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Read the source
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

      <div className="absolute top-24 left-10 w-28 h-28 md:w-40 md:h-40 rounded-full bg-primary/15 blur-2xl animate-boppi-drift-1" />
      <div className="absolute bottom-16 right-16 w-24 h-24 md:w-36 md:h-36 rounded-full bg-secondary/15 blur-2xl animate-boppi-drift-2" />
    </section>
  );
};

export default Hero;
