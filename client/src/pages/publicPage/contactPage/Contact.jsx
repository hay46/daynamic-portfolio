import React from 'react';
import PageBanner from '../../../components/abouts/pageBanner/PageBanner';
import ContactInfo from '../../../components/contact/contactInformation/ContactInfo';
import ContactForm from '../../../components/contact/contactForm/ContactForm';
import ContactMap from '../../../components/contact/map/ContactMap';
import SocialLinks from '../../../components/contact/socialLinks/SocialLinks';
import styles from './Contact.module.css';

const ContactPage = () => {
  return (
    <>
      <PageBanner title="Get in Touch" subtitle="Let's work together" />
      <div className={styles.container}>
        <div className={styles.grid}>
          <ContactInfo />
          <ContactForm />
        </div>
        <ContactMap />
        <SocialLinks />
      </div>
    </>
  );
};

export default ContactPage;