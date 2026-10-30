import { FileSearch, ShieldQuestion, Scale } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const rules = [
  {
    icon: FileSearch,
    title: "Your data stays yours",
    body:
      "Scans run on your device and read your AI settings, not the contents of your files. Nothing is uploaded unless you choose to share it, and Boppi strips out known secret formats first. Preview any upload with --dry-run, and review exports before you share them.",
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
      "Boppi never changes a permission on its own. Every fix asks first and saves a backup. Backups hold your original settings, secrets included, so keep them somewhere safe.",
  },
];

const questions = [
  {
    question: "Does Boppi see what my AI actually did?",
    answer: "A scan starts from your settings and shows what your AI could access. Activity monitoring adds what it actually tried to use, for the AI tools that support it.",
  },
  {
    question: "Can Boppi change permissions for me?",
    answer: "Yes, with your OK. Boppi can remove a connection, narrow which folders an AI can reach, grant temporary access, and roll changes back. Changes go into the AI tool's settings, so a tool that's already running picks them up when it restarts.",
  },
  {
    question: "How do I get started?",
    answer: "Anyone can run the free scanner right now with npx boppi scan. No account needed. For Boppi Cloud for your team or company, email us for early access.",
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
            <a href="/privacy" className="text-sm text-primary hover:underline font-semibold">
              Read the privacy policy
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Honesty;
