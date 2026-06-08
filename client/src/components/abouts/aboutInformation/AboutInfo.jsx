import React from 'react';
import styles from './AboutInfo.module.css';

const AboutInfo = ({ imageSrc, name, role, description, details }) => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src={imageSrc} alt={name} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h2>About Me</h2>
          <h3>{name} – {role}</h3>
          <p>{description}</p>
          <div className={styles.details}>
            {details && details.map((detail, idx) => (
              <div key={idx} className={styles.detailItem}>
                <strong>{detail.label}:</strong> {detail.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;