import styles from "./PortfolioFilter.module.css";

const categories = ["All", "Web App", "Mobile App", "UI Design"];

const PortfolioFilter = ({
  activeCategory,
  onFilterChange,
  totalCount = 0,
  filteredCount = 0,
}) => {
  return (
    <div className={styles.filterWrap}>
      <div
        className={styles.filter}
        role="tablist"
        aria-label="Portfolio categories"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.btn} ${isActive ? styles.active : ""}`}
              onClick={() => onFilterChange(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {totalCount > 0 && (
        <p className={styles.count} aria-live="polite">
          Showing{" "}
          <strong className={styles.countNumber}>{filteredCount}</strong> of{" "}
          <strong className={styles.countNumber}>{totalCount}</strong>{" "}
          {totalCount === 1 ? "project" : "projects"}
        </p>
      )}
    </div>
  );
};

export default PortfolioFilter;
