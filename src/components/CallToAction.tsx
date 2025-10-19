import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";

interface CallToActionProps {
  onBookAudit: () => void;
}

export const CallToAction = ({ onBookAudit }: CallToActionProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center animate-float shadow-2xl">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Let's Build Your
            </span>
            <br />
            <span className="text-foreground">Smarter Business.</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Book a free audit today and see how AYB can automate your marketing, sales, 
            and operations — powered by AI.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              size="lg"
              onClick={onBookAudit}
              className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 transition-all shadow-2xl hover:shadow-primary/50 text-xl px-12 py-8 group"
            >
              <Calendar className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Get Free Audit
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-glow" />
              No Credit Card Required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow" style={{ animationDelay: "1s" }} />
              30-Min Free Consultation
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow" style={{ animationDelay: "2s" }} />
              Custom Solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
