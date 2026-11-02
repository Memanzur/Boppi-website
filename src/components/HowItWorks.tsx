import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    title: "See the access",
    description:
      "Boppi reads MCP configuration for Claude Desktop, Claude Code, and Cursor, and lists what each connection can reach. Unknown reach stays unknown.",
  },
  {
    title: "Understand the risk",
    description:
      "It models exposure paths from that configuration, shows the evidence, and ranks what to review first. A path is potential. It is not a record that an attack happened.",
  },
  {
    title: "Approve a change",
    description:
      "Review the proposed edit. boppi fix removes one server only after you confirm, and it saves a backup. Other edits you make yourself. Just-in-time access is coming soon.",
  },
  {
    title: "Check the result",
    description:
      "Run the scan again. boppi verify grades whether the predicted paths are gone. An app that is already open picks up a config change when it restarts.",
  },
  {
    title: "Keep the record",
    description:
      "Local history stays on the machine. When you want the team to see it, boppi push sends one sanitized inventory. Continuous watching is coming soon.",
  },
];

const HowItWorks = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="how-it-works" className="py-16 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal mb-14 max-w-2xl">
          <p className="section-kicker">How it works</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] [text-wrap:balance]">From access to action.</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            See it, understand it, approve a change, check the next scan, and keep the record.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="font-mono text-sm text-primary leading-none mb-5 select-none">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold mb-2 leading-snug">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
