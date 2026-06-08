import React from 'react';
import styles from './PortfolioFilter.module.css';

const categories = ['All', 'Web App', 'Mobile App', 'UI Design'];

const PortfolioFilter = ({ activeCategory, onFilterChange }) => {
  return (
    <div className={styles.filter}>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`${styles.btn} ${activeCategory === cat ? styles.active : ''}`}
          onClick={() => onFilterChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilter;