import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";

const HeroSection = ({
  badge = "Welcome to VISION",
  title = "I am Haymanot",
  gradientText = "Digital Dreams",
  subtitle = "Transforming ideas into stunning digital experiences. Let's create something amazing together.",
  showButtons = true,
  btnPrimaryText = "View Portfolio",
  btnPrimaryLink = "/portfolio",
  btnSecondaryText = "Get in Touch",
  btnSecondaryLink = "/contact",
  imageSrc,
  imageAlt = "Hero Image",
}) => {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Fade-in animation on mount
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
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Subtle mouse parallax on the image
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 14;
    const y = (e.clientY / innerHeight - 0.5) * 14;

    const img = heroRef.current.querySelector(`.${styles.heroImage}`);
    if (img) img.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  return (
    <section
      ref={heroRef}
      className={`${styles.hero} ${visible ? styles.visible : ""}`}
      onMouseMove={handleMouseMove}
    >
      {/* Background decoration */}
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.container}>
        {/* ---------- TEXT ---------- */}
        <div className={styles.content}>
          {badge && (
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              {badge}
            </div>
          )}

          <h1 className={styles.title}>
            {title}{" "}
            {gradientText && (
              <span className={styles.gradient}>{gradientText}</span>
            )}
          </h1>

          <p className={styles.subtitle}>{subtitle}</p>

          {showButtons && (
            <div className={styles.buttons}>
              <Link to={btnPrimaryLink} className={styles.btnPrimary}>
                {btnPrimaryText}
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

              <Link to={btnSecondaryLink} className={styles.btnSecondary}>
                {btnSecondaryText}
              </Link>
            </div>
          )}

          {/* Small trust markers under buttons */}
          <div className={styles.metaRow}>
            <span className={styles.metaDot} />
            <span>Available for freelance</span>
          </div>
        </div>

        {/* ---------- IMAGE ---------- */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <div className={styles.imageGlow} aria-hidden="true" />
            <div className={styles.imageRing} aria-hidden="true" />

            {imageSrc && (
              <img
                src={imageSrc}
                alt={imageAlt}
                className={styles.heroImage}
                loading="eager"
              />
            )}

            <div className={styles.imageOverlay} aria-hidden="true" />

            {/* Floating tech chips */}
            <div className={`${styles.chip} ${styles.chip1}`}>⚛️ React</div>
            <div className={`${styles.chip} ${styles.chip2}`}>🟢 Node.js</div>
            <div className={`${styles.chip} ${styles.chip3}`}>🍃 MongoDB</div>

            <div className={styles.decorativeShape1} aria-hidden="true" />
            <div className={styles.decorativeShape2} aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span>Scroll</span>
        <div className={styles.scrollArrow} />
      </div>
    </section>
  );
};

export default HeroSection;
