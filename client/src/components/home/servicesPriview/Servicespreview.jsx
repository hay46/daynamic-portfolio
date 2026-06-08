import React from 'react';
import styles from './ServicesPreview.module.css';

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Modern, responsive websites built with React, Node.js, and the latest technologies.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful, user‑friendly interfaces that focus on conversion and engagement.',
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description: 'Fully responsive designs that work flawlessly on all devices and screen sizes.',
  },
  {
    icon: '🔧',
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance, security updates, and technical support for your site.',
  },
];

const ServicesPreview = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>What I Do</h2>
        <p className={styles.subtitle}>Professional services to help you grow online</p>
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

export default ServicesPreview;