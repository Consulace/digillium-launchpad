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
            {/* Job Opening */}
            <div className="p-8 rounded-2xl bg-gradient-brand-soft border border-border/50 mb-16 animate-fade-in-up text-left">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-1">
                    Telecaller
                  </h2>
                  <p className="text-sm text-muted-foreground">Full-time · On-site · Bangalore</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Job Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This is a full-time on-site role for an Inside Sales Representative at Digillium in Bangalore. The Inside Sales Representative will be responsible for customer satisfaction, lead generation, account management, and providing excellent customer service on a day-to-day basis.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Qualifications</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Inside Sales and Lead Generation skills
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Customer Satisfaction and Customer Service skills
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Experience in Account Management
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Strong communication and interpersonal skills
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Results-oriented and target-driven mindset
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Ability to work well in a team environment
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Previous experience in a sales role is a plus
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Bachelor's degree in engineering or related field
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground">
                    Send your resume and portfolio to{" "}
                    <a href="mailto:abcde@digillium.in" className="text-primary font-medium hover:underline">
                      abcde@digillium.in
                    </a>
                  </p>
                </div>
              </div>
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
