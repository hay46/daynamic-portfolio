import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://web.facebook.com/login/",
    icon: "fab fa-facebook-f",
  },
  {
    name: "Twitter",
    url: "https://x.com/EbabuHayma54271",
    icon: "fab fa-twitter",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/haymanotebabu2/",
    icon: "fab fa-instagram",
  },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "fab fa-linkedin-in" },
  { name: "GitHub", url: "https://github.com/hay46", icon: "fab fa-github" },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Service", to: "/service" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this to a real newsletter endpoint
    console.log("Subscribe:", email);
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className={styles.footer}>
      {/* Background decoration */}
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* ---------- BRAND ---------- */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              VISION
              <span className={styles.logoDot} />
            </Link>
            <p className={styles.description}>
              Crafting digital experiences that inspire and innovate. We bring
              your vision to life with creativity and precision.
            </p>

            <div className={styles.socialIcons}>
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={styles.socialIcon}
                >
                  <i className={s.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* ---------- QUICK LINKS ---------- */}
          <div className={styles.links}>
            <h3 className={styles.heading}>
              <span className={styles.headingDot} />
              Quick Links
            </h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={styles.link}>
                    <span className={styles.linkArrow}>→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- CONTACT ---------- */}
          <div className={styles.contact}>
            <h3 className={styles.heading}>
              <span className={styles.headingDot} />
              Contact
            </h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>123 Vision Street, Creative City, CC 12345</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <a href="tel:+251946215450" className={styles.contactLink}>
                  +251 946 215 450
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <a
                  href="mailto:haymanotebabu@gmail.com"
                  className={styles.contactLink}
                >
                  haymanotebabu@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* ---------- NEWSLETTER ---------- */}
          <div className={styles.newsletter}>
            <h3 className={styles.heading}>
              <span className={styles.headingDot} />
              Stay Updated
            </h3>
            <p className={styles.newsletterText}>
              Subscribe to get the latest insights and updates.
            </p>

            <form
              className={styles.newsletterForm}
              onSubmit={handleSubscribe}
              aria-label="Newsletter subscription"
            >
              <div className={styles.inputWrap}>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <button type="submit" className={styles.subscribeBtn}>
                  <span className={styles.subscribeLabel}>Subscribe</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>

              {subscribed && (
                <p className={styles.successMsg} role="status">
                  ✅ Thanks for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* ---------- COPYRIGHT ---------- */}
        <div className={styles.copyright}>
          <p>
            © {currentYear} <strong>VISION</strong>. All rights reserved.
          </p>
          <p className={styles.builtWith}>
            Designed &amp; built with <span className={styles.heart}>♥</span> by
            Haymanot Ebabu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
