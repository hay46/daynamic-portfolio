import { Link } from 'react-router-dom';
import styles from './Herosection.module.css';
import heroImage from '../../../assets/images/portfolioHero.jpg';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>Welcome to VISION</div>
          <h1 className={styles.title}>
            I am Haymanot <span className={styles.gradient}>Digital Dreams</span>
          </h1>
          <p className={styles.subtitle}>
            Transforming ideas into stunning digital experiences.
            Let's create something amazing together.
          </p>
          <div className={styles.buttons}>
            <Link to="/portfolio" className={styles.btnPrimary}>
              View Portfolio
            </Link>
            <Link to="/contact" className={styles.btnSecondary}>
              Get in Touch
            </Link>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <div className={styles.imageGlow}></div>
            <img 
              src={heroImage} 
              alt="Haymanot - Digital Creator" 
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