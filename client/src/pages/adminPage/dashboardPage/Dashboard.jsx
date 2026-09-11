import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { usePortfolio } from "../../../context/PortfolioContext";
import { Link } from "react-router-dom";
import CreatePortfolioModal from "../addPortfolio/CreatePortfolioModal";
import EditPortfolioModal from "../editPortfolio/EditPortfolioModal";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  // ✅ FIX #1: Actually call useAuth to get the user
  const { user } = useAuth();

  const { projects, fetchProjects, loading, deleteProject, updateProject } =
    usePortfolio();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await deleteProject(id);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
  };

  const totalProjects = projects.length;

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          {/* ✅ FIX #2: Welcome message OUTSIDE the button */}
          <h1>Welcome, {user?.name || "User"}</h1>
          <p>Manage your portfolio projects</p>
        </div>
        <button
          className={styles.createBtn}
          onClick={() => setShowCreateModal(true)}
        >
          + Create Portfolio
        </button>
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
            <p className={styles.statNumber}>
              {projects.filter((p) => p.status !== "draft").length}
            </p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>🕒</div>
          <div className={styles.statInfo}>
            <h3>Last Updated</h3>
            <p className={styles.statNumber}>Today</p>
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

      {/* All Projects Section */}
      <div className={styles.recentSection}>
        <div className={styles.sectionHeader}>
          <h2>All Projects</h2>
        </div>

        {loading ? (
          <div className={styles.loading}>Loading projects...</div>
        ) : (
          <div className={styles.projectsGrid}>
            {projects.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No projects yet.</p>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className={styles.addButton}
                >
                  + Create Your First Project
                </button>
              </div>
            ) : (
              projects.map((project) => (
                // ✅ FIX #3: Use fallback key so you never get "undefined" key warning
                <div
                  key={project.id || project._id || project.title}
                  className={styles.projectCard}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.projectImage}
                    />
                  )}
                  <div className={styles.projectInfo}>
                    <h3>{project.title}</h3>
                    <p>{project.description?.substring(0, 80)}...</p>
                    <div className={styles.projectLinks}>
                      {project.github_link && (
                        <a
                          href={project.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      )}
                      {project.live_link && (
                        <a
                          href={project.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                    <div className={styles.cardActions}>
                      <button
                        onClick={() => handleEdit(project)}
                        className={styles.editBtn}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className={styles.deleteBtn}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Modals */}
      {showCreateModal && (
        <CreatePortfolioModal onClose={() => setShowCreateModal(false)} />
      )}
      {editingProject && (
        <EditPortfolioModal
          project={editingProject}
          onClose={() => setEditingProject(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;
