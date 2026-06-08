import React from 'react';
import styles from './ContactMap.module.css';

const ContactMap = () => {
  // OpenStreetMap embed (free, no API key)
  const mapSrc = "https://www.openstreetmap.org/export/embed.html?bbox=38.7573%2C8.9806%2C38.7973%2C9.0006&layer=mapnik&marker=9.0106%2C38.7573";

  return (
    <div className={styles.map}>
      <iframe
        title="Location Map"
        src={mapSrc}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactMap;