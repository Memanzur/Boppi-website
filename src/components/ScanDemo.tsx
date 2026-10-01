import { useEffect, useRef, useState } from "react";
import { RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { SCAN_COMMAND } from "@/lib/links";

type Tone = "plain" | "dim" | "head" | "ok" | "crit" | "high" | "fix" | "path";

type Line = { text: string; tone?: Tone; delay?: number };

// Verbatim output of a scan against a lab machine with four MCP servers wired
// into Claude Desktop. Same text the README shows.
const LINES: Line[] = [
  { text: `$ ${SCAN_COMMAND}`, tone: "plain", delay: 600 },
  { text: "BOPPI · AI Agent Security scan · v0.1.0", tone: "head" },
  { text: "completed in 0.02s · everything ran locally", tone: "dim", delay: 400 },
  { text: "" },
  { text: "DISCOVERY", tone: "head" },
  { text: "  ✓ Claude Desktop  ~/Library/Application Support/Claude/claude_desktop_config.json  4 servers", tone: "ok" },
  { text: "  ✓ Claude Code     ~/.claude.json  0 servers", tone: "ok" },
  { text: "  · Claude Code     ~/.mcp.json  not found", tone: "dim" },
  { text: "  ✓ Cursor          ~/.cursor/mcp.json  1 server", tone: "ok", delay: 500 },
  { text: "" },
  { text: "INVENTORY  3 agents · 5 MCP servers · 3 exposure paths (2 critical) · 3 findings (2 critical)", tone: "head", delay: 500 },
  { text: "" },
  { text: "AGENTS (3)", tone: "head" },
  { text: "  agent             risk              servers  capabilities  worst exposure path", tone: "dim" },
  { text: "  Claude Desktop    100/100 critical  4        5             CRIT Potential data exfiltration path", tone: "crit" },
  { text: "  Cursor            2/100 low         1        1             none" },
  { text: "  Claude Code       0/100 low         0        0             none", delay: 600 },
  { text: "" },
  { text: "EXPOSURE PATHS (3)", tone: "head" },
  { text: "  CRIT  Potential data exfiltration path  [EP-A · confidence 0.7]", tone: "crit" },
  { text: "     Claude Desktop -> filesystem (filesystem_access) -> read files -> fetch (network_access) -> call external api -> External destination", tone: "path" },
  { text: "     why: If this agent were compromised or misdirected, data it can read could potentially reach an untrusted external destination.", tone: "dim" },
  { text: "     fix: Remove external messaging or API access, or restrict the sensitive-data grants feeding this path.", tone: "dim", delay: 500 },
  { text: "" },
  { text: "  CRIT  Potential credential exposure path  [EP-B · confidence 0.7]", tone: "crit" },
  { text: "     Claude Desktop -> 1password (credential_access) -> access credentials -> desktop-commander (shell_access) -> run shell commands -> fetch (network_access) -> call external api", tone: "path" },
  { text: "     why: Credential references combined with execution and network access create a potential path for credential material to leave the environment.", tone: "dim", delay: 500 },
  { text: "" },
  { text: "  HIGH  Potential privilege path  [EP-E · confidence 0.7]", tone: "high" },
  { text: "     Claude Desktop -> fetch (untrusted_external_content) -> untrusted external content -> desktop-commander (shell_access) -> run shell commands", tone: "path" },
  { text: "     why: Instructions hidden in untrusted content could potentially influence an agent with privileged local capabilities.", tone: "dim", delay: 700 },
  { text: "" },
  { text: "ROOT CAUSE  the single change that breaks the most exposure paths", tone: "head" },
  { text: "  ▸ Fix: Remove the server entry \"fetch\" from Claude Desktop's MCP configuration to revoke its \"call external api\" grant. Rescan afterward to verify the change landed.", tone: "fix" },
  { text: "    edit: remove the \"fetch\" entry from ~/Library/Application Support/Claude/claude_desktop_config.json", tone: "dim" },
  { text: "    breaks 2 of 3 paths · 2 critical  (leaves 1)", tone: "fix", delay: 600 },
  { text: "" },
  { text: "PRIVACY  Files read this run — metadata only, sanitized in memory, nothing left this machine:", tone: "head" },
  { text: "  - ~/Library/Application Support/Claude/claude_desktop_config.json", tone: "dim" },
  { text: "  - ~/.claude.json", tone: "dim" },
  { text: "  - ~/.cursor/mcp.json", tone: "dim" },
  { text: "  Secret values, file contents, and raw path names are never collected. Paths become fingerprints.", tone: "dim" },
];

const TONE_CLASS: Record<Tone, string> = {
  plain: "text-foreground",
  dim: "text-muted-foreground",
  head: "text-secondary font-semibold",
  ok: "text-success",
  crit: "text-red-300",
  high: "text-amber-300",
  fix: "text-accent",
  path: "text-primary",
};

const LINE_DELAY = 70;

const ScanDemo = () => {
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(0);
  const [started, setStarted] = useState(false);
  const sectionRef = useScrollReveal<HTMLDivElement>();
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || started) return;
    if (typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [sectionRef, started]);

  useEffect(() => {
    if (!started) return;
    setCount(0);
    let cancelled = false;
    let i = 0;
    const step = () => {
      if (cancelled) return;
      i += 1;
      setCount(i);
      if (i >= LINES.length) return;
      const delay = LINES[i - 1].delay ?? LINE_DELAY;
      setTimeout(step, delay);
    };
    const first = setTimeout(step, 300);
    return () => {
      cancelled = true;
      clearTimeout(first);
    };
  }, [started, run]);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    body.scrollTop = body.scrollHeight;
  }, [count]);

  const finished = count >= LINES.length;

  return (
    <section id="demo" className="py-16 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div ref={sectionRef} className="reveal text-center mb-10 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">A real scan, line for line</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A lab machine with a file server, a shell server, a web fetch server, and a
            1Password server wired into Claude Desktop. Each one looks reasonable alone.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/20 bg-[hsl(240_33%_6%)] shadow-[0_20px_80px_-20px_hsl(310_90%_85%/0.25)] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-card/60">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-amber-300/70" />
              <span className="w-3 h-3 rounded-full bg-success/70" />
              <span className="ml-3 text-xs font-mono text-muted-foreground">boppi scan</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-xs text-muted-foreground hover:text-foreground"
              onClick={() => {
                setStarted(true);
                setRun((r) => r + 1);
              }}
            >
              <RefreshCcw className="w-3.5 h-3.5 mr-1.5" />
              Replay
            </Button>
          </div>

          <div
            ref={bodyRef}
            className="font-mono text-[12.5px] md:text-sm leading-relaxed p-4 md:p-6 h-[440px] md:h-[520px] overflow-y-auto overflow-x-auto"
            aria-live="polite"
          >
            {LINES.slice(0, count).map((line, i) => (
              <div
                key={`${run}-${i}`}
                className={`whitespace-pre animate-boppi-pop ${TONE_CLASS[line.tone ?? "plain"]}`}
              >
                {line.text || " "}
              </div>
            ))}
            {!finished && started && (
              <span className="inline-block w-2 h-4 bg-primary/80 align-middle animate-boppi-caret" />
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          The root cause is computed, not guessed. The engine removes the grant from the graph,
          reruns the path search, and reports how many paths are gone.
        </p>
      </div>
    </section>
  );
};

export default ScanDemo;
