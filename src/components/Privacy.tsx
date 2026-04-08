import { Shield, Lock, Eye, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const principles = [
  {
    icon: Lock,
    title: "Detection runs in your browser",
    description:
      "Every regex, every pattern match, every masking decision happens locally. Boppi does not send your input to a server for analysis.",
  },
  {
    icon: Shield,
    title: "Your activity log stays on your machine",
    description:
      "The audit log of what Boppi caught, on which tool, and when, lives in your browser's local storage. It does not leave your device unless you export it.",
  },
  {
    icon: Eye,
    title: "Opt-in telemetry only",
    description:
      "Boppi can share anonymous usage stats to help us improve detection accuracy, but only if you explicitly turn it on. It's off by default.",
  },
  {
    icon: Database,
    title: "No tracking, no ads, no sale of data",
    description:
      "We do not use third-party analytics. We do not sell data. We do not have data to sell, because we do not collect it.",
  },
];

const Privacy = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="privacy" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Privacy First</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A PII masking tool that phones home would defeat the entire point.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/10">
          <h3 className="text-2xl font-bold mb-4">What Boppi does with your data</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Nothing, in the cloud sense.</strong>{" "}
              Boppi reads the text you type into web forms and AI chat inputs, runs it through a set
              of pattern matchers, and replaces matches with safe placeholders before the submit.
              The original text never leaves your browser tab.
            </p>
            <p>
              <strong className="text-foreground">Local audit log.</strong>{" "}
              When a detection fires, Boppi writes a row to your local activity log so you can see
              what was caught and when. This log is stored in your browser and is only accessible to
              you. IT admins can ask users to export it as CSV for compliance reviews.
            </p>
            <p>
              <strong className="text-foreground">Optional anonymous stats.</strong>{" "}
              If you opt in, Boppi can send aggregate counts of detections (not the detected text
              itself) so we can improve accuracy. This is off by default. You can turn it off at any
              time.
            </p>
            <p>
              <strong className="text-foreground">Pause is audited.</strong>{" "}
              If a user pauses masking, they have to enter a reason. That reason is logged so IT has
              a full picture of when and why protection was off.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-border/50">
            <a href="/privacy" className="text-primary hover:underline font-semibold">
              Read Full Privacy Policy →
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Privacy;
