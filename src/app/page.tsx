import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BrandStrip from "@/components/BrandStrip";
import HowCanWeHelpSection from "@/components/HowCanWeHelpSection";
import OurMissionSection from "@/components/OurMissionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E9E9E9]">
      <Navigation />
      <HeroSection />
      <BrandStrip />
      <HowCanWeHelpSection />
      <HowItWorksSection />
      <OurMissionSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
