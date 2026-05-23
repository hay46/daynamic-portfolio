import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand & Description */}
        <div className={styles.brand}>
          <div className={styles.logo}>VISION</div>
          <p className={styles.description}>
            Crafting digital experiences that inspire and innovate. 
            We bring your vision to life with creativity and precision.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https:/hay46/github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

       
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

       
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <ul>
            <li> 123 Vision Street, Creative City, CC 12345</li>
            <li> <a href="tel:+251946215450">+251  (946) 215-450</a></li>
            <li> <a href="haymanotebabu@gmail.com">haymanotebabu@gmail.com</a></li>
          </ul>
        </div>

        <div className={styles.newsletter}>
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest insights.</p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

     
      <div className={styles.copyright}>
        <p>&copy; {currentYear} VISION. All rights reserved. | Designed with </p>
      </div>
    </footer>
  );
};

export default Footer;