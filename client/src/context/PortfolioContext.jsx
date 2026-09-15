import { createContext, useContext, useState, useEffect } from "react";
import api from "../service/api";
import { useAuth } from "./AuthContext";

const PortfolioContext = createContext();

// Custom hook
export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};

// --- Helpers ---

// Always return an array, no matter what the backend sends
const normalizeList = (data) => {
  if (Array.isArray(data)) return data;
  return data?.results || data?.projects || data?.data || [];
};

// Always return a single project object
const normalizeOne = (data) => {
  if (!data) return null;
  return data.results || data.project || data.data || data;
};

// Map frontend shape → backend shape (handles the 'discription' typo)
const toBackendPayload = (formData) => ({
  title: formData.title,
  discription: formData.description, // frontend "description" → backend "discription"
  image: formData.image,
  github_link: formData.github_link,
  live_link: formData.live_link,
  technology: formData.technology, // was missing before
});

// Map backend shape → frontend shape (so local state stays consistent)
const toFrontendProject = (raw) => ({
  id: raw.id,
  title: raw.title,
  description: raw.description ?? raw.discription, // read whichever exists
  image: raw.image,
  github_link: raw.github_link,
  live_link: raw.live_link,
  technology: raw.technology,
});

// Central error handler — detects 401 and forces logout
const handleError = (error, fallbackMessage) => {
  console.error(fallbackMessage, error);

  if (error.response?.status === 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  return {
    success: false,
    message: error.response?.data?.message || fallbackMessage,
  };
};

// --- Provider ---

export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  // Fetch all projects (public)
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await api.get("/portfolio/getall");
      const list = normalizeList(response.data).map(toFrontendProject);
      setProjects(list);
      return { success: true };
    } catch (error) {
      setProjects([]); // never leave state in a broken shape
      return handleError(error, "Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  // Fetch once on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  // Clear projects when the user logs out
  useEffect(() => {
    if (!token) setProjects([]);
  }, [token]);

  // Add project (protected)
  const addProject = async (projectData) => {
    try {
      setLoading(true);
      const payload = toBackendPayload(projectData);

      const response = await api.post("/portfolio/addportfolio", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const created = toFrontendProject(normalizeOne(response.data));
      if (created && created.id) {
        setProjects((prev) => [...prev, created]);
      } else {
        // Fallback: refresh from server if shape is unexpected
        await fetchProjects();
      }
      return { success: true };
    } catch (error) {
      return handleError(error, "Failed to add project");
    } finally {
      setLoading(false);
    }
  };

  // Update project (protected)
  const updateProject = async (id, projectData) => {
    try {
      setLoading(true);
      const payload = toBackendPayload(projectData);

      await api.put(`/portfolio/edit_portfolio/${id}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Update local state using the SAME shape as everywhere else
      setProjects((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, ...toFrontendProject({ ...payload, id }) } : p,
        ),
      );
      return { success: true };
    } catch (error) {
      return handleError(error, "Failed to update project");
    } finally {
      setLoading(false);
    }
  };

  // Delete project (protected)
  const deleteProject = async (id) => {
    try {
      setLoading(true);
      await api.delete(`/portfolio/delete_portfolio/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects((prev) => prev.filter((p) => p.id !== id));
      return { success: true };
    } catch (error) {
      return handleError(error, "Failed to delete project");
    } finally {
      setLoading(false);
    }
  };

  const value = {
    projects,
    loading,
    fetchProjects,
    addProject,
    updateProject,
    deleteProject,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
