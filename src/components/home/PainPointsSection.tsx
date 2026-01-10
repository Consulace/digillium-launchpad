import { BarChart3, Clock, CircleDollarSign } from "lucide-react";

const painPoints = [
  {
    icon: BarChart3,
    title: "Measurable Campaign Results",
    description:
      "Every initiative aligned to defined KPIs. We don't just deliver activities — we deliver outcomes you can measure and report on.",
  },
  {
    icon: Clock,
    title: "Stop Chasing Agencies",
    description:
      "No more precious time lost following up. Our single-point ownership means you get transparency, accountability, and results on time, Everytime.",
  },
  {
    icon: CircleDollarSign,
    title: "Maximize ROI with Accountability",
    description:
      "Your budget deserves performance. We take responsibility for outcomes, not just outputs — ensuring every dollar works harder.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-gradient-hero">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Solve Real Problems
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Marketing challenges that keep CXOs up at night — we address them head-on.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className="bg-card rounded-2xl p-8 border border-border shadow-lg card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="service-icon mb-6">
                <point.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
