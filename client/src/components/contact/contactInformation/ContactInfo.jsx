import styles from "./ContactInfo.module.css";

const contactItems = [
  {
    icon: "✉️",
    label: "Email",
    value: "haymanotebabu2@gmail.com",
    href: "mailto:haymanotebabu2@gmail.com",
    accent: "#6366f1",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+251 946 215 450",
    href: "tel:+251946215450",
    accent: "#ec4899",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: null,
    accent: "#10b981",
  },
];

const ContactInfo = () => {
  return (
    <aside className={styles.info}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Contact
        </span>
        <h3 className={styles.title}>Contact Information</h3>
        <p className={styles.subtitle}>
          Prefer to reach out directly? Here's how.
        </p>
      </header>

      <div className={styles.details}>
        {contactItems.map((item, idx) => {
          const Wrapper = item.href ? "a" : "div";
          const wrapperProps = item.href
            ? { href: item.href, className: styles.item }
            : { className: styles.item };

          return (
            <Wrapper
              key={item.label}
              {...wrapperProps}
              style={{
                "--accent": item.accent,
                "--delay": `${idx * 0.08}s`,
              }}
            >
              <div className={styles.iconWrap}>
                <span className={styles.icon} aria-hidden="true">
                  {item.icon}
                </span>
              </div>
              <div className={styles.content}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.value}>{item.value}</span>
              </div>
              <span className={styles.itemGlow} aria-hidden="true" />
            </Wrapper>
          );
        })}
      </div>

      <div className={styles.availability}>
        <span className={styles.availableDot} aria-hidden="true" />
        <span>Available for freelance projects</span>
      </div>
    </aside>
  );
};

export default ContactInfo;
