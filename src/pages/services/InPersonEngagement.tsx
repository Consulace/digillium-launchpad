import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Calendar, Users, Award, Sparkles, Handshake, PartyPopper } from "lucide-react";
import boardroom from "@/assets/boardroom.jpg";

const offerings = [
  {
    icon: Calendar,
    title: "Product & Brand Launches",
    description: "Create memorable launch experiences that generate buzz and drive market adoption.",
  },
  {
    icon: Users,
    title: "Corporate Events",
    description: "Full-service event management from concept to execution and post-event analysis.",
  },
  {
    icon: Award,
    title: "Exhibitions & Trade Shows",
    description: "Stand design, logistics, and engagement strategies that maximize your presence.",
  },
  {
    icon: Sparkles,
    title: "Round Tables & Summits",
    description: "Curated thought leadership gatherings that position your brand as an industry leader.",
  },
  {
    icon: PartyPopper,
    title: "Experiential Marketing",
    description: "Immersive brand experiences that create lasting emotional connections.",
  },
  {
    icon: Handshake,
    title: "Partner Events",
    description: "Co-branded initiatives that strengthen ecosystem relationships and expand reach.",
  },
];

const InPersonEngagement = () => {
  return (
    <Layout>
      <PageHeader
        title="In-Person Engagement"
        subtitle="Creating impactful face-to-face experiences that drive results"
      />

      <section className="section-padding bg-card">
        <div className="container-wide">
          {/* Intro */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in-up">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Memorable Experiences, Measurable Impact
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In-person engagements remain one of the most powerful ways to build relationships, demonstrate value, and accelerate business outcomes. We design and execute events that leave lasting impressions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From intimate executive roundtables to large-scale exhibitions, our team handles every detail — ensuring your brand shines and your objectives are met.
              </p>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={boardroom}
                  alt="Corporate event"
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

export default InPersonEngagement;
