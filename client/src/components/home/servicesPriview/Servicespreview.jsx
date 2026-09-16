import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ServicesPreview.module.css";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Modern, responsive websites built with React, Node.js, and the latest technologies.",
    accent: "#6366f1",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Beautiful, user-friendly interfaces that focus on conversion and engagement.",
    accent: "#ec4899",
  },
  {
    icon: "📱",
    title: "Mobile First",
    description:
      "Fully responsive designs that work flawlessly on all devices and screen sizes.",
    accent: "#f59e0b",
  },
  {
    icon: "🔧",
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, security updates, and technical support for your site.",
    accent: "#10b981",
  },
];

const ServicesPreview = () => {
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
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.services} ${visible ? styles.visible : ""}`}
      id="services"
    >
      {/* Background decoration */}
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.container}>
        {/* ---------- Header ---------- */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Services
          </span>
          <h2 className={styles.title}>
            What I <span className={styles.gradient}>Do</span>
          </h2>
          <p className={styles.subtitle}>
            Professional services crafted to help your business grow online.
          </p>
        </div>

        {/* ---------- Grid ---------- */}
        <div className={styles.grid}>
          {services.map((service, index) => (
            <article
              key={index}
              className={styles.card}
              style={{
                "--accent": service.accent,
                "--delay": `${index * 0.1}s`,
              }}
            >
              <div className={styles.cardGlow} aria-hidden="true" />

              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>

              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>

              <div className={styles.cardFooter}>
                <Link to="/contact" className={styles.cardLink}>
                  Learn more
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
            </article>
          ))}
        </div>

        {/* ---------- CTA below grid ---------- */}
        <div className={styles.ctaRow}>
          <p className={styles.ctaText}>Need something custom?</p>
          <Link to="/contact" className={styles.ctaButton}>
            Let's talk
            <svg
              width="18"
              height="18"
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

export default ServicesPreview;
