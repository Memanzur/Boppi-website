import { Check, CircleAlert } from "lucide-react";

const clients = ["Claude Desktop", "Claude Code", "Cursor"];
const boundaries = [
  "MCP servers and tools",
  "File and credential access",
  "Shell and code execution",
  "Web and external destinations",
  "Browser and messaging capability",
];

const DiscoveryMarquee = () => (
  <section className="relative border-y border-border bg-card/40 py-10 px-6">
    <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      <div>
        <p className="section-kicker">Current coverage</p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em]">Start where the evidence lives.</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-lg">
          Boppi reads supported local MCP configuration. It does not pretend to see agents or tools
          that are not represented in the evidence.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-3 text-sm">
        <div className="border border-border bg-background p-4">
          <div className="flex items-center gap-2 text-foreground font-semibold mb-3">
            <Check className="w-4 h-4 text-success" /> Supported clients
          </div>
          <div className="flex flex-wrap gap-2">
            {clients.map((client) => <span key={client} className="coverage-chip">{client}</span>)}
          </div>
        </div>
        <div className="border border-border bg-background p-4">
          <div className="flex items-center gap-2 text-foreground font-semibold mb-3">
            <CircleAlert className="w-4 h-4 text-warning" /> Not yet discovered
          </div>
          <p className="text-muted-foreground leading-relaxed">Windsurf and VS Code integrations are not part of this beta.</p>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground border-t border-border pt-5">
      {boundaries.map((boundary) => <span key={boundary}>— {boundary}</span>)}
    </div>
  </section>
);

export default DiscoveryMarquee;
