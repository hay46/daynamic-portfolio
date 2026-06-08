import React from 'react';
import styles from './SocialLinks.module.css';

const socials = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🐙' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: '🔗' },
  { name: 'Telegram', url: 'https://t.me/yourusername', icon: '✈️' },
  { name: 'Facebook', url: 'https://facebook.com/yourusername', icon: '📘' },
];

const SocialLinks = () => {
  return (
    <div className={styles.social}>
      <h3>Connect with Me</h3>
      <div className={styles.links}>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.icon}>{social.icon}</span>
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;