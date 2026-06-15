import styles from './Home.module.css'
import HeroSection from '../../../components/common/hero/HeroSection';
import AboutPreview from '../../../components/home/aboutPriview/AboutPriview';
import FeaturedPortfolio from '../../../components/home/featurdPortfolio/FeaturedPortfolio';
import ServicesPreview from '../../../components/home/servicesPriview/Servicespreview';
import SkillsSection from '../../../components/home/skillSection/SkillsSection';
import CallToAction from '../../../components/home/colltoAction/CallToAction';
import homeHeroImage from '../../../assets/images/portfolioHero.jpg'
const Home = () => {
  return (
    <>
    
       <HeroSection
        badge="Welcome to My Portfolio"
        title="I am Haymanot"
        gradientText="Creative Developer"
        subtitle="Building modern web applications with passion and precision. Let's bring your ideas to life."
        imageSrc={homeHeroImage}
        imageAlt="Haymanot - Home"
      />
      <ServicesPreview/>
      <FeaturedPortfolio/>
       <AboutPreview/>
       <SkillsSection/>
       <CallToAction/>
       
    </>
  );
};

export default Home;   