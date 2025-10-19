import { Bot, Zap, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Intelligence",
    description: "Custom AI agents that learn and adapt to your business needs",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Automate tasks that used to take hours into seconds",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Your business never sleeps with automated systems",
  },
  {
    icon: TrendingUp,
    title: "Scale Effortlessly",
    description: "Grow without increasing overhead or manual work",
  },
];

export const WhyChoose = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Smarter Systems.
              </span>
              {" "}
              <span className="text-foreground">Faster Growth.</span>
              {" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Zero Repetition.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              AYB (Automate Your Business) creates custom AI automation systems that eliminate repetitive work, 
              increase efficiency, and supercharge your operations. We integrate your favorite tools — 
              like GoHighLevel, n8n, and Google Sheets — into a single seamless system powered by AI agents.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
