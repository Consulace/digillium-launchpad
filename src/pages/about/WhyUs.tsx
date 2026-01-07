import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Strategy-First Execution",
    description: "Every campaign begins with clear business objectives and strategic alignment.",
  },
  {
    title: "Clear Ownership & Accountability",
    description: "Single point of contact with full responsibility for outcomes.",
  },
  {
    title: "Measurable Outcomes, Not Activities",
    description: "We focus on results you can report on — not just tasks completed.",
  },
  {
    title: "Enterprise & CXO-Focused Delivery",
    description: "Communication and reporting designed for executive decision-makers.",
  },
  {
    title: "Transparent Communication",
    description: "Regular updates, honest assessments, and proactive problem-solving.",
  },
  {
    title: "Scalable Execution Across Geographies",
    description: "Global reach with local expertise — we grow with your ambitions.",
  },
];

const WhyUs = () => {
  return (
    <Layout>
      <PageHeader
        title="Why Digillium"
        subtitle="What sets us apart in the marketing landscape"
      />

      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-8 mb-16">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex gap-4 p-6 rounded-xl bg-gradient-brand-soft border border-border/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing Statement */}
            <div className="text-center p-10 rounded-2xl bg-gradient-brand animate-fade-in-up delay-600">
              <p className="text-xl md:text-2xl font-display font-semibold text-primary-foreground">
                "We don't just execute campaigns — we take responsibility for results."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUs;
