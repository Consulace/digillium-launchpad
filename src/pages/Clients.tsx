import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Building2 } from "lucide-react";

// Placeholder client logos - these would be replaced with actual logos
const clients = [
  { name: "TechCorp", industry: "Technology" },
  { name: "FinanceHub", industry: "BFSI" },
  { name: "CloudSoft", industry: "SaaS" },
  { name: "BuildMax", industry: "Manufacturing" },
  { name: "PropElite", industry: "Real Estate" },
  { name: "DataFlow", industry: "Technology" },
  { name: "SecureNet", industry: "Enterprise" },
  { name: "GrowthLabs", industry: "SaaS" },
  { name: "InnovateCo", industry: "Technology" },
  { name: "MetroBank", industry: "BFSI" },
  { name: "SmartBuild", industry: "Manufacturing" },
  { name: "NextGen", industry: "Enterprise" },
];

const Clients = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Clients"
        subtitle="Trusted by leading organizations across industries"
      />

      <section className="section-padding bg-card">
        <div className="container-wide">
          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 rounded-2xl bg-gradient-brand-soft border border-border/50 animate-fade-in-up">
              <div className="text-4xl font-display font-bold text-gradient-brand mb-2">50+</div>
              <p className="text-muted-foreground">Enterprise Clients</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-brand-soft border border-border/50 animate-fade-in-up delay-100">
              <div className="text-4xl font-display font-bold text-gradient-brand mb-2">6+</div>
              <p className="text-muted-foreground">Industries Served</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-brand-soft border border-border/50 animate-fade-in-up delay-200">
              <div className="text-4xl font-display font-bold text-gradient-brand mb-2">500+</div>
              <p className="text-muted-foreground">Campaigns Delivered</p>
            </div>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="group aspect-[4/3] flex flex-col items-center justify-center p-6 rounded-xl bg-background border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                  <Building2 className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="font-semibold text-foreground text-sm text-center">{client.name}</span>
                <span className="text-xs text-muted-foreground">{client.industry}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-muted-foreground mb-4">
              Client logos will be displayed here. Upload your client logos to showcase your partnerships.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
