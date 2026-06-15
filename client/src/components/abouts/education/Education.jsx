import React from 'react';
import styles from './Education.module.css';

const educationData = [
  {
    degree: 'B.Sc. in software engineering',
    institution: 'University of Technology in injibara unoversity',
    year: '2016 – 2020',
    description: 'Graduated with honors, focused on software engineener and web development and algorithms.',
  },
  {
    degree: 'Full Stack Web Development Bootcamp',
    institution: 'Code Academy',
    year: '2021',
    description: 'Intensive 6‑month program covering MERN stack and DevOps basics.',
  },
];

const Education = () => {
  return (
    <section className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.timeline}>
          {educationData.map((edu, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.year}>{edu.year}</div>
              <div className={styles.content}>
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;