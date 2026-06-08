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

  // Fetch projects
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

  // Fetch projects when token exists (on mount and token changes)
  useEffect(() => {
    if (token) {
      fetchProjects();
    }
  }, [token]);

  // Add a new project
  const addProject = async (projectData) => {
    try {
      setLoading(true);
      const response = await api.post('/portfolio/addportfolio', projectData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Update the local state with the new project
      setProjects((prev) => [...prev, response.data]);
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

  // Delete a project
  const deleteProject = async (id) => {
    try {
      setLoading(true);
      await api.delete(`/portfolio/delete_portfolio/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Remove the deleted project from local state
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

  // Value object to be provided to consumers
  const value = {
    projects,
    loading,
    fetchProjects,
    addProject,
    deleteProject,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

// Default export
export default PortfolioProvider;