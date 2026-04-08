import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/boppi-logo.png" alt="Boppi" className="w-8 h-8" />
              <span className="text-xl font-bold gradient-text">boppi</span>
            </div>
            <p className="text-sm text-muted-foreground">
              PII masking for teams using AI. Detection runs entirely in your browser.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a></li>
              <li><a href="#admin" className="hover:text-primary transition-colors">For IT admins</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#support" className="hover:text-primary transition-colors">Support</a></li>
              <li><a href="mailto:boppii.ioo@gmail.com" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="https://memanzur.github.io/boppi-privacy/how-it-works.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Boppi. Built in Utah.</p>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-success" />
            <span>Local processing · No data sent anywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
