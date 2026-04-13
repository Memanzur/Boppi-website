import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    title: "Install from the Chrome Web Store",
    description:
      "One click to add Boppi to Chrome. No account, no config, no onboarding survey. The badge appears in the corner of every tab immediately.",
  },
  {
    title: "Open any AI tool",
    description:
      "Go to ChatGPT, Claude, Gemini, Copilot, or anywhere else your team works. Boppi is already watching the input field.",
  },
  {
    title: "Type normally. Boppi masks before send",
    description:
      "The moment sensitive data shows up in your prompt, Boppi replaces it with a safe placeholder. You see the mask. The AI only ever sees the mask.",
  },
  {
    title: "Check the dashboard",
    description:
      "See exactly what was caught, on which tools, and how often. IT managers can export audit logs as CSV for compliance reviews.",
  },
];

const HowItWorks = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="how-it-works" className="py-16 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Left-aligned section header — deliberately breaks the
            centered rhythm of the rest of the page. */}
        <div ref={headerRef} className="reveal mb-14 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.05] [text-wrap:balance]">
            How it{" "}
            <span className="font-serif italic font-normal text-primary">
              actually
            </span>{" "}
            works
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Four steps. No training. Your team keeps working the way they already do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Big serif numeral as the only "icon". No box, no badge,
                  no gradient. The number is the visual. */}
              <div className="font-serif italic text-7xl md:text-8xl text-primary/50 leading-none mb-4 select-none">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
