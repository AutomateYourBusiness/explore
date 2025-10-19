import { MessageSquare, Workflow, ShoppingCart, BarChart3, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

const systems = [
  {
    icon: MessageSquare,
    name: "AYB Engage",
    description: "Automates lead capture, follow-ups, and conversions using AI chat and voice agents.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Workflow,
    name: "AYB Flow",
    description: "Streamlines marketing operations and campaign management for higher engagement.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShoppingCart,
    name: "AYB Sync",
    description: "Manages e-commerce processes: order confirmations, inventory, and customer support.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: BarChart3,
    name: "AYB Insight",
    description: "Auto-generates sales reports and analytics dashboards for data-driven growth.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Settings,
    name: "AYB Care",
    description: "Ongoing automation maintenance and optimization for lasting results.",
    color: "from-indigo-500 to-blue-500",
  },
];

export const CoreSystems = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Core Systems
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful AI automation systems designed to transform every aspect of your business
            </p>
          </div>

          {/* Systems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((system, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity p-[2px] rounded-lg">
                  <div className="w-full h-full bg-card rounded-lg" />
                </div>

                <div className="relative z-10 p-8 space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${system.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <system.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {system.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {system.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-all">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
