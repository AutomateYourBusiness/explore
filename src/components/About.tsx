import { Target, Users, Globe } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our Vision:{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                AI for Every Business
              </span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Main message */}
            <div className="md:col-span-2 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                AYB is built by innovators passionate about making AI accessible to Filipino entrepreneurs.
                We believe AI isn't here to replace people — it's here to elevate them.
              </p>
              <p className="text-lg text-foreground font-semibold">
                Our goal is to make the Philippines a center of AI-powered business transformation.
              </p>
            </div>

            {/* Value cards */}
            <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                Empower businesses with intelligent automation that drives growth and efficiency.
              </p>
            </div>

            <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Our Approach</h3>
              <p className="text-muted-foreground">
                Custom AI solutions tailored to your unique business needs and workflows.
              </p>
            </div>

            <div className="group md:col-span-2 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Based in the Philippines</h3>
              <p className="text-muted-foreground">
                Proud to be a Filipino company bringing world-class AI automation to businesses across Southeast Asia and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
