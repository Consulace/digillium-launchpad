import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Digillium" className="h-10 w-auto" />
              <span className="font-display font-bold text-xl">Digillium</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Creative excellence meets guaranteed results. High-impact marketing solutions designed for measurable business outcomes.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about/who-we-are" className="text-background/70 hover:text-background text-sm transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/about/why-us" className="text-background/70 hover:text-background text-sm transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-background/70 hover:text-background text-sm transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-background/70 hover:text-background text-sm transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/in-person-engagement" className="text-background/70 hover:text-background text-sm transition-colors">
                  In-Person Engagement
                </Link>
              </li>
              <li>
                <Link to="/services/demand-generation" className="text-background/70 hover:text-background text-sm transition-colors">
                  Demand Generation
                </Link>
              </li>
              <li>
                <Link to="/services/lead-generation" className="text-background/70 hover:text-background text-sm transition-colors">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link to="/services/account-based-marketing" className="text-background/70 hover:text-background text-sm transition-colors">
                  Account-Based Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/social-media-marketing" className="text-background/70 hover:text-background text-sm transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/merchandise-gifting" className="text-background/70 hover:text-background text-sm transition-colors">
                  Merchandise & Gifting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>contact@digillium.in</li>
              <li>+91 93530 29772</li>
              <li>
                2nd Floor, 35/5 Langford Road,<br />
                Shanti Nagar, Bengaluru Urban,<br />
                Karnataka, 560001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Digillium — All Rights Reserved
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link to="/about/faqs" className="hover:text-background transition-colors">
              FAQs
            </Link>
            <Link to="/contact" className="hover:text-background transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
