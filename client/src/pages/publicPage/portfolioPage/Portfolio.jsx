import React, { useState, useEffect } from 'react';
import PortfolioFilter from '../../../components/portfilo/portfolioFilter/PortfolioFilter';
import PortfolioGrid from '../../../components/portfilo/portfolioGrid/PortfolioGrid';
import { usePortfolio } from '../../../context/PortfolioContext';
import HeroSection from '../../../components/common/hero/HeroSection';

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
      <HeroSection/>
      <PortfolioFilter
        activeCategory={activeCategory}
        onFilterChange={handleFilterChange}
      />
      <PortfolioGrid projects={filteredProjects} loading={loading} />
    </div>
  );
};

export default PortfolioPage;