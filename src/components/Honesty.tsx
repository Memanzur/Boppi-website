import { FileSearch, ShieldQuestion, Scale } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const rules = [
  {
    icon: FileSearch,
    title: "Your data stays yours",
    body:
      "Scans run on your device and read MCP configuration, not the contents of your files. Nothing is uploaded unless you run boppi push. Recognized secret shapes are redacted first. Preview the payload with --dry-run, and review an export before you share it.",
  },
  {
    icon: ShieldQuestion,
    title: "A finding is a reason to look",
    body:
      "Boppi flags access that could be risky and shows you why. A finding isn't proof of an attack, and a clean scan isn't a guarantee of safety.",
  },
  {
    icon: Scale,
    title: "You decide what changes",
    body:
      "boppi fix asks in the terminal before it removes one MCP server, and it saves a backup of that file. The backup can include secrets, and it stays on your machine. The command does not grant access, and it does not edit anything else.",
  },
];

const questions = [
  {
    question: "Does Boppi see what my AI actually did?",
    answer: "A scan starts from your settings and shows what your AI could access. It does not record prompts, tool arguments, or what the agent actually did.",
  },
  {
    question: "Can Boppi change permissions for me?",
    answer: "boppi fix can remove one MCP server entry after you confirm, and it saves a backup first. It does not grant access, and it does not apply a change from the website. An app that is already open picks up the file when it restarts. Just-in-time access is coming soon.",
  },
  {
    question: "How do I get started?",
    answer: "Anyone can run the free scanner right now with npx boppi scan. No account needed. For your team, create a free workspace at app.boppi.io.",
  },
];

const Honesty = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="honesty" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-8 space-y-3">
          <p className="section-kicker">Trust</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">Clear evidence. Your call.</h2>
          <p className="text-lg text-muted-foreground">
            Boppi shows its work, and nothing changes without your OK.
          </p>
        </div>

        <Card className="p-6 md:p-8 bg-card border-border">
          <ul className="space-y-5">
            {rules.map((rule) => {
              const Icon = rule.icon;
              return (
                <li key={rule.title} className="flex items-start gap-4">
                  <div className="shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{rule.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{rule.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 pt-5 border-t border-border/50 space-y-4" aria-label="Common questions">
            {questions.map((item) => (
              <details key={item.question}>
                <summary className="cursor-pointer font-semibold text-sm text-primary">{item.question}</summary>
                <p className="pt-3 text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-border/50 text-center">
            <a href="/security" className="text-sm text-primary hover:underline font-semibold">
              Read what a scan sends
            </a>
            <span className="mx-3 text-muted-foreground">·</span>
            <a href="/privacy" className="text-sm text-primary hover:underline font-semibold">
              Privacy policy
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Honesty;
