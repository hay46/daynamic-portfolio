import React from 'react';
import styles from './Skills.module.css';

const skillsData = [
  { category: 'Frontend', items: ['React', 'Vue', 'Tailwind', 'JavaScript'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PHP'] },
  { category: 'Database', items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'VSCode', 'Figma'] },
];

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Skills</h2>
        <div className={styles.grid}>
          {skillsData.map((group, idx) => (
            <div key={idx} className={styles.card}>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;