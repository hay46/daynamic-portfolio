import { Link } from 'react-router-dom';
import styles from './Herosection.module.css';

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
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>{badge}</div>
          <h1 className={styles.title}>
            {title} <span className={styles.gradient}>{gradientText}</span>
          </h1>
          <p className={styles.subtitle}>{subtitle}</p>
          {showButtons && (
            <div className={styles.buttons}>
              <Link to={btnPrimaryLink} className={styles.btnPrimary}>
                {btnPrimaryText}
              </Link>
              <Link to={btnSecondaryLink} className={styles.btnSecondary}>
                {btnSecondaryText}
              </Link>
            </div>
          )}
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <div className={styles.imageGlow}></div>
            <img
              src={imageSrc}
              alt={imageAlt}
              className={styles.heroImage}
            />
            <div className={styles.imageOverlay}></div>
            <div className={styles.decorativeShape1}></div>
            <div className={styles.decorativeShape2}></div>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
};

export default HeroSection;