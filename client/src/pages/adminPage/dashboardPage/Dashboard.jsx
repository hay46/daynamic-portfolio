import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { usePortfolio } from "../../context/PortfolioContext";
import CreatePortfolioModal from "../../components/addPortfolio/CreatePortfolioModal";
import EditPortfolioModal from "../../components/editPortfolio/EditPortfolioModal";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const { user } = useAuth();
  const { projects, fetchProjects, loading, deleteProject } = usePortfolio();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this project?")) {
      await deleteProject(id);
    }
  };

  const handleEdit = (project) => setEditingProject(project);

  const totalProjects = projects.length;
  const publishedCount = projects.filter((p) => p.status !== "draft").length;

  return (
    <div className={styles.dashboard}>
      {/* Hero */}
      <section className={styles.hero}>
        <div>
          <h1>
            Welcome back, <span>{user?.name || "User"}</span> 👋
          </h1>
          <p>Here's what's happening with your portfolio today.</p>
        </div>
        <button
          className={styles.primaryBtn}
          onClick={() => setShowCreateModal(true)}
        >
          <span>＋</span> New Project
        </button>
      </section>

      {/* Stats */}
      <section className={styles.statsGrid}>
        <StatCard
          icon="📁"
          label="Total Projects"
          value={totalProjects}
          color="blue"
        />
        <StatCard
          icon="✅"
          label="Published"
          value={publishedCount}
          color="green"
        />
        <StatCard icon="🕒" label="Last Updated" value="Today" color="purple" />
        <StatCard icon="👋" label="Visitors" value="+124" color="orange" />
      </section>

      {/* Projects */}
      <section className={styles.projectsSection}>
        <div className={styles.sectionHeader}>
          <h2>All Projects</h2>
          <span className={styles.count}>{totalProjects} items</span>
        </div>

        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            Loading projects…
          </div>
        ) : projects.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>📭</div>
            <h3>No projects yet</h3>
            <p>Create your first project to get started.</p>
            <button
              className={styles.primaryBtn}
              onClick={() => setShowCreateModal(true)}
            >
              ＋ Create Project
            </button>
          </div>
        ) : (
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <article
                key={project.id || project._id || project.title}
                className={styles.card}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.cardImage}
                  />
                ) : (
                  <div className={styles.cardImageFallback}>No image</div>
                )}

                <div className={styles.cardBody}>
                  <h3>{project.title}</h3>
                  <p className={styles.cardDesc}>
                    {project.description?.substring(0, 90) || "No description"}
                    {project.description?.length > 90 ? "…" : ""}
                  </p>

                  <div className={styles.cardLinks}>
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        🐙 GitHub
                      </a>
                    )}
                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        🔗 Live
                      </a>
                    )}
                  </div>

                  <div className={styles.cardActions}>
                    <button
                      className={styles.editBtn}
                      onClick={() => handleEdit(project)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleDelete(project.id)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

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

/* ---------- Small Stat Card Component ---------- */
const StatCard = ({ icon, label, value, color }) => (
  <div className={`${styles.statCard} ${styles[color]}`}>
    <div className={styles.statIcon}>{icon}</div>
    <div>
      <p className={styles.statLabel}>{label}</p>
      <p className={styles.statValue}>{value}</p>
    </div>
  </div>
);

export default Dashboard;
