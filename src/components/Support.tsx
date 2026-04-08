import { Mail, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Support = () => {
  return (
    <section id="support" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Need Help?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real humans. Not a chatbot. Not a ticket queue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 mb-4">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">How It Works</h3>
            <p className="text-muted-foreground mb-4">Technical overview of local detection and masking</p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open('https://memanzur.github.io/boppi-privacy/how-it-works.html', '_blank')}
            >
              Read the docs
            </Button>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
            <p className="text-muted-foreground mb-4">We answer every email, usually same day</p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open('mailto:boppii.ioo@gmail.com', '_blank')}
            >
              boppii.ioo@gmail.com
            </Button>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 mb-4">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Feedback</h3>
            <p className="text-muted-foreground mb-4">Missed a detection? Tell us what happened</p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open('https://form.typeform.com/to/vbiGSeh4', '_blank')}
            >
              Send Feedback
            </Button>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4">Rolling Boppi out to your team?</h3>
          <p className="text-muted-foreground mb-6">
            Talk to us directly for deployment guidance, industry profile tuning, and compliance review support.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity"
            onClick={() => window.open('mailto:boppii.ioo@gmail.com?subject=Boppi%20deployment%20question', '_blank')}
          >
            Get in touch
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Support;
