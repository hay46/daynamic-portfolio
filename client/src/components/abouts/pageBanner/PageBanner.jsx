import React from 'react';
import styles from './PageBanner.module.css';

const PageBanner = ({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className={styles.banner}
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default PageBanner;