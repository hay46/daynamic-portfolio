import styles from "./SocialLinks.module.css";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/hay46",
    icon: "🐙",
    accent: "#cbd5e1",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "🔗",
    accent: "#3b82f6",
  },
  {
    name: "Telegram",
    url: "https://t.me/yourusername",
    icon: "✈️",
    accent: "#06b6d4",
  },
  {
    name: "Facebook",
    url: "https://web.facebook.com/login/",
    icon: "📘",
    accent: "#6366f1",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/haymanotebabu2/",
    icon: "📸",
    accent: "#ec4899",
  },
];

const SocialLinks = () => {
  return (
    <section className={styles.socials} aria-label="Social links">
      <header className={styles.header}>
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Connect
        </span>
        <h3 className={styles.title}>Follow Along</h3>
        <p className={styles.subtitle}>
          Find me on these platforms — let's stay in touch.
        </p>
      </header>

      <div className={styles.links}>
        {socials.map((s, idx) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            style={{
              "--accent": s.accent,
              "--delay": `${idx * 0.06}s`,
            }}
            aria-label={s.name}
          >
            <span className={styles.iconWrap}>
              <span className={styles.icon} aria-hidden="true">
                {s.icon}
              </span>
            </span>
            <span className={styles.linkText}>{s.name}</span>
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
            <span className={styles.linkGlow} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
