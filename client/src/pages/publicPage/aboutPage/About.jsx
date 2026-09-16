import styles from "./About.module.css";
import HeroSection from "../../../components/common/hero/HeroSection";
import PageBanner from "../../../components/abouts/pageBanner/PageBanner";
import AboutInfo from "../../../components/abouts/aboutInformation/AboutInfo";
import Skills from "../../../components/abouts/skills/Skills";
import Education from "../../../components/abouts/education/Education";
import Experience from "../../../components/abouts/exprience/Exprience";
import MissionVision from "../../../components/abouts/vision/MissionVision";
import aboutphoto from "../../../assets/images/about-me.jpg";
import aboutHeroImage from "../../../assets/images/about hero.png";

const sectionNav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "mission", label: "Mission" },
];

const About = () => {
  return (
    <main className={styles.aboutPage}>
      {/* ---------- HERO ---------- */}
      <HeroSection
        badge="Get to Know Me"
        title="About"
        gradientText="Haymanot"
        subtitle="Full-stack developer with 2+ years of experience. I love creating solutions that make a difference."
        showButtons={false}
        imageSrc={aboutHeroImage}
        imageAlt="About Haymanot"
      />

      {/* ---------- PAGE BANNER ---------- */}
      <PageBanner
        title="About Me"
        subtitle="Get to know the person behind the code"
      />

      {/* ---------- QUICK SECTION NAV (sticky) ---------- */}
      <nav className={styles.sectionNav} aria-label="About sections">
        <div className={styles.sectionNavInner}>
          {sectionNav.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={styles.sectionNavLink}>
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ---------- SECTIONS ---------- */}
      <div className={styles.sections}>
        <AboutInfo
          imageSrc={aboutphoto}
          name="Haymanot"
          role="Full Stack Developer"
          description="I'm a passionate developer with 2+ years of experience building modern web applications. I love turning complex problems into simple, elegant solutions that people enjoy using."
          details={[
            { label: "Location", value: "Ethiopia" },
            { label: "Email", value: "haymanotebabu2@gmail.com" },
            { label: "Freelance", value: "Available" },
          ]}
        />

        <Skills />
        <Education />
        <Experience />
        <MissionVision />
      </div>
    </main>
  );
};

export default About;
