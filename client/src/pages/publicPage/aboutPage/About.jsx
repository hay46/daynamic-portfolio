import styles from './About.module.css'
import HeroSection from '../../../components/common/hero/HeroSection'
import PageBanner from '../../../components/abouts/pageBanner/PageBanner';
import AboutInfo from '../../../components/abouts/aboutInformation/AboutInfo';
import Skills from '../../../components/abouts/skills/Skills';
import Education from '../../../components/abouts/education/Education';
import Experience from '../../../components/abouts/exprience/Exprience';
import MissionVision from '../../../components/abouts/vision/MissionVision';

const About = () => {
  return (
    <>
    <HeroSection/>
      <PageBanner 
        title="About Me" 
        subtitle="Get to know the person behind the code" 
      />
      <AboutInfo 
        imageSrc="/assets/profile.jpg"
        name="Haymanot"
        role="Full Stack Developer"
        description="I’m a passionate developer with 5+ years of experience..."
        details={[
          { label: "Location", value: "Ethiopia" },
          { label: "Email", value: "haymanot@example.com" },
          { label: "Freelance", value: "Available" }
        ]}
      />
      <Skills />
      <Education />
      <Experience />
      <MissionVision />
    </>
  );
};

export default About;