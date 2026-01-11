import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Target, Database, Video, Layers, Settings, BarChart3 } from "lucide-react";
import analytics from "@/assets/analytics.jpg";

const offerings = [
  {
    icon: Target,
    title: "Targeted Outreach",
    description: "Precision outreach programs designed to engage verified decision-makers across compliant channels, ensuring the right message reaches the right audience responsibly.",
  },
  {
    icon: Database,
    title: "Account Insights",
    description: "Structured intelligence on target accounts that informs segmentation, personalization, and activation — backed by compliant data practices and secure enrichment workflows.",
  },
  {
    icon: Video,
    title: "Webinars & Virtual Events",
    description: "High-impact digital events that educate, nurture, and accelerate pipeline conversions while respecting communication consent and audience privacy preferences.",
  },
  {
    icon: Layers,
    title: "Omnichannel Engagement",
    description: "Integrated campaigns deployed across email, social, paid media, and direct channels for consistent brand experiences with governance over data usage and opt-in management.",
  },
  {
    icon: Settings,
    title: "Database Management",
    description: "Clean, validated, and compliant data foundations that enable accurate targeting and segmentation. Includes enrichment, deduplication, and secure handling of customer and prospect data.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Real-time pipeline insights and campaign analytics that optimize performance, attribution, and ROI — supported by transparent reporting and privacy-aligned measurement models.",
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
