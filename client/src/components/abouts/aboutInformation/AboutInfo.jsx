import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AboutInfo.module.css";

const AboutInfo = ({ imageSrc, name, role, description, details }) => {
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
      className={`${styles.about} ${visible ? styles.visible : ""}`}
      id="about"
    >
      {/* Background decoration */}
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.container}>
        {/* ---------- IMAGE ---------- */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageGlow} aria-hidden="true" />
          <div className={styles.imageFrame} aria-hidden="true">
            <span className={styles.corner1} />
            <span className={styles.corner2} />
            <span className={styles.corner3} />
            <span className={styles.corner4} />
          </div>

          {imageSrc && (
            <img
              src={imageSrc}
              alt={name}
              className={styles.image}
              loading="lazy"
            />
          )}

          {/* Floating role badge */}
          {role && (
            <div className={styles.roleBadge}>
              <span className={styles.roleDot} />
              <span>{role}</span>
            </div>
          )}
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            About Me
          </span>

          <h2 className={styles.title}>
            {name}
            {role && (
              <>
                {" "}
                <span className={styles.gradient}>— {role}</span>
              </>
            )}
          </h2>

          {description && <p className={styles.description}>{description}</p>}

          {/* Details grid */}
          {details && details.length > 0 && (
            <div className={styles.detailsGrid}>
              {details.map((detail, idx) => (
                <div
                  key={idx}
                  className={styles.detailItem}
                  style={{ "--delay": `${idx * 0.08}s` }}
                >
                  <span className={styles.detailLabel}>{detail.label}</span>
                  <span className={styles.detailValue}>{detail.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className={styles.actions}>
            <Link to="/contact" className={styles.btnPrimary}>
              Get In Touch
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
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
