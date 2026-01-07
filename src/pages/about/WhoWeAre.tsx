import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const WhoWeAre = () => {
  return (
    <Layout>
      <PageHeader
        title="Who We Are"
        subtitle="A team of business-focused, strategy-led marketing professionals"
      />

      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="animate-fade-in-up">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                We're a team of <span className="font-semibold text-gradient-brand">30+ business-focused, strategy-led, and results-driven</span> marketing professionals committed to the principles of creative excellence.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Digillium, we transform business objectives into new-age marketing solutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We do this by combining our expertise in emerging technologies such as <span className="font-medium text-foreground">Artificial Intelligence</span> and <span className="font-medium text-foreground">Machine Learning</span>, a deep understanding of today's business needs, and strong data analysis capabilities to drive meaningful, measurable outcomes.
              </p>

              {/* Key Highlights */}
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-brand-soft border border-border/50">
                  <div className="text-3xl font-display font-bold text-gradient-brand mb-2">AI-Powered</div>
                  <p className="text-sm text-muted-foreground">Leveraging emerging technologies</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-brand-soft border border-border/50">
                  <div className="text-3xl font-display font-bold text-gradient-brand mb-2">Data-Driven</div>
                  <p className="text-sm text-muted-foreground">Strong analytics capabilities</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="animate-fade-in-up delay-200">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={teamCollaboration}
                    alt="Digillium team at work"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-brand rounded-2xl opacity-20 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;
