import styles from "./ContactMap.module.css";

const ContactMap = () => {
  const mapSrc =
    "https://www.openstreetmap.org/export/embed.html?bbox=38.7573%2C8.9806%2C38.7973%2C9.0006&layer=mapnik&marker=9.0106%2C38.7573";

  return (
    <section className={styles.mapSection} aria-label="Location map">
      <header className={styles.header}>
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Location
        </span>
        <h3 className={styles.title}>Find Me Here</h3>
        <p className={styles.subtitle}>
          Based in Addis Ababa — collaborating with clients worldwide.
        </p>
      </header>

      <div className={styles.mapWrapper}>
        <div className={styles.mapGlow} aria-hidden="true" />
        <iframe
          title="Location Map"
          src={mapSrc}
          className={styles.mapFrame}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default ContactMap;
