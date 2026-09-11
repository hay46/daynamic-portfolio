import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import styles from "./Sidebar.module.css";

const Sidebar = ({ onClose }) => {
  // ✅ accept onClose
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Logout?")) {
      logout();
      if (onClose) onClose(); // close sidebar on mobile
      navigate("/login");
    }
  };

  // ✅ close sidebar after clicking a link on mobile
  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <aside className={styles.sidebar}>
      {/* Close button — only visible on mobile */}
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
        ✕
      </button>

      {/* Logo */}
      <div className={styles.logoBox}>
        <div className={styles.logoIcon}>P</div>
        <div className={styles.logoText}>
          <span>Portfolio</span>
          <small>Admin Panel</small>
        </div>
      </div>

      {/* Nav */}
      <nav className={styles.nav}>
        <p className={styles.navLabel}>MAIN</p>

        <NavLink
          to="/admin"
          end
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <span className={styles.icon}>📊</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/portfolio"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <span className={styles.icon}>📁</span>
          <span>Portfolio</span>
        </NavLink>

        <NavLink
          to="/admin/messages"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <span className={styles.icon}>💬</span>
          <span>Messages</span>
        </NavLink>

        <NavLink
          to="/admin/settings"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <span className={styles.icon}>⚙️</span>
          <span>Settings</span>
        </NavLink>
      </nav>

      {/* User + Logout */}
      <div className={styles.userBox}>
        <div className={styles.avatar}>
          {user?.name?.charAt(0)?.toUpperCase() || "U"}
        </div>
        <div className={styles.userInfo}>
          <p className={styles.userName}>{user?.name || "User"}</p>
          <p className={styles.userEmail}>{user?.email || "user@mail.com"}</p>
        </div>
      </div>

      <button className={styles.logoutBtn} onClick={handleLogout}>
        🚪 Logout
      </button>
    </aside>
  );
};

export default Sidebar;
