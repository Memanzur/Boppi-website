/**
 * The only AI tools discovery covers today, on a computer the customer enrolls.
 * Pills reuse the marquee chip styling. They are a static row so a short
 * list does not look like a long catalog.
 */

type Tool = {
  name: string;
  color: string;
};

const TOOLS: Tool[] = [
  { name: "Claude Desktop", color: "#CC785C" },
  { name: "Claude Code", color: "#D4A27F" },
  { name: "Cursor", color: "#E8E8E8" },
];

const SupportedTools = () => {
  return (
    <section className="relative py-10 px-6 overflow-hidden" aria-labelledby="supported-tools-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="supported-tools-heading" className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Discovered today on an enrolled computer
        </h2>

        <ul className="flex flex-wrap justify-center gap-4">
          {TOOLS.map((tool) => (
            <li
              key={tool.name}
              className="flex items-center gap-2 shrink-0 px-5 py-2.5 rounded-full bg-card/60 backdrop-blur-sm border border-border/40"
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: tool.color, boxShadow: `0 0 10px ${tool.color}80` }}
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {tool.name}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
          ChatGPT, Gemini, Copilot, and other tools are not part of discovery
          today. An enrolled computer reports what it can see. It is not a
          universal monitor of every AI action.
        </p>
      </div>
    </section>
  );
};

export default SupportedTools;
