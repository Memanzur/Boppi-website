import { useEffect, useMemo, useRef, useState } from "react";
import { Sparkles, ArrowDown, ArrowRight, Bot, User, RefreshCcw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { detect, segmentize, type DetectionKind } from "@/lib/masking";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const EXAMPLES: string[] = [
  "Hey, can you help me with my tax return? My SSN is 123-45-6789 and my email is jamie.chen@acme.com",
  "Process this payment for me: card 4242 4242 4242 4242, callback to 415-555-0199",
  "Debug this for me. My OpenAI key is sk-proj-ab12cd34ef56gh78ij90kl12 and it keeps 401ing.",
  "Draft a follow-up to patient MRN john.doe@clinic.org, DOB on file, phone (512) 555-0134",
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
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const sectionRef = useScrollReveal<HTMLDivElement>();

  // Auto-typing loop: types out each example, pauses, then moves on.
  // Stops the moment the user touches the textarea.
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

  const detections = useMemo(() => detect(text), [text]);
  const segments = useMemo(() => segmentize(text, detections), [text, detections]);

  const detectionCount = detections.length;
  const kindCounts = useMemo(() => {
    const counts = new Map<DetectionKind, number>();
    for (const d of detections) counts.set(d.kind, (counts.get(d.kind) ?? 0) + 1);
    return Array.from(counts.entries());
  }, [detections]);

  const reset = () => {
    setIsTouched(false);
    setText("");
    setExampleIdx((i) => (i + 1) % EXAMPLES.length);
    textareaRef.current?.blur();
  };

  return (
    <section id="demo" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={sectionRef} className="reveal text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Live demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Watch Boppi work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Type anything, or let it auto-play. Detection runs in your browser, right now, on this page.
          </p>
        </div>

        <Card className="reveal p-6 md:p-10 bg-card/60 backdrop-blur-sm border-primary/20 relative overflow-hidden">
          {/* Soft brand orb behind the card to tie it visually to the hero */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          {/* Input row */}
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                <span>You type</span>
              </div>
              <button
                type="button"
                onClick={reset}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                aria-label="Reset demo"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
                {isTouched ? "Reset" : "New example"}
              </button>
            </div>

            <div className="relative rounded-2xl border border-border/60 bg-background/60 focus-within:border-primary/40 transition-colors">
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => {
                  if (!isTouched) setIsTouched(true);
                  setText(e.target.value);
                }}
                onFocus={() => setIsTouched(true)}
                rows={3}
                placeholder="Try typing an SSN, credit card, email, or API key..."
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
          </div>

          {/* Divider with arrow: horizontal on desktop, vertical on mobile */}
          <div className="flex items-center justify-center gap-3 my-6 md:my-8" aria-hidden>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary">
              <ArrowDown className="w-3.5 h-3.5 md:hidden" />
              <ArrowRight className="w-3.5 h-3.5 hidden md:block" />
              Boppi masks {detectionCount > 0 ? `${detectionCount} item${detectionCount === 1 ? "" : "s"}` : "in your browser"}
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </div>

          {/* Output row */}
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Bot className="w-4 h-4" />
                <span>What the AI sees</span>
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
                  Whatever you type on the top will appear here, with PII replaced.
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

          {/* Small "what Boppi caught" strip, only shown when there are detections */}
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

        <div className="reveal mt-8 text-center">
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
