import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Link } from "react-router-dom";
import { Briefcase, Users, TrendingUp, Heart } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented professionals who are passionate about marketing excellence.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement in a fast-paced environment.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible policies that support your personal and professional well-being.",
  },
];

const Jobs = () => {
  return (
    <Layout>
      <PageHeader
        title="Careers at Digillium"
        subtitle="Join our team of marketing excellence"
      />

      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            {/* No Openings Message */}
            <div className="p-12 rounded-2xl bg-gradient-brand-soft border border-border/50 mb-16 animate-fade-in-up">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                No Open Positions Currently
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We currently do not have open positions. However, we're always interested in connecting with talented individuals who share our passion for marketing excellence.
              </p>
              <p className="text-muted-foreground">
                Please check back later or{" "}
                <Link to="/contact" className="text-primary font-medium hover:underline">
                  reach out via our contact page
                </Link>{" "}
                to introduce yourself.
              </p>
            </div>

            {/* Why Join Us */}
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Why Join Digillium?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="p-6 rounded-xl bg-background border border-border animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="service-icon mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Jobs;
