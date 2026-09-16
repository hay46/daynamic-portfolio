import { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";

const skillsData = [
  {
    category: "Frontend",
    icon: "🎨",
    accent: "#ec4899",
    items: ["React", "Vue", "Tailwind", "JavaScript"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    accent: "#6366f1",
    items: ["Node.js", "Express", "Python", "PHP"],
  },
  {
    category: "Database",
    icon: "🗄️",
    accent: "#10b981",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    accent: "#f59e0b",
    items: ["Git", "Docker", "VSCode", "Figma"],
  },
];

const Skills = () => {
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
      id="skills"
      className={`${styles.skills} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Skills
          </span>
          <h2 className={styles.title}>
            My <span className={styles.gradient}>Skills</span>
          </h2>
          <p className={styles.subtitle}>
            The tools and technologies I use daily to build modern web
            applications.
          </p>
        </header>

        <div className={styles.grid}>
          {skillsData.map((group, idx) => (
            <article
              key={group.category}
              className={styles.card}
              style={{
                "--accent": group.accent,
                "--delay": `${idx * 0.1}s`,
              }}
            >
              <div className={styles.cardGlow} aria-hidden="true" />

              <header className={styles.cardHeader}>
                <span className={styles.icon} aria-hidden="true">
                  {group.icon}
                </span>
                <h3 className={styles.category}>{group.category}</h3>
              </header>

              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
