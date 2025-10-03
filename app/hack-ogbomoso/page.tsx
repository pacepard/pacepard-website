import CommunitySection from "@/components/content-6";
import AboutUs from "@/components/hack/sections/about-us";
import CallToAction from "@/components/hack/sections/cta";
import FAQs from "@/components/hack/sections/faq";
import Footer from "@/components/pacepard/sections/footer";
import HeroSection from "@/components/pacepard/sections/hero-section";
import MentorSection from "@/components/hack/sections/mentors";
import { Header } from "@/components/shared/header";

const HackOgbomoso = () => {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-green text-foreground">
      
      <Header />
      <HeroSection />
      <AboutUs />
      <MentorSection />
      <CallToAction />
      <FAQs />
      <CommunitySection />
      <Footer />
      
    </main>
  );
};

export default HackOgbomoso;
