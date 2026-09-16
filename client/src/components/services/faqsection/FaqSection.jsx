import { useEffect, useRef, useState } from "react";
import styles from "./FaqSection.module.css";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the complexity. A simple website may take 2–3 weeks, while a complex web app can take 2–3 months. I always provide a timeline upfront.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes! I provide 30 days of free support after launch, and you can purchase ongoing maintenance plans for continued updates and monitoring.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I work with React, Node.js, Express, MongoDB, MySQL, Tailwind CSS, and many other modern tools. I pick the right stack for each project's needs.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply contact me via the contact form or email. We'll schedule a free consultation to discuss your needs, then I'll send a proposal with scope and timeline.",
  },
  {
    question: "Do you work with clients remotely?",
    answer:
      "Absolutely. I work with clients worldwide using tools like Slack, Zoom, and Notion. Time-zone flexibility is part of my workflow.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // first one open by default
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className={`${styles.faq} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            FAQ
          </span>
          <h2 className={styles.title}>
            Frequently Asked <span className={styles.gradient}>Questions</span>
          </h2>
          <p className={styles.subtitle}>
            Common questions about working with me. Still curious? Get in touch.
          </p>
        </header>

        <div className={styles.list}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={idx}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                style={{ "--delay": `${idx * 0.06}s` }}
              >
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <span
                      className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                    >
                      <span className={styles.iconBar} />
                      <span className={styles.iconBar} />
                    </span>
                  </span>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  className={`${styles.answerWrap} ${isOpen ? styles.answerWrapOpen : ""}`}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={styles.ctaRow}>
          <p className={styles.ctaText}>Still have questions?</p>
          <a href="/contact" className={styles.ctaButton}>
            Get in Touch
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
