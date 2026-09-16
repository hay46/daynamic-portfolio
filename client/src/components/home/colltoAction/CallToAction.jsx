import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
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
      className={`${styles.cta} ${visible ? styles.visible : ""}`}
      id="contact"
    >
      {/* Background decoration */}
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.card}>
          {/* Decorative corners */}
          <span className={styles.cornerTopLeft} aria-hidden="true" />
          <span className={styles.cornerBottomRight} aria-hidden="true" />

          {/* Availability badge */}
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for new projects
          </span>

          {/* Headline */}
          <h2 className={styles.title}>
            Ready to bring your{" "}
            <span className={styles.gradient}>idea to life?</span>
          </h2>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Let's work together and create something amazing. Whether it's a
            full-stack web app, a portfolio, or something custom — I'm ready to
            help.
          </p>

          {/* Actions */}
          <div className={styles.buttons}>
            <Link to="/contact" className={styles.btnPrimary}>
              Hire Me
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

            <Link to="/portfolio" className={styles.btnSecondary}>
              See My Work
            </Link>
          </div>

          {/* Trust markers */}
          <div className={styles.trustMarkers}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>⚡</span>
              <span>Fast Response</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>🔒</span>
              <span>Secure Delivery</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>💬</span>
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
