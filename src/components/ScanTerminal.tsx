import { useEffect, useRef, useState } from "react";
import { RefreshCcw } from "lucide-react";
import { SCAN_COMMAND } from "@/lib/links";

type Tone = "plain" | "dim" | "head" | "ok" | "crit" | "high" | "fix" | "path";

type Line = { text: string; tone?: Tone; delay?: number; block?: boolean };

// Verbatim output of a scan against a lab machine with four MCP servers wired
// into Claude Desktop. Same text the README shows.
const LINES: Line[] = [
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
  { text: "  Claude Desktop    100/100 critical   4 servers   CRIT Potential data exfiltration path", tone: "crit" },
  { text: "  Cursor            2/100 low          1 server    none" },
  { text: "  Claude Code       0/100 low          0 servers   none", delay: 600 },
  { text: "" },
  { text: "EXPOSURE PATHS (3)", tone: "head" },
  { text: "  CRIT  Potential data exfiltration path  [EP-A · confidence 0.7]", tone: "crit" },
  { text: "     Claude Desktop -> filesystem (filesystem_access) -> read files -> fetch (network_access) -> call external api -> External destination", tone: "path" },
  { text: "     why: If this agent were compromised or misdirected, data it can read could potentially reach an untrusted external destination.", tone: "dim", delay: 500 },
  { text: "" },
  { text: "  CRIT  Potential credential exposure path  [EP-B · confidence 0.7]", tone: "crit" },
  { text: "     Claude Desktop -> 1password (credential_access) -> access credentials -> desktop-commander (shell_access) -> run shell commands -> fetch (network_access) -> call external api", tone: "path" },
  { text: "     why: Credential references combined with execution and network access create a potential path for credential material to leave the environment.", tone: "dim", delay: 500 },
  { text: "" },
  { text: "  HIGH  Potential privilege path  [EP-E · confidence 0.7]", tone: "high" },
  { text: "     Claude Desktop -> fetch (untrusted_external_content) -> untrusted external content -> desktop-commander (shell_access) -> run shell commands", tone: "path" },
  { text: "     why: Instructions hidden in untrusted content could potentially influence an agent with privileged local capabilities.", tone: "dim", delay: 700 },
  { text: "" },
  { text: "ROOT CAUSE  the single change that breaks the most exposure paths", tone: "fix", block: true },
  { text: "  ▸ Fix: Remove the server entry \"fetch\" from Claude Desktop's MCP configuration to revoke its \"call external api\" grant. Rescan afterward to verify the change landed.", tone: "plain", block: true },
  { text: "    edit: remove the \"fetch\" entry from ~/Library/Application Support/Claude/claude_desktop_config.json", tone: "dim", block: true },
  { text: "    breaks 2 of 3 paths · 2 critical  (leaves 1)", tone: "fix", block: true, delay: 600 },
  { text: "" },
  { text: "PRIVACY  Files read this run — metadata only, sanitized in memory, nothing left this machine:", tone: "head" },
  { text: "  - ~/Library/Application Support/Claude/claude_desktop_config.json", tone: "dim" },
  { text: "  - ~/.claude.json", tone: "dim" },
  { text: "  - ~/.cursor/mcp.json", tone: "dim" },
  { text: "  Secret values, file contents, and raw path names are never collected. Paths become fingerprints.", tone: "dim" },
];

const TONE_CLASS: Record<Tone, string> = {
  plain: "text-foreground/90",
  dim: "text-muted-foreground",
  head: "text-secondary font-semibold",
  ok: "text-success",
  crit: "text-red-300",
  high: "text-amber-300",
  fix: "text-accent font-semibold",
  path: "text-primary",
};

const LINE_DELAY = 70;
const TYPE_DELAY = 55;

const ScanTerminal = () => {
  const [typed, setTyped] = useState(0);
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(0);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTyped(0);
    setCount(0);
    let cancelled = false;
    let t = 0;
    let i = 0;

    const typeNext = () => {
      if (cancelled) return;
      t += 1;
      setTyped(t);
      if (t < SCAN_COMMAND.length) {
        setTimeout(typeNext, TYPE_DELAY);
      } else {
        setTimeout(step, 500);
      }
    };

    const step = () => {
      if (cancelled) return;
      i += 1;
      setCount(i);
      if (i >= LINES.length) return;
      setTimeout(step, LINES[i - 1].delay ?? LINE_DELAY);
    };

    const first = setTimeout(typeNext, 500);
    return () => {
      cancelled = true;
      clearTimeout(first);
    };
  }, [run]);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    body.scrollTo({ top: body.scrollHeight, behavior: "smooth" });
  }, [count]);

  const finished = count >= LINES.length;

  return (
    <div className="relative">
      <div
        className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 opacity-60 blur-[2px]"
        aria-hidden="true"
      />
      <div className="relative rounded-2xl border border-white/10 bg-[hsl(240_35%_5%)] shadow-[0_30px_90px_-30px_hsl(310_90%_85%/0.35)] overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.03]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[11px] font-mono text-muted-foreground tracking-wide">boppi scan</span>
          <button
            type="button"
            onClick={() => setRun((r) => r + 1)}
            className="inline-flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <RefreshCcw className="w-3 h-3" />
            replay
          </button>
        </div>

        <div
          ref={bodyRef}
          className="font-mono text-[12px] md:text-[12.5px] leading-[1.55] p-4 md:p-5 h-[460px] md:h-[540px] overflow-y-auto scroll-smooth"
          aria-live="polite"
        >
          <div className="text-foreground mb-2">
            <span className="text-accent select-none">➜ </span>
            <span className="text-secondary select-none">~ </span>
            {SCAN_COMMAND.slice(0, typed)}
            {!finished && typed < SCAN_COMMAND.length && (
              <span className="inline-block w-[7px] h-[14px] bg-foreground/80 align-middle ml-px animate-boppi-caret" />
            )}
          </div>

          {LINES.slice(0, count).map((line, i) => {
            const indent = line.text.match(/^ */)?.[0].length ?? 0;
            return (
              <div
                key={`${run}-${i}`}
                className={`whitespace-pre-wrap [overflow-wrap:anywhere] animate-boppi-pop ${TONE_CLASS[line.tone ?? "plain"]} ${
                  line.block ? "bg-accent/[0.07] border-l-2 border-accent/60 -mx-2 px-2" : ""
                }`}
                style={{ paddingLeft: `calc(${indent}ch + ${line.block ? "0.5rem" : "0px"})`, textIndent: 0 }}
              >
                {line.text.trimStart() || " "}
              </div>
            );
          })}

          {!finished && typed >= SCAN_COMMAND.length && (
            <span className="inline-block w-[7px] h-[14px] bg-foreground/80 align-middle animate-boppi-caret" />
          )}
          {finished && (
            <div className="mt-2 text-foreground">
              <span className="text-accent select-none">➜ </span>
              <span className="text-secondary select-none">~ </span>
              <span className="inline-block w-[7px] h-[14px] bg-foreground/80 align-middle animate-boppi-caret" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScanTerminal;
