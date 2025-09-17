import AboutUs from "@/components/sections/about-us";
import CallToAction from "@/components/sections/cta";
import FAQs from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import MentorSection from "@/components/sections/mentors";


const HackOgbomoso =() =>{
  return (
    <main className="min-h-screen w-full overflow-hidden bg-green text-foreground">


      <HeroSection/>
      <AboutUs/>
       <MentorSection />
       <CallToAction />
       <FAQs/>
       <Footer/>

    </main>
  );
}

export default HackOgbomoso;
