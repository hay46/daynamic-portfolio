import { useEffect, useRef, useState } from "react";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    number: "01",
    title: "Discussion",
    description:
      "We discuss your idea, goals, timeline, and requirements — free consultation, no pressure.",
    icon: "💬",
    accent: "#6366f1",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "I create a roadmap, wireframes, and a tech stack plan tailored to your needs.",
    icon: "🗺️",
    accent: "#8b5cf6",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Coding with regular updates and iterative feedback so you're always in the loop.",
    icon: "⚡",
    accent: "#ec4899",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "Final testing, deployment, and a smooth handover — with 30 days of free support.",
    icon: "🚀",
    accent: "#10b981",
  },
];

const ProcessSection = () => {
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
      id="process"
      className={`${styles.process} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Process
          </span>
          <h2 className={styles.title}>
            How I <span className={styles.gradient}>Work</span>
          </h2>
          <p className={styles.subtitle}>
            A clear, collaborative process from idea to launch.
          </p>
        </header>

        <div className={styles.steps}>
          {/* Connecting line */}
          <div className={styles.connector} aria-hidden="true" />

          {steps.map((step, index) => (
            <article
              key={step.number}
              className={styles.step}
              style={{
                "--accent": step.accent,
                "--delay": `${index * 0.15}s`,
              }}
            >
              <div className={styles.stepHeader}>
                <span className={styles.stepIcon} aria-hidden="true">
                  {step.icon}
                </span>
                <span className={styles.stepNumber}>{step.number}</span>
              </div>

              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>

              <div className={styles.stepGlow} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
