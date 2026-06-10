import React, { useState } from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import styles from './EditPortfolioModal.module.css';

const EditPortfolioModal = ({ project, onClose }) => {
  const { updateProject } = usePortfolio();
  const [formData, setFormData] = useState({
    title: project.title || '',
    description: project.description || '',
    image: project.image || '',
    github_link: project.github_link || '',
    live_link: project.live_link || '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const result = await updateProject(project.id, formData);
    setSubmitting(false);
    if (result.success) {
      onClose();
    } else {
      alert(result.message || 'Failed to update project');
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        <h2>Edit Portfolio Project</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Title *</label>
            <input
              type="text"
              name="title"
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
              value={formData.image}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label>GitHub Link</label>
              <input
                type="url"
                name="github_link"
                value={formData.github_link}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Live Demo Link</label>
              <input
                type="url"
                name="live_link"
                value={formData.live_link}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className={styles.updateBtn} disabled={submitting}>
              {submitting ? 'Updating...' : 'Update Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPortfolioModal;