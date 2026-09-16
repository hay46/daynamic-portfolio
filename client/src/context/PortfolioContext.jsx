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

const normalizeList = (data) => {
  if (Array.isArray(data)) return data;
  return data?.results || data?.projects || data?.data || [];
};

const normalizeOne = (data) => {
  if (!data) return null;
  return data.results || data.project || data.data || data;
};

const toBackendPayload = (formData) => ({
  title: formData.title,
  discription: formData.description, // frontend "description" → backend "discription"
  image: formData.image,
  github_link: formData.github_link,
  live_link: formData.live_link,
  technology: formData.technology,
});

// ✅ THE FIX: handle id, Id, and _id
const toFrontendProject = (raw) => ({
  id: raw.id ?? raw.Id ?? raw._id,
  title: raw.title,
  description: raw.description ?? raw.discription,
  image: raw.image,
  github_link: raw.github_link,
  live_link: raw.live_link,
  technology: raw.technology,
});

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

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await api.get("/portfolio/getall");
      const list = normalizeList(response.data).map(toFrontendProject);
      setProjects(list);
      return { success: true };
    } catch (error) {
      setProjects([]);
      return handleError(error, "Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (!token) setProjects([]);
  }, [token]);

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
        await fetchProjects();
      }
      return { success: true };
    } catch (error) {
      return handleError(error, "Failed to add project");
    } finally {
      setLoading(false);
    }
  };

  const updateProject = async (id, projectData) => {
    try {
      setLoading(true);
      const payload = toBackendPayload(projectData);

      await api.put(`/portfolio/edit_portfolio/${id}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // ✅ String-safe comparison
      setProjects((prev) =>
        prev.map((p) =>
          String(p.id) === String(id)
            ? { ...p, ...toFrontendProject({ ...payload, id }) }
            : p,
        ),
      );
      return { success: true };
    } catch (error) {
      return handleError(error, "Failed to update project");
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id) => {
    try {
      setLoading(true);
      await api.delete(`/portfolio/delete_portfolio/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // ✅ String-safe filter
      setProjects((prev) => prev.filter((p) => String(p.id) !== String(id)));
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
