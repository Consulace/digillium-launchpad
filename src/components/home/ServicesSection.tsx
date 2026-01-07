import { Link } from "react-router-dom";
import {
  Users,
  Megaphone,
  UserPlus,
  Target,
  Share2,
  Gift,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "In-Person Engagement",
    description: "Launches, events, exhibitions & experiential marketing",
    path: "/services/in-person-engagement",
  },
  {
    icon: Megaphone,
    title: "Demand Generation",
    description: "Targeted outreach & omnichannel engagement",
    path: "/services/demand-generation",
  },
  {
    icon: UserPlus,
    title: "Lead Generation",
    description: "Prospect identification to qualified handover",
    path: "/services/lead-generation",
  },
  {
    icon: Target,
    title: "Account-Based Marketing",
    description: "CXO connect & strategic account engagement",
    path: "/services/account-based-marketing",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Paid, organic, SEO & performance optimization",
    path: "/services/social-media-marketing",
  },
  {
    icon: Gift,
    title: "Merchandise & Gifting",
    description: "Premium branding & eco-friendly solutions",
    path: "/services/merchandise-gifting",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive marketing solutions tailored to deliver measurable business outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.path}
              to={service.path}
              className="service-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="service-icon mb-6">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
