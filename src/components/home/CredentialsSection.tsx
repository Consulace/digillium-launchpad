import { TrendingUp, Target, Award, Users } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "95%",
    label: "Campaign Success Rate",
    description: "Delivering performance far above industry benchmarks through data-driven strategy and execution.",
  },
  {
    icon: Target,
    value: "3x",
    label: "Return on Investment",
    description: "Proven return on every penny invested — from pipeline creation to closed revenue.",
  },
  {
    icon: Award,
    value: "50+",
    label: "Enterprise & Fortune 1000 Clients",
    description: "Trusted by global leaders across diverse industries and buying groups.",
  },
  {
    icon: Users,
    value: "30+",
    label: "Strategy-Led Marketing Expertise",
    description: "Cross-functional specialists across the B2B growth and revenue funnel.",
  },
];

const CredentialsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Results That Speak
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our track record demonstrates strategic execution and measurable impact across industries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-gradient-brand-soft border border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="service-icon mx-auto mb-6">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-4xl font-display font-bold text-gradient-brand mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-2">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
