import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";

// Import client logos
import affinidiLogo from "@/assets/clients/affinidi.png";
import arkanceLogo from "@/assets/clients/arkance.png";
import beenextLogo from "@/assets/clients/beenext.png";
import capitalandLogo from "@/assets/clients/capitaland.png";
import chamborLogo from "@/assets/clients/chambor.png";
import hpLogo from "@/assets/clients/hp.png";
import jpmorganLogo from "@/assets/clients/jpmorgan.png";
import karixLogo from "@/assets/clients/karix.png";
import microgenesisLogo from "@/assets/clients/microgenesis.png";
import nemetschekLogo from "@/assets/clients/nemetschek.png";
import penguinLogo from "@/assets/clients/penguin-solutions.png";
import tanlaLogo from "@/assets/clients/tanla.png";
import unityLogo from "@/assets/clients/unity.png";
import veeamLogo from "@/assets/clients/veeam.png";

const clients = [
  { name: "Affinidi", logo: affinidiLogo },
  { name: "Arkance", logo: arkanceLogo },
  { name: "Beenext", logo: beenextLogo },
  { name: "CapitaLand", logo: capitalandLogo },
  { name: "Chambor", logo: chamborLogo },
  { name: "HP", logo: hpLogo },
  { name: "JPMorgan Chase", logo: jpmorganLogo },
  { name: "Karix", logo: karixLogo },
  { name: "Microgenesis", logo: microgenesisLogo },
  { name: "Nemetschek Group", logo: nemetschekLogo },
  { name: "Penguin Solutions", logo: penguinLogo },
  { name: "Tanla", logo: tanlaLogo },
  { name: "Unity", logo: unityLogo },
  { name: "Veeam", logo: veeamLogo },
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
              <p className="text-muted-foreground">Fortune 1000 Enterprise Clients</p>
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
                  className="max-w-full max-h-full object-contain"
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
