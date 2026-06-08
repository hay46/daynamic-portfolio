import React from 'react';
import styles from './ServiceGride.module.css';

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Cross‑platform mobile apps for iOS and Android using React Native.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'User‑centered designs that are beautiful and easy to use.',
  },
  {
    icon: '🔧',
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance, updates, and technical support.',
  },
];

const ServicesGrid = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>What I Offer</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;