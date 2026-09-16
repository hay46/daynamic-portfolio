import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ServicesGrid.module.css";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies — fast, accessible, and built to scale.",
    accent: "#6366f1",
    features: ["Responsive design", "SEO-friendly", "Fast performance"],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps for iOS and Android using React Native, sharing logic with your web app.",
    accent: "#ec4899",
    features: ["iOS & Android", "Native feel", "Single codebase"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "User-centered designs that are beautiful, accessible, and optimized for conversion.",
    accent: "#f59e0b",
    features: ["Wireframes", "Design systems", "Prototyping"],
  },
  {
    icon: "🔧",
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, security updates, performance tuning, and technical support.",
    accent: "#10b981",
    features: ["Bug fixes", "Updates", "Priority support"],
  },
];

const ServicesGrid = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`${styles.services} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Services
          </span>
          <h2 className={styles.title}>
            What I <span className={styles.gradient}>Offer</span>
          </h2>
          <p className={styles.subtitle}>
            End-to-end services to help you build, launch, and grow.
          </p>
        </header>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article
              key={service.title}
              className={styles.card}
              style={{
                "--accent": service.accent,
                "--delay": `${index * 0.1}s`,
              }}
            >
              <div className={styles.cardGlow} aria-hidden="true" />

              <div className={styles.iconWrapper}>
                <span className={styles.icon} aria-hidden="true">
                  {service.icon}
                </span>
              </div>

              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>

              <ul className={styles.features}>
                {service.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.featureCheck} aria-hidden="true">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className={styles.cardFooter}>
                <Link to="/contact" className={styles.cardLink}>
                  Learn more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA below grid */}
        <div className={styles.ctaRow}>
          <p className={styles.ctaText}>Need something tailored?</p>
          <Link to="/contact" className={styles.ctaButton}>
            Request a Quote
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
