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

      {/* Leadership Team Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries driving our mission forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CEO Card */}
            <div className="bg-card rounded-2xl border border-border p-8 animate-fade-in-up">
              <div className="flex flex-col items-center text-center">
                {/* Photo Placeholder */}
                <div className="w-40 h-52 rounded-xl bg-gradient-brand-soft border border-border/50 flex items-center justify-center mb-6 overflow-hidden">
                  <div className="text-muted-foreground text-sm">Photo</div>
                </div>
                
                {/* Name */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                  Balaji Kesavaraj
                </h3>
                
                {/* Title */}
                <p className="text-sm font-medium text-gradient-brand mb-4">
                  Chief Executive Officer
                </p>
                
                {/* Bio */}
                <p className="text-muted-foreground leading-relaxed">
                  A visionary marketing and business leader with over two decades of experience in global technology enterprises. Passionate about building high-impact teams, driving revenue innovation, and scaling enterprise growth across markets. Known for leading strategic initiatives at Microsoft, Autodesk, Cisco, and Tanla, and for championing ABM-led expansion for modern enterprises.
                </p>
              </div>
            </div>

            {/* Director Card */}
            <div className="bg-card rounded-2xl border border-border p-8 animate-fade-in-up delay-100">
              <div className="flex flex-col items-center text-center">
                {/* Photo Placeholder */}
                <div className="w-40 h-52 rounded-xl bg-gradient-brand-soft border border-border/50 flex items-center justify-center mb-6 overflow-hidden">
                  <div className="text-muted-foreground text-sm">Photo</div>
                </div>
                
                {/* Name */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                  [Director Name]
                </h3>
                
                {/* Title */}
                <p className="text-sm font-medium text-gradient-brand mb-4">
                  Director
                </p>
                
                {/* Bio */}
                <p className="text-muted-foreground leading-relaxed">
                  A strategic thinker with deep expertise in demand generation and client engagement. Committed to building lasting partnerships and achieving measurable business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;
