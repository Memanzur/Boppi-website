import { useEffect, useMemo, useRef, useState } from "react";
import { Sparkles, ArrowDown, ArrowRight, Bot, User, RefreshCcw, Trash2, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { detect, segmentize, type DetectionKind, type MaskingMode } from "@/lib/masking";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const EXAMPLES: string[] = [
  "Hey, can you help me with my tax return? My SSN is 123-45-6789 and my email is jamie.chen@acme.com",
  "Process this payment for me: card 4242 4242 4242 4242, callback to 415-555-0199",
  "Debug this for me. My OpenAI key is sk-proj-ab12cd34ef56gh78ij90kl12 and it keeps 401ing.",
  "Draft a follow-up to patient john.doe@clinic.org, DOB on file, phone (512) 555-0134",
];

const PRESETS: { label: string; text: string }[] = [
  {
    label: "Try SSN",
    text: "My SSN is 123-45-6789, can you help me file my taxes?",
  },
  {
    label: "Try Credit Card",
    text: "Run this charge for me: 4242 4242 4242 4242, expires 12/26.",
  },
  {
    label: "Try API Key",
    text: "Debug this request: my OpenAI key sk-proj-ab12cd34ef56gh78ij90 keeps 401ing.",
  },
  {
    label: "Try Mixed",
    text: "Hi, I'm jamie.chen@acme.com, SSN 123-45-6789, call me at 415-555-0199.",
  },
];

const KIND_STYLES: Record<DetectionKind, { original: string; masked: string }> = {
  "SSN":         { original: "bg-red-500/15 text-red-300 decoration-red-400",       masked: "bg-primary/20 text-primary border-primary/40" },
  "Credit Card": { original: "bg-red-500/15 text-red-300 decoration-red-400",       masked: "bg-primary/20 text-primary border-primary/40" },
  "Email":       { original: "bg-amber-500/15 text-amber-300 decoration-amber-400", masked: "bg-secondary/20 text-secondary border-secondary/40" },
  "Phone":       { original: "bg-amber-500/15 text-amber-300 decoration-amber-400", masked: "bg-secondary/20 text-secondary border-secondary/40" },
  "API Key":     { original: "bg-red-500/15 text-red-300 decoration-red-400",       masked: "bg-accent/20 text-accent border-accent/40" },
};

const LiveDemo = () => {
  const [text, setText] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [exampleIdx, setExampleIdx] = useState(0);
  const [maskingMode, setMaskingMode] = useState<MaskingMode>("partial");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const sectionRef = useScrollReveal<HTMLDivElement>();

  // Auto-typing loop: types out each example, pauses, then cycles.
  // Stops the moment the user interacts with the textarea or a preset.
  useEffect(() => {
    if (isTouched) return;

    let cancelled = false;
    const current = EXAMPLES[exampleIdx];
    let i = 0;

    const typeNext = () => {
      if (cancelled) return;
      if (i <= current.length) {
        setText(current.slice(0, i));
        i += 1;
        const delay = 22 + Math.random() * 30;
        timer = window.setTimeout(typeNext, delay);
      } else {
        // Pause at the end so the viewer can read, then move on.
        timer = window.setTimeout(() => {
          if (cancelled) return;
          setText("");
          setExampleIdx((idx) => (idx + 1) % EXAMPLES.length);
        }, 2400);
      }
    };

    let timer = window.setTimeout(typeNext, 250);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [exampleIdx, isTouched]);

  const detections = useMemo(() => detect(text, maskingMode), [text, maskingMode]);
  const segments = useMemo(() => segmentize(text, detections), [text, detections]);

  const detectionCount = detections.length;
  const kindCounts = useMemo(() => {
    const counts = new Map<DetectionKind, number>();
    for (const d of detections) counts.set(d.kind, (counts.get(d.kind) ?? 0) + 1);
    return Array.from(counts.entries());
  }, [detections]);

  const applyPreset = (presetText: string) => {
    setIsTouched(true);
    setText(presetText);
    // Focus after a tick so React has re-rendered.
    window.setTimeout(() => textareaRef.current?.focus(), 0);
  };

  const clear = () => {
    setIsTouched(true);
    setText("");
    textareaRef.current?.focus();
  };

  const resumeDemo = () => {
    setIsTouched(false);
    setText("");
    setExampleIdx((i) => (i + 1) % EXAMPLES.length);
    textareaRef.current?.blur();
  };

  return (
    <section id="demo" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative">
        <div ref={sectionRef} className="reveal text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Live playground</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Watch Boppi work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Type anything, or click a preset. Detection runs in your browser, right now, on this page.
          </p>
        </div>

        {/* Preset chips row */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {PRESETS.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => applyPreset(preset.text)}
              className="px-4 py-2 rounded-full text-sm font-semibold bg-card/60 backdrop-blur-sm border border-border/60 hover:border-primary/50 hover:bg-primary/10 hover:text-primary active:scale-95 transition-all"
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Masking mode toggle: partial vs full redaction */}
        <div className="flex justify-center mb-6">
          <div
            role="radiogroup"
            aria-label="Masking mode"
            className="inline-flex items-center gap-1 p-1 rounded-full bg-card/60 backdrop-blur-sm border border-border/60"
          >
            <button
              type="button"
              role="radio"
              aria-checked={maskingMode === "partial"}
              onClick={() => setMaskingMode("partial")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                maskingMode === "partial"
                  ? "bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-[0_0_0_1px_hsl(310_90%_85%/0.4)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Partial mask
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={maskingMode === "redact"}
              onClick={() => setMaskingMode("redact")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                maskingMode === "redact"
                  ? "bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-[0_0_0_1px_hsl(310_90%_85%/0.4)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Full redaction
            </button>
          </div>
        </div>

        <Card className="p-6 md:p-10 bg-card/60 backdrop-blur-sm border-primary/20 relative overflow-hidden">
          {/* Soft brand orbs behind the card */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          {/* Input row: "You" avatar + label + textarea */}
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/30 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">You</div>
                  <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Editable, try it</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={clear}
                  disabled={text.length === 0}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Clear input"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear
                </button>
                <button
                  type="button"
                  onClick={resumeDemo}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Resume auto demo"
                >
                  <RefreshCcw className="w-3.5 h-3.5" />
                  {isTouched ? "Auto demo" : "New example"}
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl border-2 border-primary/25 bg-background/70 focus-within:border-primary/60 focus-within:shadow-[0_0_0_6px_hsl(310_90%_85%/0.12)] transition-all">
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => {
                  if (!isTouched) setIsTouched(true);
                  setText(e.target.value);
                }}
                onFocus={() => setIsTouched(true)}
                rows={3}
                placeholder="Type anything here. Try typing a fake SSN, email, or credit card number..."
                className="w-full bg-transparent resize-none p-4 md:p-5 text-base md:text-lg text-foreground placeholder:text-muted-foreground/60 focus:outline-none font-mono"
                spellCheck={false}
                autoCapitalize="off"
                autoCorrect="off"
              />
              {!isTouched && (
                <span
                  className="absolute pointer-events-none text-primary text-lg md:text-xl animate-boppi-caret"
                  style={{ left: `calc(1rem + ${text.length * 0.6}ch)`, top: "1rem" }}
                  aria-hidden
                >
                  ▍
                </span>
              )}
            </div>

            {/* Live counter strip */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-3">
                <span>
                  <span className="font-mono font-semibold text-foreground">{text.length}</span> characters
                </span>
                <span className="opacity-40">·</span>
                <span>
                  <span className="font-mono font-semibold text-primary">{detectionCount}</span> detection{detectionCount === 1 ? "" : "s"}
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-success">
                <Lock className="w-3 h-3" />
                100% local
              </span>
            </div>
          </div>

          {/* Divider with arrow */}
          <div className="flex items-center justify-center gap-3 my-6 md:my-8" aria-hidden>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary">
              <ArrowDown className="w-3.5 h-3.5 md:hidden" />
              <ArrowRight className="w-3.5 h-3.5 hidden md:block" />
              Boppi masks {detectionCount > 0 ? `${detectionCount} item${detectionCount === 1 ? "" : "s"}` : "in your browser"}
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </div>

          {/* Output row: Boppi avatar + label + bubble */}
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 border border-primary/30 flex items-center justify-center">
                  <img src="/boppi-logo.png" alt="" className="w-5 h-5" />
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-success border-2 border-card animate-boppi-pulse" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">What the AI sees</div>
                  <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Masked by Boppi</div>
                </div>
              </div>
              {kindCounts.length > 0 && (
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {kindCounts.map(([kind, count]) => (
                    <span
                      key={kind}
                      className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-success/15 text-success border border-success/30"
                    >
                      {count} {kind}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-success/20 bg-success/5 p-4 md:p-5 min-h-[96px] font-mono text-base md:text-lg whitespace-pre-wrap break-words leading-relaxed">
              {text.length === 0 ? (
                <span className="text-muted-foreground/60">
                  Whatever you type above will show up here, with PII replaced.
                </span>
              ) : (
                segments.map((seg, i) => {
                  if (seg.type === "plain") {
                    return <span key={i}>{seg.text}</span>;
                  }
                  return (
                    <span
                      key={i}
                      className={`inline-flex items-center px-2 py-0.5 mx-0.5 rounded-md border text-sm md:text-base font-semibold animate-boppi-pop ${KIND_STYLES[seg.kind].masked}`}
                      title={`${seg.kind}: masked in your browser`}
                    >
                      {seg.masked}
                    </span>
                  );
                })
              )}
            </div>
          </div>

          {/* "What Boppi caught" strip */}
          {detections.length > 0 && (
            <div className="mt-6 rounded-xl bg-background/40 border border-border/40 p-4">
              <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                What Boppi caught
              </div>
              <div className="flex flex-wrap gap-2">
                {detections.map((d, i) => (
                  <span
                    key={`${d.start}-${i}`}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono line-through decoration-2 underline-offset-2 ${KIND_STYLES[d.kind].original}`}
                  >
                    <span className="text-[10px] uppercase tracking-wide opacity-70 font-sans no-underline">
                      {d.kind}
                    </span>
                    <span>{d.original}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            This demo runs 100% in your browser. Nothing you type leaves this tab.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90"
            onClick={() => window.open('https://form.typeform.com/to/rqp5yYJf', '_blank')}
          >
            Get Boppi for your team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
