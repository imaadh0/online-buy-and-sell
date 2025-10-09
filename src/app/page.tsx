import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";
import GetStartedSection from "@/components/GetStartedSection";
import BrandStrip from "@/components/BrandStrip";
import HowCanWeHelpSection from "@/components/HowCanWeHelpSection";
import OurMissionSection from "@/components/OurMissionSection";
import TestimonialsSection from "@/components/TestimonialsSection";

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
      <ContactSection />
      <GetStartedSection />
    </div>
  );
}
