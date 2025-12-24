import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSlider } from "@/components/ProjectsSlider";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ClientsSection } from "@/components/ClientsSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Index = () => {
  useScrollToTop();
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSlider />
      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <ClientsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
