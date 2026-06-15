import React, { useState, useEffect } from 'react';
import PortfolioFilter from '../../../components/portfilo/portfolioFilter/PortfolioFilter';
import PortfolioGrid from '../../../components/portfilo/portfolioGrid/PortfolioGrid';
import { usePortfolio } from '../../../context/PortfolioContext';
import HeroSection from '../../../components/common/hero/HeroSection';
import portfolioHeroImage from '../../../assets/images/portfolio-hero.png'
import styles from './Portfolio.module.css'

const PortfolioPage = () => {
  const { projects, loading, fetchProjects } = usePortfolio();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetchProjects(); 
  }, []);

  useEffect(() => {
    if (!projects.length) return;

    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [projects, activeCategory]);

  const handleFilterChange = (category) => {
    setActiveCategory(category);
  };

  return (

    <div className="portfolio-page">
      <HeroSection
        badge="My Work"
        title="Explore My"
        gradientText="Projects"
        subtitle="A collection of my best work – from web apps to UI designs."
        btnPrimaryText="View All Projects"
        btnPrimaryLink="#projects"
        btnSecondaryText="Hire Me"
        btnSecondaryLink="/contact"
        imageSrc={portfolioHeroImage}
        imageAlt="Portfolio showcase"
      />
      <PortfolioFilter
        activeCategory={activeCategory}
        onFilterChange={handleFilterChange}
      />
      <PortfolioGrid projects={filteredProjects} loading={loading} />
    </div>
  );
};

export default PortfolioPage;