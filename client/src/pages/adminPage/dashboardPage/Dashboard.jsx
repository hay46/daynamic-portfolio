import React, { useEffect } from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { projects, fetchProjects, loading } = usePortfolio();

  useEffect(() => {
    fetchProjects();
  }, []);

  // Calculate statistics
  const totalProjects = projects.length;
  const publishedProjects = projects.filter(p => p.status !== 'draft').length;
  const recentProjects = [...projects].slice(-3).reverse();

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Dashboard</h1>
        <p>Welcome back to your portfolio admin panel</p>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>📁</div>
          <div className={styles.statInfo}>
            <h3>Total Projects</h3>
            <p className={styles.statNumber}>{totalProjects}</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>✅</div>
          <div className={styles.statInfo}>
            <h3>Published</h3>
            <p className={styles.statNumber}>{publishedProjects}</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>🕒</div>
          <div className={styles.statInfo}>
            <h3>Last Updated</h3>
            <p className={styles.statNumber}>{recentProjects.length > 0 ? 'Today' : '—'}</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>👋</div>
          <div className={styles.statInfo}>
            <h3>Visitors</h3>
            <p className={styles.statNumber}>+124</p>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className={styles.recentSection}>
        <div className={styles.sectionHeader}>
          <h2>Recent Projects</h2>
          <Link to="/admin/portfolio" className={styles.viewAllLink}>
            View All →
          </Link>
        </div>

        {loading ? (
          <div className={styles.loading}>Loading projects...</div>
        ) : (
          <div className={styles.projectsList}>
            {recentProjects.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No projects yet.</p>
                <Link to="/admin/portfolio/new" className={styles.addButton}>
                  + Add Your First Project
                </Link>
              </div>
            ) : (
              recentProjects.map((project) => (
                <div key={project.id} className={styles.projectCard}>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.projectImage}
                    />
                  )}
                  <div className={styles.projectInfo}>
                    <h3>{project.title}</h3>
                    <p>{project.discription?.substring(0, 80)}...</p>
                    <div className={styles.projectLinks}>
                      <a href={project.github_link} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                      <a href={project.live_link} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className={styles.actionsSection}>
        <h2>Quick Actions</h2>
        <div className={styles.actionButtons}>
          <Link to="/admin/portfolio/new" className={styles.actionBtn}>
            + Add Project
          </Link>
          <Link to="/admin/messages" className={styles.actionBtn}>
            ✉️ View Messages
          </Link>
          <Link to="/admin/profile" className={styles.actionBtn}>
            👤 Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;