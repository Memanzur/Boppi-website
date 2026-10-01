import { useState } from "react";
import { ArrowRight, Check, Copy, Github, Terminal, Unplug, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      className="group inline-flex items-center gap-3 pl-5 pr-4 py-3.5 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/30 hover:border-primary/60 glow-primary transition-colors font-mono text-base md:text-lg"
    >
      <span className="text-muted-foreground select-none">$</span>
      <span className="text-foreground">{SCAN_COMMAND}</span>
      <span className="ml-1 p-1.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </span>
    </button>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 mb-6 glow-primary">
            <img src="/boppi-logo.png" alt="Boppi" className="w-12 h-12" />
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">boppi</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm font-medium">
              AI agent security
            </Badge>
            <Badge className="bg-success/10 text-success border border-success/30 hover:bg-success/20 px-4 py-2 text-sm font-medium gap-1.5">
              <Scale className="w-3.5 h-3.5 text-success" />
              Open source, Apache-2.0
            </Badge>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground [text-wrap:balance] px-2 md:px-0">
          See what your AI agents can reach{" "}
          <span className="font-serif italic font-normal text-foreground">
            before they act
          </span>
          <span className="text-primary">.</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Your engineers wired Claude Desktop, Claude Code, and Cursor into files, shells,
          credentials, and the network. Boppi maps what each agent can touch, finds the exposure
          paths, and names
          <span className="text-primary font-semibold"> the one change that breaks the most of them</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
            <Unplug className="w-4 h-4" />
            <span>Nothing leaves the machine</span>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <Terminal className="w-4 h-4" />
            <span>One command, no account</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full">
            <Check className="w-4 h-4" />
            <span>Evidence behind every claim</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <CopyCommand />
          <Button
            variant="outline"
            size="lg"
            className="border-primary/20 hover:bg-primary/5 px-8 py-4 text-lg"
            onClick={() => window.open(LINKS.github, "_blank", "noopener")}
          >
            <Github className="w-5 h-5 mr-2" />
            View on GitHub
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
        >
          See a real scan
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Node 18 or newer. Reads the MCP configs for Claude Desktop, Claude Code, and Cursor.
          Tested on macOS.
        </p>
      </div>

      <div className="absolute top-16 left-8 w-28 h-28 md:w-40 md:h-40 rounded-full bg-primary/15 blur-2xl animate-boppi-drift-1" />
      <div className="absolute top-32 right-12 w-24 h-24 md:w-36 md:h-36 rounded-full bg-secondary/15 blur-2xl animate-boppi-drift-2" />
      <div className="absolute bottom-20 left-1/4 w-20 h-20 md:w-32 md:h-32 rounded-full bg-accent/15 blur-2xl animate-boppi-drift-3" />
      <div className="absolute bottom-32 right-8 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/10 blur-xl animate-boppi-drift-1" style={{ animationDelay: "3s" }} />
    </section>
  );
};

export default Hero;
