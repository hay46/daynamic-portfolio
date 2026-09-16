import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { usePortfolio } from "../../../context/PortfolioContext";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = () => {
  const { id } = useParams(); // from the URL: /portfolio/:id
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

  // ---------- Loading state ----------
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
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
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
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.59.23 2.76.11 3.05.73.8 1.17 1.82 1.17 3.07 0 4.4-2.69 5.37-5.25 5.65.42.36.79 1.07.79 2.17v3.22c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                </svg>
              </a>
            )}
          </div>
        )}

        {/* Back */}
        <div className={styles.backRow}>
          <Link to="/portfolio" className={styles.backLink}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to all projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
