import { Cloud, FileSearch, KeyRound } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Privacy = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="privacy" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-8 space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">What the account holds</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Boppi Cloud is the product. An enrolled computer reports findings
            to that account. This site does not claim that nothing leaves the machine.
          </p>
        </div>

        <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20">
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                <Cloud className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Findings go to your workspace</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Discovery runs for Claude Desktop, Claude Code, and Cursor on
                  a computer you enroll. The report is about configuration and
                  potential access. It is not a copy of your files, and it is
                  not a transcript of every prompt.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                <FileSearch className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">History and export</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Evidenced findings are kept with history. You can export your
                  data from the control plane. Coverage limits stay visible:
                  Boppi does not claim to see a tool the computer did not report.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                <KeyRound className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Optional MFA on the account</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You can add a second factor. This marketing site does not
                  include a third-party analytics script. We do not sell
                  personal information.
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-6 pt-5 border-t border-border/50 text-center">
            <a href="/privacy" className="text-sm text-primary hover:underline font-semibold">
              Read the privacy policy →
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Privacy;
