import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Target, Database, Video, Layers, Settings, BarChart3 } from "lucide-react";
import analytics from "@/assets/analytics.jpg";

const offerings = [
  {
    icon: Target,
    title: "Targeted Outreach",
    description: "Precision-targeted campaigns that reach decision-makers at the right time with the right message.",
  },
  {
    icon: Database,
    title: "Account Insights",
    description: "Deep intelligence on target accounts to personalize engagement and improve conversion.",
  },
  {
    icon: Video,
    title: "Webinars & Virtual Events",
    description: "Engaging digital experiences that educate, nurture, and move prospects through the funnel.",
  },
  {
    icon: Layers,
    title: "Omnichannel Engagement",
    description: "Coordinated campaigns across email, social, display, and direct channels for maximum impact.",
  },
  {
    icon: Settings,
    title: "Database Management",
    description: "Clean, enriched, and segmented data foundations that power effective demand generation.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Real-time reporting and optimization to continuously improve campaign effectiveness.",
  },
];

const DemandGeneration = () => {
  return (
    <Layout>
      <PageHeader
        title="Demand Generation"
        subtitle="Building awareness and interest that converts to pipeline"
      />

      <section className="section-padding bg-card">
        <div className="container-wide">
          {/* Intro */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in-up">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Create Demand, Drive Pipeline
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Effective demand generation goes beyond lead capture — it builds awareness, educates the market, and creates genuine interest in your solutions among the right audience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our data-driven approach combines strategic targeting, compelling content, and omnichannel execution to generate qualified demand that sales teams can convert.
              </p>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={analytics}
                  alt="Data analytics"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Offerings Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={offering.title}
                className="p-8 rounded-2xl bg-gradient-brand-soft border border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="service-icon mb-6">
                  <offering.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {offering.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DemandGeneration;
