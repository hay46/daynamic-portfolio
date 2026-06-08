import PageBanner from '../../../components/abouts/pageBanner/PageBanner';
import ServicesGrid from '../../../components/services/servicesGrid/ServicesGrid';
import ProcessSection from '../../../components/services/processSection/ProcessSection';
import FaqSection from '../../../components/services/faqsection/FaqSection';
import HeroSection from '../../../components/common/hero/HeroSection';

const ServicesPage = () => {
  return (
    <>
    <HeroSection/>
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