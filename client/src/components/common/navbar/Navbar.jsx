import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../../assets/images/group logo photo_2026-02-21_01-35-49.jpg";

const navItems = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Service", to: "/service" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Add a solid background once the user scrolls
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const getActiveClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.linkActive}` : styles.link;

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          {/* ---------- LOGO ---------- */}
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoImgWrap}>
              <img src={logo} alt="VISION logo" className={styles.logoImg} />
            </span>
            <span className={styles.logoText}>
              VISION
              <span className={styles.logoDot} />
            </span>
          </Link>

          {/* ---------- DESKTOP LINKS ---------- */}
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className={getActiveClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ---------- DESKTOP ACTIONS ---------- */}
          <div className={styles.actions}>
            <Link to="/login" className={styles.loginBtn}>
              Login
            </Link>
            <Link to="/contact" className={styles.ctaBtn}>
              Hire Me
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
            </Link>
          </div>

          {/* ---------- HAMBURGER ---------- */}
          <button
            type="button"
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ""}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ---------- MOBILE OVERLAY ---------- */}
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.overlayOpen : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ---------- MOBILE MENU ---------- */}
      <aside
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <ul className={styles.mobileLinks}>
          {navItems.map((item, idx) => (
            <li
              key={item.to}
              className={styles.mobileItem}
              style={{ "--delay": `${idx * 0.05}s` }}
            >
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.mobileLink} ${styles.mobileLinkActive}`
                    : styles.mobileLink
                }
                onClick={closeMenu}
              >
                <span className={styles.mobileLinkIndex}>0{idx + 1}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.mobileActions}>
          <Link
            to="/login"
            className={styles.mobileLoginBtn}
            onClick={closeMenu}
          >
            Login
          </Link>
          <Link
            to="/contact"
            className={styles.mobileCtaBtn}
            onClick={closeMenu}
          >
            Hire Me
          </Link>
        </div>

        <div className={styles.mobileFooter}>
          <span>© {new Date().getFullYear()} VISION</span>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
