import { createContext, useContext, useState, useEffect } from 'react';
import api from '../service/api';
import { useAuth } from './AuthContext';

const PortfolioContext = createContext();

// Custom hook to use portfolio context
export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

// Provider component
export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  // Fetch projects (public route – no token required)
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await api.get('/portfolio/getall');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch projects once on mount (no token needed – but you can keep the condition if you prefer)
  useEffect(() => {
    fetchProjects();
  }, []); // removed token dependency because /getall is public

  // Add a new project
  const addProject = async (projectData) => {
    try {
      setLoading(true);
      // Map frontend field 'description' to backend field 'discription'
      const payload = {
        title: projectData.title,
        discription: projectData.description,    // note: backend uses 'discription'
        image: projectData.image,
        github_link: projectData.github_link,
        live_link: projectData.live_link,
      };
      const response = await api.post('/portfolio/addportfolio', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // The backend returns the new project (with id). Use it to update local state.
      setProjects((prev) => [...prev, response.data.results || response.data]);
      return { success: true };
    } catch (error) {
      console.error('Error adding project:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to add project',
      };
    } finally {
      setLoading(false);
    }
  };

  // Update an existing project
  const updateProject = async (id, projectData) => {
    try {
      setLoading(true);
      const payload = {
        title: projectData.title,
        discription: projectData.description,
        image: projectData.image,
        github_link: projectData.github_link,
        live_link: projectData.live_link,
      };
      await api.put(`/portfolio/edit_portfolio/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Update local state
      setProjects((prev) =>
        prev.map((p) =>
          p.id === id
            ? {
                ...p,
                title: projectData.title,
                description: projectData.description,
                image: projectData.image,
                github_link: projectData.github_link,
                live_link: projectData.live_link,
              }
            : p
        )
      );
      return { success: true };
    } catch (error) {
      console.error('Error updating project:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to update project',
      };
    } finally {
      setLoading(false);
    }
  };

  // Delete a project
  const deleteProject = async (id) => {
    try {
      setLoading(true);
      await api.delete(`/portfolio/delete_portfolio/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects((prev) => prev.filter((project) => project.id !== id));
      return { success: true };
    } catch (error) {
      console.error('Error deleting project:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to delete project',
      };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    projects,
    loading,
    fetchProjects,
    addProject,
    updateProject,   // ✅ now available
    deleteProject,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;