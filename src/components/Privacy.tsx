import { Lock, Shield, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Privacy = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="privacy" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-8 space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Privacy First</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A PII masking tool that phones home would defeat the entire point.
          </p>
        </div>

        <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20">
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Detection runs in your browser</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every regex, every match, every masking decision happens locally. Boppi does
                  not send your input anywhere for analysis.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Your activity log stays on your machine</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The audit log of what Boppi caught lives in your browser's local storage. It
                  does not leave your device unless you export it.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">No tracking, no ads, no sale of data</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We do not use third-party analytics. We do not sell data. We do not collect
                  data to sell in the first place.
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-6 pt-5 border-t border-border/50 text-center">
            <a href="/privacy" className="text-sm text-primary hover:underline font-semibold">
              Read the full privacy policy →
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Privacy;
