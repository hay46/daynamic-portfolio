import styles from './Home.module.css'
import HeroSection from '../../../components/common/hero/HeroSection';
import AboutPreview from '../../../components/home/aboutPriview/AboutPriview';
import FeaturedPortfolio from '../../../components/home/featurdPortfolio/FeaturedPortfolio';
import ServicesPreview from '../../../components/home/servicesPriview/Servicespreview';
import SkillsSection from '../../../components/home/skillSection/SkillsSection';
import CallToAction from '../../../components/home/colltoAction/CallToAction';

const Home = () => {
  return (
    <>
    
      <HeroSection />
      <ServicesPreview/>
      <FeaturedPortfolio/>
       <AboutPreview/>
       <SkillsSection/>
       <CallToAction/>
       
    </>
  );
};

export default Home;   