import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutPrivew.module.css';
import aboutphoto from '../../../assets/images/about-me.jpg'

const AboutPreview = () => {
  return (
    <section className={styles.aboutPreview}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img 
            src={aboutphoto}   
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.bio}>
            I’m Haymanot, a passionate software engineering and full‑stack web developer with 2+ years of experience 
            building modern web applications. I love turning complex problems into simple, 
            elegant designs.
          </p>
          <p className={styles.bio}>
            When I’m not coding, we’ll find me exploring new tech, contributing to 
            open source and any real problem to solve in software
          </p>
          <div className={styles.skills}>
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Tailwind</span>
          </div>
          <Link to="/About" className={styles.btnAbout}>
            More About Me →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;