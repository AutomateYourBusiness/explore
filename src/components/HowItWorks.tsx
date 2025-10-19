import { Search, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Free Audit",
    description: "We assess your current workflow and find automation opportunities.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Custom System Build",
    description: "We create tailored AI systems designed for your needs.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Support",
    description: "We deploy your system and maintain it for optimal performance.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              From Audit to Automation in{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                3 Smart Steps
              </span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-20" />
            
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Step number */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0">
                    <span className="text-6xl font-bold bg-gradient-to-br from-primary/20 to-secondary/20 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>

                  <div className="relative bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 group-hover:-translate-y-2 mt-12">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10 space-y-4">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <step.icon className="h-8 w-8 text-primary-foreground" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow connector for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-8 -translate-y-1/2">
                        <svg className="w-16 h-8 text-primary/30" fill="none" viewBox="0 0 64 32">
                          <path d="M0 16 L50 16 M50 16 L42 8 M50 16 L42 24" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
