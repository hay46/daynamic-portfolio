import { useEffect, useRef, useState } from "react";
import styles from "./SkillsSection.module.css";

const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    accent: "#ec4899",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML / CSS", level: 92 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    accent: "#6366f1",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "Database & Tools",
    icon: "🗄️",
    accent: "#10b981",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "Git / GitHub", level: 88 },
    ],
  },
];

const SkillsSection = () => {
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

  const getLevelLabel = (level) => {
    if (level >= 85) return "Expert";
    if (level >= 70) return "Advanced";
    if (level >= 50) return "Intermediate";
    return "Learning";
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.skills} ${visible ? styles.visible : ""}`}
      id="skills"
    >
      {/* Background decoration */}
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.container}>
        {/* ---------- Header ---------- */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Skills
          </span>
          <h2 className={styles.title}>
            Technical <span className={styles.gradient}>Expertise</span>
          </h2>
          <p className={styles.subtitle}>
            Technologies I work with daily to build modern, scalable web
            applications.
          </p>
        </div>

        {/* ---------- Categories ---------- */}
        <div className={styles.categoriesGrid}>
          {skillCategories.map((cat, catIdx) => (
            <article
              key={cat.category}
              className={styles.categoryCard}
              style={{
                "--accent": cat.accent,
                "--delay": `${catIdx * 0.12}s`,
              }}
            >
              <div className={styles.cardGlow} aria-hidden="true" />

              <header className={styles.categoryHeader}>
                <span className={styles.categoryIcon} aria-hidden="true">
                  {cat.icon}
                </span>
                <h3 className={styles.categoryTitle}>{cat.category}</h3>
              </header>

              <div className={styles.skillList}>
                {cat.skills.map((skill, idx) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>
                        {getLevelLabel(skill.level)}
                      </span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{
                          width: visible ? `${skill.level}%` : "0%",
                          transitionDelay: `${catIdx * 0.12 + idx * 0.08}s`,
                        }}
                      >
                        <span className={styles.progressGlow} />
                      </div>
                    </div>
                    <span className={styles.skillPercent}>{skill.level}%</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
