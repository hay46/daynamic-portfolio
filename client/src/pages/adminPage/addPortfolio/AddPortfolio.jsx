import React, { useState } from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import styles from './CreatePortfolioModal.module.css';

const CreatePortfolioModal = ({ onClose }) => {
  const { addProject } = usePortfolio();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    github_link: '',
    live_link: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const result = await addProject(formData);
    setSubmitting(false);
    if (result.success) {
      onClose();
    } else {
      alert(result.message || 'Failed to add project');
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        <h2>Create Portfolio Project</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Title *</label>
            <input
              type="text"
              name="title"
              placeholder="e.g., E‑Commerce Platform"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Description *</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Describe your project..."
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Image URL</label>
            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label>GitHub Link</label>
              <input
                type="url"
                name="github_link"
                placeholder="https://github.com/..."
                value={formData.github_link}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Live Demo Link</label>
              <input
                type="url"
                name="live_link"
                placeholder="https://example.com"
                value={formData.live_link}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className={styles.submitBtn} disabled={submitting}>
              {submitting ? 'Creating...' : 'Create Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePortfolioModal;