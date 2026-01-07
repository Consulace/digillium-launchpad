import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

interface DropdownItem {
  label: string;
  path: string;
}

interface NavItem {
  label: string;
  path?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "About",
    dropdown: [
      { label: "Who We Are", path: "/about/who-we-are" },
      { label: "Why Us", path: "/about/why-us" },
      { label: "FAQs", path: "/about/faqs" },
    ],
  },
  {
    label: "Services",
    dropdown: [
      { label: "In-Person Engagement", path: "/services/in-person-engagement" },
      { label: "Demand Generation", path: "/services/demand-generation" },
      { label: "Lead Generation", path: "/services/lead-generation" },
      { label: "Account-Based Marketing", path: "/services/account-based-marketing" },
      { label: "Social Media Marketing", path: "/services/social-media-marketing" },
      { label: "Merchandise & Gifting", path: "/services/merchandise-gifting" },
    ],
  },
  { label: "Clients", path: "/clients" },
  { label: "Jobs", path: "/jobs" },
  { label: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  const isActive = (item: NavItem): boolean => {
    if (item.path) {
      return location.pathname === item.path;
    }
    if (item.dropdown) {
      return item.dropdown.some((d) => location.pathname === d.path);
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Digillium" className="h-10 w-auto" />
            <span className="font-display font-bold text-xl text-foreground">
              Digillium
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                      isActive(item)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {isActive(item) && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 nav-active-gradient rounded-full" />
                    )}
                  </Link>
                ) : (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors relative ${
                      isActive(item)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                    {isActive(item) && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 nav-active-gradient rounded-full" />
                    )}
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 animate-slide-down">
                    <div className="bg-card rounded-xl shadow-xl border border-border py-2 min-w-[220px]">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            location.pathname === dropdownItem.path
                              ? "text-primary bg-primary/5"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="container-wide py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`block py-3 text-sm font-medium ${
                      isActive(item) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.label ? null : item.label
                        )
                      }
                      className={`flex items-center justify-between w-full py-3 text-sm font-medium ${
                        isActive(item) ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileDropdown === item.label && item.dropdown && (
                      <div className="pl-4 pb-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className={`block py-2 text-sm ${
                              location.pathname === dropdownItem.path
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
