import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Logout?")) {
      logout();
      navigate("/login");
    }
  };

  return (
    <aside className={styles.sidebar}>
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
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <span className={styles.icon}>📊</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/portfolio"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <span className={styles.icon}>📁</span>
          <span>Portfolio</span>
        </NavLink>

        <NavLink
          to="/admin/messages"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <span className={styles.icon}>💬</span>
          <span>Messages</span>
        </NavLink>

        <NavLink
          to="/admin/settings"
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
