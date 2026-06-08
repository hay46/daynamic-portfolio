import React from 'react';
import styles from './MissionVision.module.css';

const MissionVision = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.icon}>🎯</div>
          <h2>My Mission</h2>
          <p>
            To craft digital experiences that solve real problems, empower businesses, 
            and inspire users through clean code and thoughtful design.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>🔭</div>
          <h2>My Vision</h2>
          <p>
            To become a leading full‑stack creator who builds innovative, accessible 
            web solutions that make a positive impact on people’s lives globally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;