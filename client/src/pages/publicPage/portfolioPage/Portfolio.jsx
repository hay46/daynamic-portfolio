import { useEffect, useState } from "react";
import PortfolioFilter from "../../../components/portfilo/portfolioFilter/PortfolioFilter";
import PortfolioGrid from "../../../components/portfilo/portfolioGrid/PortfolioGrid";
import { usePortfolio } from "../../../context/PortfolioContext";
import HeroSection from "../../../components/common/hero/HeroSection";
import portfolioHeroImage from "../../../assets/images/portfolio-hero.png";
import styles from "./Portfolio.module.css";

const PortfolioPage = () => {
  const { projects, loading, fetchProjects } = usePortfolio();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (!Array.isArray(projects)) {
      setFilteredProjects([]);
      return;
    }

    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(
          (project) =>
            (project.category || "").toLowerCase() ===
            activeCategory.toLowerCase(),
        ),
      );
    }
  }, [projects, activeCategory]);

  const handleFilterChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <main className={styles.portfolioPage}>
      {/* ---------- HERO ---------- */}
      <HeroSection
        badge="My Work"
        title="Explore My"
        gradientText="Projects"
        subtitle="A collection of my best work — from web apps to UI designs."
        btnPrimaryText="View All Projects"
        btnPrimaryLink="#projects"
        btnSecondaryText="Hire Me"
        btnSecondaryLink="/contact"
        imageSrc={portfolioHeroImage}
        imageAlt="Portfolio showcase"
      />

      {/* ---------- FILTER + GRID ---------- */}
      <section className={styles.projectsSection} id="projects">
        <div className={styles.glow1} aria-hidden="true" />
        <div className={styles.glow2} aria-hidden="true" />

        <div className={styles.container}>
          {/* Header */}
          <header className={styles.header}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Portfolio
            </span>
            <h2 className={styles.title}>
              All <span className={styles.gradient}>Projects</span>
            </h2>
            <p className={styles.subtitle}>
              Browse my work by category or view everything at once.
            </p>
          </header>

          {/* Filter */}
          <PortfolioFilter
            activeCategory={activeCategory}
            onFilterChange={handleFilterChange}
            totalCount={projects?.length || 0}
            filteredCount={filteredProjects.length}
          />

          {/* Grid */}
          <PortfolioGrid projects={filteredProjects} loading={loading} />
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
