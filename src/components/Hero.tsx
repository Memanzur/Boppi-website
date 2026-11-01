import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { signupUrl, signInUrl } from "@/lib/app-url";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-8 pb-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]" />

      <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col">
        <div className="mb-5 md:mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 mb-4 md:mb-6 glow-primary">
            <img src="/boppi-logo.png" alt="Boppi" className="w-9 h-9 md:w-12 md:h-12" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">boppi</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm font-medium">
              AI access security and governance
            </Badge>
            <Badge className="bg-secondary/10 text-secondary border border-secondary/30 hover:bg-secondary/20 px-4 py-2 text-sm font-medium">
              Boppi Cloud
            </Badge>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground [text-wrap:balance] px-2 md:px-0">
          See what your AI tools can{" "}
          <span className="font-serif italic font-normal text-foreground md:whitespace-nowrap">
            potentially reach
          </span>
          <span className="text-primary">.</span>
        </h2>

        <p className="text-lg md:text-2xl text-muted-foreground mb-5 md:mb-8 max-w-3xl mx-auto leading-relaxed">
          Boppi Cloud is an AI access security and governance platform.
          Create an account, enroll a computer, and review evidenced findings
          for Claude Desktop, Claude Code, and Cursor.
        </p>

        <div className="order-2 md:order-none flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-12 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <span>Discovery on an enrolled computer</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full">
            <span>Evidenced findings, with history</span>
          </div>
          <div className="flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full">
            <span>Optional MFA</span>
          </div>
        </div>

        <div className="order-1 md:order-none flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg font-semibold glow-primary"
          >
            <a href={signupUrl()}>
              Create a secure account
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/20 hover:bg-primary/5 px-8 py-4 text-lg"
          >
            <a href="#how-it-works">See how it works</a>
          </Button>
        </div>

        <p className="order-1 md:order-none text-sm text-muted-foreground mb-6 md:mb-8">
          Already have an account?{" "}
          <a href={signInUrl()} className="text-primary hover:underline font-semibold">
            Sign in
          </a>
        </p>

        <p className="order-3 md:order-none text-sm text-muted-foreground max-w-2xl mx-auto">
          Discovery today covers Claude Desktop, Claude Code, and Cursor on a
          computer you enroll. Boppi is not antivirus, not a chatbot, and not
          a local-only scanner. It does not monitor every AI action. A
          finding is not a promise about a later incident.
        </p>
      </div>

      <div className="absolute top-16 left-8 w-28 h-28 md:w-40 md:h-40 rounded-full bg-primary/15 blur-2xl animate-boppi-drift-1" />
      <div className="absolute top-32 right-12 w-24 h-24 md:w-36 md:h-36 rounded-full bg-secondary/15 blur-2xl animate-boppi-drift-2" />
      <div className="absolute bottom-20 left-1/4 w-20 h-20 md:w-32 md:h-32 rounded-full bg-accent/15 blur-2xl animate-boppi-drift-3" />
      <div className="absolute bottom-32 right-8 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/10 blur-xl animate-boppi-drift-1" style={{ animationDelay: "3s" }} />
    </section>
  );
};

export default Hero;
