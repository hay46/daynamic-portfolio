import React, { useState } from 'react';
import styles from './FaqSection.module.css';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'It depends on the complexity. A simple website may take 2–3 weeks, while a complex web app can take 2–3 months. I always provide a timeline upfront.',
  },
  {
    question: 'Do you offer post‑launch support?',
    answer: 'Yes! I provide 30 days of free support after launch, and you can purchase ongoing maintenance plans.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'I work with React, Node.js, Express, MongoDB, Tailwind CSS, and many other modern tools.',
  },
  {
    question: 'How do we get started?',
    answer: 'Simply contact me via the contact form or email. We’ll schedule a free consultation to discuss your needs.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <div className={styles.list}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.question} onClick={() => toggle(idx)}>
                <span>{faq.question}</span>
                <span className={styles.icon}>{openIndex === idx ? '−' : '+'}</span>
              </div>
              {openIndex === idx && (
                <div className={styles.answer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;