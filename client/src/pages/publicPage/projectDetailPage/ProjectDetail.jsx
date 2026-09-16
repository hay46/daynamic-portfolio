import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { usePortfolio } from "../../../context/PortfolioContext";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects = [], loading } = usePortfolio();

  const [project, setProject] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (loading) return;

    const list = Array.isArray(projects) ? projects : [];

    // Normalize: backend may send `Id` (capital I) or `id`
    const found = list.find((p) => {
      const pid = p.id ?? p.Id ?? p._id;
      return String(pid) === String(id);
    });

    if (found) {
      setProject(found);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  }, [id, projects, loading]);

  // ---------- Loading ----------
  if (loading) {
    return (
      <section className={styles.detail}>
        <div className={styles.container}>
          <div className={styles.skeletonHeader} />
          <div className={styles.skeletonImage} />
          <div className={styles.skeletonLine} style={{ width: "80%" }} />
          <div className={styles.skeletonLine} style={{ width: "60%" }} />
        </div>
      </section>
    );
  }

  // ---------- Not found ----------
  if (notFound || !project) {
    return (
      <section className={styles.detail}>
        <div className={styles.container}>
          <div className={styles.notFound}>
            <div className={styles.notFoundIcon}>🔍</div>
            <h1 className={styles.notFoundTitle}>Project not found</h1>
            <p className={styles.notFoundText}>
              The project with ID <strong>"{id}"</strong> doesn't exist or has
              been removed.
            </p>
            <div className={styles.notFoundActions}>
              <Link to="/portfolio" className={styles.btnPrimary}>
                Back to Portfolio
              </Link>
              <button
                onClick={() => navigate(-1)}
                className={styles.btnSecondary}
                type="button"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ---------- Success ----------
  const description = project.description ?? project.discription;

  return (
    <section className={styles.detail}>
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.container}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link to="/portfolio" className={styles.breadcrumbLink}>
            Portfolio
          </Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>{project.title}</span>
        </nav>

        {/* Hero */}
        <header className={styles.hero}>
          {project.technology && (
            <span className={styles.techBadge}>{project.technology}</span>
          )}
          <h1 className={styles.title}>{project.title}</h1>
          {description && (
            <p className={styles.lead}>
              {description.length > 180
                ? description.substring(0, 180) + "…"
                : description}
            </p>
          )}
        </header>

        {/* Image */}
        {project.image && (
          <div className={styles.imageWrapper}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
              loading="lazy"
            />
          </div>
        )}

        {/* Body */}
        <div className={styles.body}>
          {description && (
            <div className={styles.block}>
              <h2 className={styles.blockTitle}>About this project</h2>
              <p className={styles.blockText}>{description}</p>
            </div>
          )}

          {project.technology && (
            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Technologies used</h2>
              <div className={styles.techList}>
                {String(project.technology)
                  .split(",")
                  .map((t) => t.trim())
                  .filter(Boolean)
                  .map((t) => (
                    <span key={t} className={styles.techChip}>
                      {t}
                    </span>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* External links */}
        {(project.github_link || project.live_link) && (
          <div className={styles.actions}>
            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                View Live Demo
              </a>
            )}
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                View Source Code
              </a>
            )}
          </div>
        )}

        {/* Back */}
        <div className={styles.backRow}>
          <Link to="/portfolio" className={styles.backLink}>
            ← Back to all projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
