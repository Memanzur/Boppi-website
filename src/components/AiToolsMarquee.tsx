/**
 * Infinite horizontal marquee of AI tools and web apps that Boppi protects.
 * CSS-only scroll via duplicated children. Fades out on both edges with a
 * mask image so tools slide into view instead of popping. Pauses on hover.
 */

type Tool = {
  name: string;
  color: string;
};

// Brand accent colors, used as a small dot next to each tool name. We don't
// use the actual logos to stay clear of trademark gotchas on a marketing page.
const TOOLS: Tool[] = [
  { name: "ChatGPT",     color: "#10A37F" },
  { name: "Claude",      color: "#CC785C" },
  { name: "Gemini",      color: "#4285F4" },
  { name: "Copilot",     color: "#0078D4" },
  { name: "Perplexity",  color: "#20B5A6" },
  { name: "Notion AI",   color: "#E8E8E8" },
  { name: "Gmail",       color: "#EA4335" },
  { name: "Salesforce",  color: "#00A1E0" },
  { name: "Outlook",     color: "#0072C6" },
  { name: "Slack",       color: "#E01E5A" },
];

const AiToolsMarquee = () => {
  // Duplicate the list so the loop can translate -50% and wrap seamlessly.
  const doubled = [...TOOLS, ...TOOLS];

  return (
    <section className="relative py-10 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Works everywhere your team pastes
        </p>

        <div className="boppi-marquee-mask boppi-marquee-pause relative">
          <div className="flex gap-4 w-max animate-boppi-marquee">
            {doubled.map((tool, i) => (
              <div
                key={`${tool.name}-${i}`}
                className="flex items-center gap-2 shrink-0 px-5 py-2.5 rounded-full bg-card/60 backdrop-blur-sm border border-border/40 hover:border-primary/40 transition-colors"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: tool.color, boxShadow: `0 0 10px ${tool.color}80` }}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiToolsMarquee;
