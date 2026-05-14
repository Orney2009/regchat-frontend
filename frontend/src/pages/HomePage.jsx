import HomeBenefitsSection from "../components/sections/home/HomeBenefitsSection";
import HomeCtaSection from "../components/sections/home/HomeCtaSection";
import HomeFooter from "../components/sections/home/HomeFooter";
import HomeHeroSection from "../components/sections/home/HomeHeroSection";
import HomeHowItWorksSection from "../components/sections/home/HomeHowItWorksSection";
import HomeTopNav from "../components/sections/home/HomeTopNav";

const HomePage = () => {
  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed text-left min-h-screen">
      <HomeTopNav />
      <main>
        <HomeHeroSection />
        <HomeBenefitsSection />
        <HomeHowItWorksSection />
        <HomeCtaSection />
      </main>
      <HomeFooter />
    </div>
  );
};

export default HomePage;
