import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    title: "See the access",
    description:
      "Boppi finds your AI agents, MCP servers, and tools, and lists what each one can reach.",
  },
  {
    title: "Understand the risk",
    description:
      "It connects the dots between access and risk, and shows you what matters most first.",
  },
  {
    title: "Control permissions",
    description:
      "Restrict, grant, or revoke access with one approved click. Need access for a short time? Grant it Just-in-Time and it expires on its own.",
  },
  {
    title: "Verify the change",
    description:
      "Boppi rescans to confirm the change took effect. Changed your mind? Roll it back.",
  },
  {
    title: "Monitor access",
    description:
      "Boppi watches for new connections and permission changes, so new risks don't slip by.",
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
            See it, understand it, fix it, confirm it, and keep watching. Five steps,
            plain answers at every one.
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
