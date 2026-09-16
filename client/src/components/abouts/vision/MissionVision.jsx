import { useEffect, useRef, useState } from "react";
import styles from "./MissionVision.module.css";

const pillars = [
  {
    key: "mission",
    icon: "🎯",
    label: "My Mission",
    title: "Craft solutions that matter",
    accent: "#6366f1",
    text: "To craft digital experiences that solve real problems, empower businesses, and inspire users through clean code and thoughtful design.",
  },
  {
    key: "vision",
    icon: "🔭",
    label: "My Vision",
    title: "Build with lasting impact",
    accent: "#ec4899",
    text: "To become a leading full-stack creator who builds innovative, accessible web solutions that make a positive impact on people's lives globally.",
  },
];

const MissionVision = () => {
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
      id="mission"
      className={`${styles.section} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Purpose
          </span>
          <h2 className={styles.title}>
            Mission &amp; <span className={styles.gradient}>Vision</span>
          </h2>
          <p className={styles.subtitle}>What drives me forward every day.</p>
        </header>

        <div className={styles.grid}>
          {pillars.map((pillar, idx) => (
            <article
              key={pillar.key}
              className={styles.card}
              style={{
                "--accent": pillar.accent,
                "--delay": `${idx * 0.12}s`,
              }}
            >
              <div className={styles.cardGlow} aria-hidden="true" />

              <div className={styles.iconWrap}>
                <span className={styles.icon} aria-hidden="true">
                  {pillar.icon}
                </span>
              </div>

              <span className={styles.label}>{pillar.label}</span>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardText}>{pillar.text}</p>

              <div className={styles.cardFooter} aria-hidden="true">
                <span className={styles.footerLine} />
                <span className={styles.footerDot} />
                <span className={styles.footerLine} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
