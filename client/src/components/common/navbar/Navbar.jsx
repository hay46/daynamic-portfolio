import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../../assets/images/group logo photo_2026-02-21_01-35-49.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getActiveClass = ({ isActive }) => isActive ? styles.active : '';

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="portfolio logo" />
        <NavLink to="/">VISION</NavLink>
      </div>

      <div 
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>     
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><NavLink to="/" className={getActiveClass} onClick={closeMenu} end>Home</NavLink></li>
        <li><NavLink to="/about" className={getActiveClass} onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/portfolio" className={getActiveClass} onClick={closeMenu}>Portfolio</NavLink></li>
        <li><NavLink to="/service" className={getActiveClass} onClick={closeMenu}>Service</NavLink></li>
        <li><NavLink to="/contact" className={getActiveClass} onClick={closeMenu}>Contact</NavLink></li>
        <li><NavLink to="/login" className={getActiveClass} onClick={closeMenu}>Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;