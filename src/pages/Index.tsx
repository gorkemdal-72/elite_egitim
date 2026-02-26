import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CitiesSection from "@/components/CitiesSection";
import UniversitiesSection from "@/components/UniversitiesSection";
import TuitionSection from "@/components/TuitionSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CitiesSection />
      <UniversitiesSection />
      <TuitionSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
