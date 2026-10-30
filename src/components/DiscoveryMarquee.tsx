import { Check, CircleAlert } from "lucide-react";

const clients = ["Claude Desktop", "Claude Code", "Cursor"];
const boundaries = [
  "AI agents and MCP servers",
  "Files and credentials",
  "Shell and code execution",
  "Websites and outside services",
  "Browsers, email, and messaging",
];

const DiscoveryMarquee = () => (
  <section className="relative border-y border-border bg-card/40 py-10 px-6">
    <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      <div>
        <p className="section-kicker">Discovery</p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em]">See your AI connections in one scan.</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-lg">
          MCP servers are the plug-ins that let an AI assistant use tools, files, and services.
          Boppi reads your AI settings, lists the connections it finds, and maps what each one can reach.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-3 text-sm">
        <div className="border border-border bg-background p-4">
          <div className="flex items-center gap-2 text-foreground font-semibold mb-3">
            <Check className="w-4 h-4 text-success" /> Works with
          </div>
          <div className="flex flex-wrap gap-2">
            {clients.map((client) => <span key={client} className="coverage-chip">{client}</span>)}
          </div>
        </div>
        <div className="border border-border bg-background p-4">
          <div className="flex items-center gap-2 text-foreground font-semibold mb-3">
            <CircleAlert className="w-4 h-4 text-warning" /> What it checks
          </div>
          <p className="text-muted-foreground leading-relaxed">Which tools each AI can use, what files and keys they can touch, and where your data could end up.</p>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground border-t border-border pt-5">
      {boundaries.map((boundary) => <span key={boundary} className="coverage-chip">{boundary}</span>)}
    </div>
  </section>
);

export default DiscoveryMarquee;
