import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CredentialsSection from "@/components/home/CredentialsSection";
import PainPointsSection from "@/components/home/PainPointsSection";
import ServicesSection from "@/components/home/ServicesSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CredentialsSection />
      <PainPointsSection />
      <ServicesSection />
    </Layout>
  );
};

export default Index;
