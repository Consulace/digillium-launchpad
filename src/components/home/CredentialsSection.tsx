import { TrendingUp, Target, Award, Users } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "95%",
    label: "Campaign Success Rate",
    description: "Consistently exceeding client expectations",
  },
  {
    icon: Target,
    value: "3x",
    label: "Average ROI",
    description: "Proven return on marketing investment",
  },
  {
    icon: Award,
    value: "50+",
    label: "Enterprise Clients",
    description: "Trusted by leading organizations",
  },
  {
    icon: Users,
    value: "30+",
    label: "Marketing Experts",
    description: "Dedicated strategy-led professionals",
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
