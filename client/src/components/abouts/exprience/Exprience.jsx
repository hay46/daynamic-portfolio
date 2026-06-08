import React from 'react';
import styles from './Exprience.module.css';

const experienceData = [
  {
    role: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 – Present',
    responsibilities: [
      'Developed responsive React components for enterprise dashboard.',
      'Collaborated with designers to implement pixel‑perfect UIs.',
      'Optimized performance, reducing load time by 30%.',
    ],
  },
  {
    role: 'Junior Web Developer',
    company: 'Creative Agency',
    period: '2020 – 2022',
    responsibilities: [
      'Built WordPress and custom PHP websites for clients.',
      'Maintained and updated existing web projects.',
      'Worked closely with clients to gather requirements.',
    ],
  },
];

const Experience = () => {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>Work Experience</h2>
        {experienceData.map((exp, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.header}>
              <h3>{exp.role}</h3>
              <span className={styles.period}>{exp.period}</span>
            </div>
            <h4>{exp.company}</h4>
            <ul>
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;