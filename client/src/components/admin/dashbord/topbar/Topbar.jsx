import React from "react";
import { useAuth } from "../../../../context/AuthContext";
import styles from "./Topbar.module.css";

const Topbar = ({ onMenuClick }) => {
  // ✅ accept onMenuClick
  const { user } = useAuth();

  return (
    <header className={styles.topbar}>
      {/* ✅ Hamburger — mobile only */}
      <button
        className={styles.menuBtn}
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        ☰
      </button>

      <div className={styles.titleGroup}>
        <h2 className={styles.title}>Dashboard</h2>
        <p className={styles.subtitle}>Welcome back 👋</p>
      </div>

      <div className={styles.right}>
        <button className={styles.iconBtn} aria-label="Notifications">
          🔔
          <span className={styles.dot}></span>
        </button>

        <div className={styles.profile}>
          <div className={styles.avatar}>
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
          <div className={styles.profileInfo}>
            <p className={styles.name}>{user?.name || "User"}</p>
            <p className={styles.role}>Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
