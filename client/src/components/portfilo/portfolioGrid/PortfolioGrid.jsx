import { Link } from "react-router-dom";
import styles from "./PortfolioGrid.module.css";

const PortfolioGrid = ({ projects = [], loading }) => {
  // ---------- Loading skeleton ----------
  if (loading) {
    return (
      <div className={styles.grid}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className={styles.skeletonCard}>
            <div className={styles.skeletonImage} />
            <div className={styles.skeletonContent}>
              <div className={styles.skeletonLine} style={{ width: "70%" }} />
              <div className={styles.skeletonLine} style={{ width: "90%" }} />
              <div className={styles.skeletonLine} style={{ width: "50%" }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ---------- Empty state ----------
  if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon} aria-hidden="true">
          📁
        </div>
        <h3 className={styles.emptyTitle}>No projects found</h3>
        <p className={styles.emptyText}>
          Try a different category or check back later for new work.
        </p>
      </div>
    );
  }

  // ---------- Grid ----------
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => {
        const projectId = project.id ?? project.Id ?? project._id;
        const description = project.description ?? project.discription;

        return (
          <article
            key={projectId ?? index}
            className={styles.card}
            style={{ "--delay": `${index * 0.06}s` }}
          >
            <div className={styles.cardGlow} aria-hidden="true" />

            {/* ---------- IMAGE ---------- */}
            <div className={styles.imageWrapper}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                  loading="lazy"
                />
              ) : (
                <div className={styles.imagePlaceholder}>
                  <span>No Image</span>
                </div>
              )}

              <div className={styles.imageOverlay} aria-hidden="true" />

              {/* Floating action button (top-right) */}
              {projectId && (
                <Link
                  to={`/portfolio/${projectId}`}
                  className={styles.imageAction}
                  aria-label={`View ${project.title}`}
                >
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
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </Link>
              )}

              {/* Tech badge */}
              {project.technology && (
                <div className={styles.techBadge}>{project.technology}</div>
              )}
            </div>

            {/* ---------- CONTENT ---------- */}
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{project.title}</h3>

              <p className={styles.cardDescription}>
                {description
                  ? description.length > 120
                    ? description.substring(0, 120) + "…"
                    : description
                  : "No description provided."}
              </p>

              {/* Links */}
              {(project.github_link || project.live_link) && (
                <div className={styles.links}>
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.59.23 2.76.11 3.05.73.8 1.17 1.82 1.17 3.07 0 4.4-2.69 5.37-5.25 5.65.42.36.79 1.07.79 2.17v3.22c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                      </svg>
                      GitHub
                    </a>
                  )}

                  {project.live_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              )}

              {/* Read more */}
              {projectId && (
                <Link
                  to={`/portfolio/${projectId}`}
                  className={styles.readMore}
                >
                  View Project
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default PortfolioGrid;
