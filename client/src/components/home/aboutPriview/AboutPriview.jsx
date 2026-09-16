import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AboutPrivew.module.css";
import aboutphoto from "../../../assets/images/about-me.jpg";

const skills = ["React", "Node.js", "Express", "MongoDB", "Tailwind"];

const AboutPreview = () => {
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
      className={`${styles.aboutPreview} ${visible ? styles.visible : ""}`}
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
          <img
            src={aboutphoto}
            alt="Haymanot — Software Engineer"
            className={styles.profileImage}
            loading="lazy"
          />

          {/* Floating badges */}
          <div className={`${styles.floatingBadge} ${styles.badgeExperience}`}>
            <span className={styles.badgeValue}>2+</span>
            <span className={styles.badgeLabel}>Years Exp.</span>
          </div>

          <div className={`${styles.floatingBadge} ${styles.badgeProjects}`}>
            <span className={styles.badgeValue}>20+</span>
            <span className={styles.badgeLabel}>Projects</span>
          </div>

          <div className={`${styles.floatingBadge} ${styles.badgeAvailable}`}>
            <span className={styles.availableDot} />
            <span>Available</span>
          </div>
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            About Me
          </span>

          <h2 className={styles.title}>
            Crafting{" "}
            <span className={styles.gradient}>Digital Experiences</span> with
            Purpose
          </h2>

          <p className={styles.bio}>
            I'm <strong>Haymanot</strong>, a passionate software engineer and
            full-stack web developer with <strong>2+ years</strong> of
            experience building modern web applications. I love turning complex
            problems into simple, elegant designs.
          </p>

          <p className={styles.bio}>
            When I'm not coding, you'll find me exploring new tech, contributing
            to open source, or solving interesting software problems.
          </p>

          {/* Skills */}
          <div className={styles.skillsSection}>
            <span className={styles.skillsLabel}>Tech I work with</span>
            <div className={styles.skills}>
              {skills.map((skill) => (
                <span key={skill} className={styles.skillChip}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={styles.actions}>
            <Link to="/about" className={styles.btnAbout}>
              More About Me
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

            <Link to="/contact" className={styles.btnSecondary}>
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
