import { useState } from "react";
import styles from "./ContactForm.module.css";

const initialForm = { name: "", email: "", subject: "", message: "" };

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const validate = () => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!formData.email.trim()) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Please enter a valid email address.";
    if (!formData.subject.trim()) return "Please enter a subject.";
    if (formData.message.trim().length < 10)
      return "Message must be at least 10 characters.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      // TODO: replace with your real backend endpoint
      // await api.post("/contact", formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setFormData(initialForm);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <header className={styles.header}>
        <h3 className={styles.title}>Send a Message</h3>
        <p className={styles.subtitle}>I'll get back to you within 24 hours.</p>
      </header>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-name" className={styles.label}>
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Jane Doe"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email" className={styles.label}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="jane@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-subject" className={styles.label}>
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          placeholder="Project inquiry"
          value={formData.subject}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell me about your project..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.textarea}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={styles.submitBtn}
      >
        {status === "sending" ? (
          <>
            <span className={styles.spinner} aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            Send Message
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
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </>
        )}
      </button>

      {status === "success" && (
        <p className={styles.success} role="status">
          ✅ Message sent successfully! I'll be in touch soon.
        </p>
      )}

      {status === "error" && error && (
        <p className={styles.errorMsg} role="alert">
          ⚠️ {error}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
