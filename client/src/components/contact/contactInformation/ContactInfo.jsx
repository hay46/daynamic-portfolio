import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.info}>
      <h3>Contact Information</h3>
      <div className={styles.details}>
        <div className={styles.item}>
          <span className={styles.icon}>✉️</span>
          <div>
            <strong>Email</strong>
            <p>haymanot@example.com</p>
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>📞</span>
          <div>
            <strong>Phone</strong>
            <p>+251 912 345 678</p>
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>📍</span>
          <div>
            <strong>Location</strong>
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;