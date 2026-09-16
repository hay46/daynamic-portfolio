import PageBanner from "../../../components/abouts/pageBanner/PageBanner";
import ServicesGrid from "../../../components/services/servicesGrid/ServicesGrid";
import ProcessSection from "../../../components/services/processSection/ProcessSection";
import FaqSection from "../../../components/services/faqsection/FaqSection";
import HeroSection from "../../../components/common/hero/HeroSection";
import serviceHeroImage from "../../../assets/images/service-hero.png";
import styles from "./Services.module.css";

const ServicesPage = () => {
  return (
    <main className={styles.servicesPage}>
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

      <PageBanner title="My Services" subtitle="What I can do for you" />

      {/* ---------- STICKY SECTION NAV ---------- */}
      <nav className={styles.sectionNav} aria-label="Services sections">
        <div className={styles.sectionNavInner}>
          <a href="#services" className={styles.sectionNavLink}>
            Services
          </a>
          <a href="#process" className={styles.sectionNavLink}>
            Process
          </a>
          <a href="#faq" className={styles.sectionNavLink}>
            FAQ
          </a>
        </div>
      </nav>

      <div className={styles.sections}>
        <ServicesGrid />
        <ProcessSection />
        <FaqSection />
      </div>
    </main>
  );
};

export default ServicesPage;
