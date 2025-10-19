import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface FloatingCTAProps {
  onClick: () => void;
}

export const FloatingCTA = ({ onClick }: FloatingCTAProps) => {
  return (
    <div className="fixed bottom-8 right-8 z-50 animate-float">
      <Button
        onClick={onClick}
        size="lg"
        className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 shadow-2xl hover:shadow-primary/50 transition-all group rounded-full px-6 py-6"
      >
        <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Get Free Audit</span>
      </Button>
    </div>
  );
};
