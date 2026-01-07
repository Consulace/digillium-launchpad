import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Building2, Users, Handshake, BarChart3, Target, Zap } from "lucide-react";
import strategy from "@/assets/strategy.jpg";

const offerings = [
  {
    icon: Building2,
    title: "Account Insights",
    description: "Deep research and intelligence on target accounts — understanding their challenges, priorities, and decision-making dynamics.",
  },
  {
    icon: Users,
    title: "CXO Connect",
    description: "Strategies and campaigns designed to reach and engage C-level executives with relevant, high-value messaging.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description: "Facilitating introductions and building relationships that open doors to key accounts.",
  },
  {
    icon: BarChart3,
    title: "Engagement Analytics",
    description: "Comprehensive tracking of account-level engagement to measure progress and optimize tactics.",
  },
  {
    icon: Target,
    title: "Personalized Campaigns",
    description: "1:1 or 1:few campaigns with messaging and content tailored to specific accounts and stakeholders.",
  },
  {
    icon: Zap,
    title: "Sales Enablement",
    description: "Equipping sales teams with account intelligence, content, and playbooks for effective conversations.",
  },
];

const AccountBasedMarketing = () => {
  return (
    <Layout>
      <PageHeader
        title="Account-Based Marketing"
        subtitle="Targeted strategies for high-value accounts"
      />

      <section className="section-padding bg-card">
        <div className="container-wide">
          {/* Intro */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in-up">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Focused Engagement, Maximum Impact
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Account-Based Marketing flips traditional marketing on its head — instead of casting a wide net, we focus resources on the accounts that matter most to your business.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our ABM approach combines deep account intelligence, personalized engagement, and tight sales-marketing alignment to accelerate pipeline within your target account list.
              </p>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={strategy}
                  alt="Strategic planning"
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

export default AccountBasedMarketing;
