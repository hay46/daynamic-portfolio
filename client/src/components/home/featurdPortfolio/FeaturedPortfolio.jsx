import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../../../context/PortfolioContext';
import styles from './FeaturdPortfolio.module.css';

const FeaturedPortfolio = () => {
  const { projects, loading } = usePortfolio();
  const featured = projects.slice(0, 3); 

  if (loading) return <div className={styles.loading}>Loading projects...</div>;
  if (projects.length === 0) return null;

  return (
    <section className={styles.featured}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>Some of my best work</p>
        <div className={styles.grid}>
          {featured.map((project) => (
            <div key={project.id} className={styles.card}>
              {project.image && (
                <img src={project.image} alt={project.title} className={styles.image} />
              )}
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.discription?.substring(0, 100)}...</p>
                <Link to={`/portfolio/${project.id}`} className={styles.btn}>
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.seeAll}>
          <Link to="/portfolio" className={styles.seeAllBtn}>See All Projects →</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;