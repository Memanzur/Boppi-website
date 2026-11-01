import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { signupUrl } from "@/lib/app-url";

const steps = [
  {
    title: "Create an account",
    description:
      "Open Boppi Cloud and create an account with email and password, or join a workspace you were invited to. Optional MFA can be turned on for the account.",
  },
  {
    title: "Enroll a computer",
    description:
      "Discovery for Claude Desktop, Claude Code, and Cursor runs on that computer and reports findings to your workspace. The computer is how collection works. The product is the cloud account.",
  },
  {
    title: "Review potential reach",
    description:
      "Read the inventory, the potential access paths, and the evidenced findings, including what is still unknown. Coverage is limited to what that computer reported.",
  },
  {
    title: "Decide, then check the next scan",
    description:
      "Turn on monitoring. A missed report is called out, and meaningful changes can raise an in-app alert. Approve a modeled remediation, apply the manual steps, and let the next scan check the outcome. The audit record and export stay available.",
  },
];

const HowItWorks = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="how-it-works" className="py-16 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal mb-14 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.05] [text-wrap:balance]">
            How it{" "}
            <span className="font-serif italic font-normal text-primary">
              actually
            </span>{" "}
            works
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Visit, create an account, enroll a computer, then review what those
            tools can potentially reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
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

        <div className="mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold"
          >
            <a href={signupUrl()}>
              Create a secure account
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
