import CommunitySection from "@/src/components/content-6";
import AboutUs from "@/src/components/sections/about-us";
import CallToAction from "@/src/components/sections/cta";
import FAQs from "@/src/components/sections/faq";
import Footer from "@/src/components/sections/footer";
import HeroSection from "@/src/components/sections/hero-section";
import MentorSection from "@/src/components/sections/mentors";


const HackOgbomoso =() =>{
  return (
    <main className="min-h-screen w-full overflow-hidden bg-green text-foreground">


      <HeroSection/>
      <AboutUs/>
       <MentorSection />
       <CallToAction />
       <FAQs/>
       <CommunitySection/>
       <Footer/>


    </main>
  );
}

export default HackOgbomoso;
