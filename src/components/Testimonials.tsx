import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "AYB automated our sales follow-ups — now we close more deals with zero manual work.",
    author: "Maria Santos",
    role: "E-commerce Owner",
    company: "TrendyShop PH",
  },
  {
    quote: "They built a complete AI workflow for our team. It's like having a 24/7 employee.",
    author: "John Reyes",
    role: "Marketing Director",
    company: "GrowthCo",
  },
  {
    quote: "The automation freed up 20 hours per week. We can finally focus on growing our business.",
    author: "Lisa Chen",
    role: "Operations Manager",
    company: "SmartRetail",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.05)_0%,transparent_65%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Forward-Thinking Businesses
              </span>
            </h2>
          </div>

          {/* Testimonial Slider */}
          <div className="relative">
            <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 md:p-12 shadow-2xl shadow-primary/10">
              <div className="relative">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-2 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center opacity-20">
                  <Quote className="h-6 w-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary" />
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
