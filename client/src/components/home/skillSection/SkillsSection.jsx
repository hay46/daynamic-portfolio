import React from 'react';
import styles from './SkillsSection.module.css';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'Express', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Tailwind CSS', level: 85 },
];

const SkillsSection = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technical Skills</h2>
        <div className={styles.grid}>
          {skills.map((skill, idx) => (
            <div key={idx} className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;