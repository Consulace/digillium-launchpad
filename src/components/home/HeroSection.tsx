import { useEffect, useState } from "react";
import teamMeeting from "@/assets/team-meeting.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gradient-hero min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Creative excellence meets{" "}
              <span className="text-gradient-brand">guaranteed*</span> results.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              High-impact marketing solutions designed to deliver measurable business outcomes.
            </p>
          </div>

          {/* Visual */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={teamMeeting}
                  alt="Digillium team collaboration"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-5 border border-border">
                <div className="text-3xl font-display font-bold text-gradient-brand">500+</div>
                <div className="text-sm text-muted-foreground">Campaigns Delivered</div>
              </div>

              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-brand rounded-2xl opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
