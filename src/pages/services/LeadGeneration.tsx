import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Search, Bell, MessageSquare, CheckCircle, ArrowRight, Users } from "lucide-react";
import partnership from "@/assets/partnership.jpg";

const stages = [
  {
    icon: Search,
    title: "Prospect Identification",
    description: "Using advanced data intelligence to identify and profile ideal prospects within your target market.",
  },
  {
    icon: Bell,
    title: "Awareness Creation",
    description: "Multi-touch campaigns that introduce your brand and establish relevance with target prospects.",
  },
  {
    icon: MessageSquare,
    title: "Response Nurturing",
    description: "Systematic follow-up and engagement sequences that build interest and qualify intent.",
  },
  {
    icon: CheckCircle,
    title: "Qualified Lead Handover",
    description: "Sales-ready leads delivered with complete context and engagement history for seamless conversion.",
  },
];

const LeadGeneration = () => {
  return (
    <Layout>
      <PageHeader
        title="Lead Generation"
        subtitle="From prospect identification to qualified opportunities"
      />

      <section className="section-padding bg-card">
        <div className="container-wide">
          {/* Intro */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in-up">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Quality Leads, Not Just Volume
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Lead generation is only valuable when leads convert. We focus on identifying, engaging, and qualifying prospects who are genuinely ready to have a conversation with your sales team.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our systematic approach ensures every lead handed over is properly nurtured, qualified, and documented — saving your sales team time and increasing conversion rates.
              </p>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={partnership}
                  alt="Business partnership"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Process Grid */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground text-center mb-12">
              Our Lead Generation Process
            </h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {stages.map((stage, index) => (
                <div
                  key={stage.title}
                  className="p-8 rounded-2xl bg-gradient-brand-soft border border-border/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <h4 className="font-display text-xl font-semibold text-foreground">
                      {stage.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LeadGeneration;
