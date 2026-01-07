import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Factory, Palette, Gift, Leaf, Package, CheckCircle } from "lucide-react";
import handshake from "@/assets/handshake.jpg";

const offerings = [
  {
    icon: Factory,
    title: "In-House Production",
    description: "End-to-end manufacturing capabilities for consistent quality and faster turnaround times.",
  },
  {
    icon: Palette,
    title: "Branding & Customization",
    description: "Expert design and branding services to ensure merchandise perfectly represents your brand.",
  },
  {
    icon: Gift,
    title: "Premium Gifting",
    description: "Curated luxury gift solutions for executive gifting, client appreciation, and special occasions.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description: "Sustainable merchandise options that align with environmental responsibility goals.",
  },
  {
    icon: Package,
    title: "Bulk Inventory",
    description: "Scalable production and warehousing solutions for large-volume requirements.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous quality checks at every stage to ensure your brand is represented impeccably.",
  },
];

const MerchandiseGifting = () => {
  return (
    <Layout>
      <PageHeader
        title="Merchandise & Gifting"
        subtitle="Premium branded merchandise that makes lasting impressions"
      />

      <section className="section-padding bg-card">
        <div className="container-wide">
          {/* Intro */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in-up">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Tangible Brand Experiences
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In an increasingly digital world, physical merchandise and thoughtful gifting create memorable touchpoints that strengthen relationships and reinforce brand presence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From corporate swag to executive gifts, our in-house production capabilities and design expertise ensure every item reflects your brand's quality and values.
              </p>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={handshake}
                  alt="Business partnership"
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

export default MerchandiseGifting;
