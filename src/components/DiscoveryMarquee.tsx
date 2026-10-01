type Item = { name: string; color: string };

// What the scanner discovers today, and the server kinds its capability
// catalog recognizes. Mirrors src/cli/discovery and knownServers.js in the
// scanner repo.
const CLIENTS: Item[] = [
  { name: "Claude Desktop", color: "#CC785C" },
  { name: "Claude Code", color: "#CC785C" },
  { name: "Cursor", color: "#E8E8E8" },
];

const SERVER_KINDS: Item[] = [
  { name: "file access servers", color: "#F5A3E0" },
  { name: "shell and command servers", color: "#F87171" },
  { name: "web fetch and search", color: "#67E8F9" },
  { name: "browser automation", color: "#67E8F9" },
  { name: "code execution sandboxes", color: "#F87171" },
  { name: "credential managers", color: "#FBBF24" },
  { name: "GitHub, Slack, Notion, Supabase, Stripe", color: "#86EFAC" },
  { name: "email senders", color: "#86EFAC" },
  { name: "remote MCP servers", color: "#67E8F9" },
];

const Chip = ({ item }: { item: Item }) => (
  <div className="flex items-center gap-2 shrink-0 px-5 py-2.5 rounded-full bg-card/60 backdrop-blur-sm border border-border/40 hover:border-primary/40 transition-colors">
    <span
      className="w-2 h-2 rounded-full shrink-0"
      style={{ background: item.color, boxShadow: `0 0 10px ${item.color}80` }}
      aria-hidden="true"
    />
    <span className="text-sm font-medium text-foreground whitespace-nowrap">{item.name}</span>
  </div>
);

const DiscoveryMarquee = () => {
  const doubled = [...SERVER_KINDS, ...SERVER_KINDS];

  return (
    <section className="relative py-10 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
          Reads the MCP configs for
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CLIENTS.map((c) => (
            <Chip key={c.name} item={c} />
          ))}
        </div>

        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Infers what servers can do, from the evidence in the config
        </p>
        <div className="boppi-marquee-mask boppi-marquee-pause relative">
          <div className="flex gap-4 w-max animate-boppi-marquee">
            {doubled.map((item, i) => (
              <Chip key={`${item.name}-${i}`} item={item} />
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Every inference is labeled with what matched. Windsurf and VS Code are not discovered yet.
        </p>
      </div>
    </section>
  );
};

export default DiscoveryMarquee;
