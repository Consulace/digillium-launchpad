import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";

// Import client logos
import affinidiLogo from "@/assets/clients/affinidi.png";
import arkanceLogo from "@/assets/clients/arkance.png";
import autodeskLogo from "@/assets/clients/autodesk.png";
import baccaroseLogo from "@/assets/clients/baccarose.png";
import beenextLogo from "@/assets/clients/beenext.png";
import bentleyLogo from "@/assets/clients/bentley.png";
import broadcomLogo from "@/assets/clients/broadcom.png";
import capitalandLogo from "@/assets/clients/capitaland.png";
import chamborLogo from "@/assets/clients/chambor.png";
import ciiLogo from "@/assets/clients/cii.png";

const clients = [
  { name: "Affinidi", logo: affinidiLogo },
  { name: "Arkance", logo: arkanceLogo },
  { name: "Autodesk", logo: autodeskLogo },
  { name: "Baccarose", logo: baccaroseLogo },
  { name: "Beenext", logo: beenextLogo },
  { name: "Bentley", logo: bentleyLogo },
  { name: "Broadcom", logo: broadcomLogo },
  { name: "CapitaLand", logo: capitalandLogo },
  { name: "Chambor", logo: chamborLogo },
  { name: "Confederation of Indian Industry", logo: ciiLogo },
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="group aspect-[3/2] flex items-center justify-center p-6 rounded-xl bg-background border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
