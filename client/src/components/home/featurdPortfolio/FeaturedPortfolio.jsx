import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { usePortfolio } from "../../../context/PortfolioContext";
import styles from "./FeaturdPortfolio.module.css";

const FeaturedPortfolio = () => {
  const { projects = [], loading } = usePortfolio();
  const featured = Array.isArray(projects) ? projects.slice(0, 3) : [];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ---------- Loading: skeleton cards ----------
  if (loading) {
    return (
      <section className={styles.featured}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Portfolio
            </span>
            <h2 className={styles.title}>
              Featured <span className={styles.gradient}>Projects</span>
            </h2>
            <p className={styles.subtitle}>Some of my best work</p>
          </div>
          <div className={styles.grid}>
            {[1, 2, 3].map((n) => (
              <div key={n} className={styles.skeletonCard}>
                <div className={styles.skeletonImage} />
                <div className={styles.skeletonContent}>
                  <div
                    className={styles.skeletonLine}
                    style={{ width: "70%" }}
                  />
                  <div
                    className={styles.skeletonLine}
                    style={{ width: "90%" }}
                  />
                  <div
                    className={styles.skeletonLine}
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ---------- No projects: render nothing ----------
  if (featured.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className={`${styles.featured} ${visible ? styles.visible : ""}`}
      id="portfolio"
    >
      {/* Background decoration */}
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.container}>
        {/* ---------- Header ---------- */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Portfolio
          </span>
          <h2 className={styles.title}>
            Featured <span className={styles.gradient}>Projects</span>
          </h2>
          <p className={styles.subtitle}>Some of my best work</p>
        </div>

        {/* ---------- Grid ---------- */}
        <div className={styles.grid}>
          {featured.map((project, index) => (
            <article
              key={project.id}
              className={styles.card}
              style={{ "--delay": `${index * 0.12}s` }}
            >
              {/* Image area */}
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

                {/* Floating action button on hover */}
                <Link
                  to={`/portfolio/${project.id}`}
                  className={styles.imageAction}
                  aria-label={`View ${project.title}`}
                >
                  <svg
                    width="20"
                    height="20"
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

                {project.technology && (
                  <div className={styles.techBadge}>{project.technology}</div>
                )}
              </div>

              {/* Content */}
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>
                  {project.description
                    ? project.description.substring(0, 100) +
                      (project.description.length > 100 ? "…" : "")
                    : "No description provided."}
                </p>

                <div className={styles.cardFooter}>
                  <Link
                    to={`/portfolio/${project.id}`}
                    className={styles.cardLink}
                  >
                    View Project
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
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ---------- See All ---------- */}
        <div className={styles.seeAll}>
          <Link to="/portfolio" className={styles.seeAllBtn}>
            See All Projects
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;
