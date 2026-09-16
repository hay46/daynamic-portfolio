import { Link } from "react-router-dom";
import PageBanner from "../../../components/abouts/pageBanner/PageBanner";
import ContactInfo from "../../../components/contact/contactInformation/ContactInfo";
import ContactForm from "../../../components/contact/contactForm/ContactForm";
import ContactMap from "../../../components/contact/map/ContactMap";
import SocialLinks from "../../../components/contact/socialLinks/SocialLinks";
import styles from "./Contact.module.css";

const ContactPage = () => {
  return (
    <main className={styles.contactPage}>
      <PageBanner title="Get in Touch" subtitle="Let's work together" />

      <section className={styles.contactSection}>
        <div className={styles.glow1} aria-hidden="true" />
        <div className={styles.glow2} aria-hidden="true" />
        <div className={styles.gridBg} aria-hidden="true" />

        <div className={styles.container}>
          {/* ---------- Header ---------- */}
          <header className={styles.header}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Contact
            </span>
            <h2 className={styles.title}>
              Let's Build Something{" "}
              <span className={styles.gradient}>Together</span>
            </h2>
            <p className={styles.subtitle}>
              Have a project in mind? Fill out the form below or reach out
              directly — I typically respond within 24 hours.
            </p>
          </header>

          {/* ---------- Info + Form grid ---------- */}
          <div className={styles.grid}>
            <ContactInfo />
            <ContactForm />
          </div>

          {/* ---------- Map ---------- */}
          <ContactMap />

          {/* ---------- Socials ---------- */}
          <SocialLinks />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
