import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Share2, DollarSign, Search, FileText, TrendingUp, Settings } from "lucide-react";
import socialMedia from "@/assets/social-media.jpg";

const offerings = [
  {
    icon: DollarSign,
    title: "Paid Campaigns",
    description: "Strategic paid social advertising across LinkedIn, Facebook, Instagram, and emerging platforms.",
  },
  {
    icon: Share2,
    title: "Organic Social",
    description: "Consistent, engaging content that builds community and strengthens brand presence.",
  },
  {
    icon: Search,
    title: "SEO & Content",
    description: "Search-optimized content strategies that improve discoverability and drive organic traffic.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description: "Editorial calendars, content pillars, and messaging frameworks aligned to business objectives.",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Comprehensive tracking and reporting with actionable insights for continuous improvement.",
  },
  {
    icon: Settings,
    title: "Platform Optimization",
    description: "Profile optimization, A/B testing, and ongoing refinement for maximum engagement and reach.",
  },
];

const SocialMediaMarketing = () => {
  return (
    <Layout>
      <PageHeader
        title="Social Media Marketing"
        subtitle="Strategic social presence that drives business results"
      />

      <section className="section-padding bg-card">
        <div className="container-wide">
          {/* Intro */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in-up">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Beyond Likes and Shares
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Social media is more than a brand awareness channel — when executed strategically, it becomes a powerful driver of demand, engagement, and business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our social media marketing combines paid precision with organic authenticity, backed by data-driven optimization to ensure every post, ad, and campaign contributes to your bottom line.
              </p>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={socialMedia}
                  alt="Social media marketing"
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

export default SocialMediaMarketing;
