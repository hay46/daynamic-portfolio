import React from 'react';
import styles from './PortfolioGrid.module.css';

const PortfolioGrid = ({ projects, loading }) => {
  if (loading) {
    return <div className={styles.message}>Loading projects...</div>;
  }

  if (!projects.length) {
    return <div className={styles.message}>No projects found.</div>;
  }

  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <div key={project.id} className={styles.card}>
          {project.image && (
            <img src={project.image} alt={project.title} className={styles.image} />
          )}
          <div className={styles.content}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.tech}>
              <span className={styles.techLabel}>Tech:</span>
              <span>{project.technology}</span>
            </div>
            <div className={styles.links}>
              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  GitHub
                </a>
              )}
              {project.live_link && (
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;