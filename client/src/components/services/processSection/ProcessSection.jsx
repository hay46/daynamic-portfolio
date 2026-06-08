import React from 'react';
import styles from './ProcessSection.module.css';

const steps = [
  { number: 1, title: 'Discussion', description: 'We discuss your idea, goals, and requirements.' },
  { number: 2, title: 'Planning', description: 'I create a roadmap, wireframes, and tech stack plan.' },
  { number: 3, title: 'Development', description: 'Coding, regular updates, and iterative feedback.' },
  { number: 4, title: 'Delivery', description: 'Final testing, deployment, and handover.' },
];

const ProcessSection = () => {
  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <h2 className={styles.title}>How I Work</h2>
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.number}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;