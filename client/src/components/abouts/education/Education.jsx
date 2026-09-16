import { useEffect, useRef, useState } from "react";
import styles from "./Education.module.css";

const educationData = [
  {
    degree: "B.Sc. in Software Engineering",
    institution: "Injibara University",
    year: "2016 – 2020",
    description:
      "Graduated with honors, focused on software engineering, web development, and algorithms.",
    icon: "🎓",
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    institution: "Code Academy",
    year: "2021",
    description:
      "Intensive 6-month program covering the MERN stack and DevOps fundamentals.",
    icon: "💻",
  },
];

const Education = () => {
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
      id="education"
      className={`${styles.education} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Education
          </span>
          <h2 className={styles.title}>
            Academic <span className={styles.gradient}>Background</span>
          </h2>
          <p className={styles.subtitle}>
            The foundation of my development journey.
          </p>
        </header>

        <div className={styles.timeline}>
          {educationData.map((edu, idx) => (
            <article
              key={idx}
              className={styles.item}
              style={{ "--delay": `${idx * 0.15}s` }}
            >
              <div className={styles.timelineMarker}>
                <span className={styles.markerDot} />
              </div>

              <div className={styles.card}>
                <div className={styles.cardGlow} aria-hidden="true" />

                <header className={styles.cardHeader}>
                  <span className={styles.icon} aria-hidden="true">
                    {edu.icon}
                  </span>
                  <span className={styles.year}>{edu.year}</span>
                </header>

                <h3 className={styles.degree}>{edu.degree}</h3>
                <h4 className={styles.institution}>{edu.institution}</h4>
                <p className={styles.description}>{edu.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
