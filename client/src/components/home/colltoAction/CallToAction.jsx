import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2>Ready to bring your idea to life?</h2>
        <p>Let’s work together and create something amazing.</p>
        <div className={styles.buttons}>
          <Link to="/contact" className={styles.btnPrimary}>Hire Me</Link>
          <Link to="/portfolio" className={styles.btnSecondary}>See My Work</Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;