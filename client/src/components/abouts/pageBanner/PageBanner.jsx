import styles from "./PageBanner.module.css";

const PageBanner = ({ title, subtitle }) => {
  return (
    <section className={styles.banner}>
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.container}>
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Personal Profile
        </span>

        {title && (
          <h1 className={styles.title}>
            {title.split(" ").map((word, i) =>
              i === title.split(" ").length - 1 ? (
                <span key={i} className={styles.gradient}>
                  {word}
                </span>
              ) : (
                <span key={i}>{word} </span>
              ),
            )}
          </h1>
        )}

        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        {/* Decorative divider */}
        <div className={styles.divider} aria-hidden="true">
          <span className={styles.dividerLine} />
          <span className={styles.dividerDot} />
          <span className={styles.dividerLine} />
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
