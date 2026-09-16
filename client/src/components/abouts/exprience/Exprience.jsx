import { useEffect, useRef, useState } from "react";
import styles from "./Exprience.module.css";

const experienceData = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2022 – Present",
    current: true,
    responsibilities: [
      "Developed responsive React components for an enterprise dashboard.",
      "Collaborated with designers to implement pixel-perfect UIs.",
      "Optimized performance, reducing load time by 30%.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Creative Agency",
    period: "2020 – 2022",
    current: false,
    responsibilities: [
      "Built WordPress and custom PHP websites for clients.",
      "Maintained and updated existing web projects.",
      "Worked closely with clients to gather requirements.",
    ],
  },
];

const Experience = () => {
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
      id="experience"
      className={`${styles.experience} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Experience
          </span>
          <h2 className={styles.title}>
            Work <span className={styles.gradient}>Experience</span>
          </h2>
          <p className={styles.subtitle}>
            Where I've contributed and what I've learned.
          </p>
        </header>

        <div className={styles.timeline}>
          {experienceData.map((exp, idx) => (
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
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                  </div>
                  <span
                    className={`${styles.period} ${exp.current ? styles.periodCurrent : ""}`}
                  >
                    {exp.current && <span className={styles.liveDot} />}
                    {exp.period}
                  </span>
                </header>

                <ul className={styles.responsibilities}>
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className={styles.responsibility}>
                      <span className={styles.bullet} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
