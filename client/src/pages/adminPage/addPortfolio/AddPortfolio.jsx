import React, { useState } from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import styles from './Modal.module.css';

const CreatePortfolioModal = ({ onClose }) => {
  const { addProject } = usePortfolio();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    github_link: '',
    live_link: '',
    category: 'Web App'
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
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Create Portfolio Project</h2>
        <form onSubmit={handleSubmit}>
          <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" rows="3" value={formData.description} onChange={handleChange} required />
          <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
          <input name="github_link" placeholder="GitHub Link" value={formData.github_link} onChange={handleChange} />
          <input name="live_link" placeholder="Live Demo Link" value={formData.live_link} onChange={handleChange} />
          <select name="category" value={formData.category} onChange={handleChange}>
            <option>Web App</option>
            <option>Mobile App</option>
            <option>UI Design</option>
          </select>
          <div className={styles.modalActions}>
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit" disabled={submitting}>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePortfolioModal;