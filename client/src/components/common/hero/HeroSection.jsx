import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>Welcome to VISION</div>
          <h1 className={styles.title}>
           I am haymanot <span className={styles.gradient}>Digital Dreams</span>
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
          <div className={styles.imagePlaceholder}>
          
            <div className={styles.illustration}>
              <div className={styles.shape1}></div>
              <div className={styles.shape2}></div>
              <div className={styles.shape3}></div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default HeroSection;