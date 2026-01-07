import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhoWeAre from "./pages/about/WhoWeAre";
import WhyUs from "./pages/about/WhyUs";
import FAQs from "./pages/about/FAQs";
import InPersonEngagement from "./pages/services/InPersonEngagement";
import DemandGeneration from "./pages/services/DemandGeneration";
import LeadGeneration from "./pages/services/LeadGeneration";
import AccountBasedMarketing from "./pages/services/AccountBasedMarketing";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import MerchandiseGifting from "./pages/services/MerchandiseGifting";
import Clients from "./pages/Clients";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* About */}
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/why-us" element={<WhyUs />} />
          <Route path="/about/faqs" element={<FAQs />} />

          {/* Services */}
          <Route path="/services/in-person-engagement" element={<InPersonEngagement />} />
          <Route path="/services/demand-generation" element={<DemandGeneration />} />
          <Route path="/services/lead-generation" element={<LeadGeneration />} />
          <Route path="/services/account-based-marketing" element={<AccountBasedMarketing />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/merchandise-gifting" element={<MerchandiseGifting />} />

          {/* Other Pages */}
          <Route path="/clients" element={<Clients />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
