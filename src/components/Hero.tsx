import { Button } from "@/components/ui/button";
import { Calendar, Zap } from "lucide-react";
import aybLogo from "@/assets/ayb-logo.png";

interface HeroProps {
  onBookAudit: () => void;
}

export const Hero = ({ onBookAudit }: HeroProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={aybLogo} alt="AYB Logo" className="h-20 md:h-28 object-contain" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              The Future of Business
            </span>
            <br />
            <span className="text-foreground">Automation Starts Here.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AYB transforms your everyday workflows into intelligent systems that run 24/7 — 
            automating your marketing, sales, and operations while you focus on scaling.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={onBookAudit}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-lg hover:shadow-xl text-lg px-8 py-6 group"
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Book Free Audit
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("how-it-works")}
              className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 text-lg px-8 py-6 group"
            >
              <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              See How It Works
            </Button>
          </div>

          {/* Floating elements */}
          <div className="pt-12 flex justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-glow" />
              AI-Powered
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow" style={{ animationDelay: "1s" }} />
              24/7 Automation
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow" style={{ animationDelay: "2s" }} />
              Zero Manual Work
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
