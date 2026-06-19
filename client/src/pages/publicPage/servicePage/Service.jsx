import PageBanner from '../../../components/abouts/pageBanner/PageBanner';
import ServicesGrid from '../../../components/services/servicesGrid/ServicesGrid';
import ProcessSection from '../../../components/services/processSection/ProcessSection';
import FaqSection from '../../../components/services/faqsection/FaqSection';
import HeroSection from '../../../components/common/hero/HeroSection';
import serviceHeroImage from '../../../assets/images/service-hero.png'

const ServicesPage = () => {
  return (
    <>
   <HeroSection
        badge="What I Do"
        title="My"
        gradientText="Services"
        subtitle="I offer professional web development, UI/UX design, and consulting to help your business grow."
        btnPrimaryText="See Pricing"
        btnPrimaryLink="/pricing"
        btnSecondaryText="Contact Me"
        btnSecondaryLink="/contact"
        imageSrc={serviceHeroImage}
        imageAlt="Services illustration"
      />
      <PageBanner 
        title="My Services" 
        subtitle="What I can do for you"
      />
      <ServicesGrid />
      <ProcessSection />
      <FaqSection />
    </>
  );
};

export default ServicesPage;