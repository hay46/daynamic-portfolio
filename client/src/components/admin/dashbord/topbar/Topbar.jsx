import React from "react";
import { useAuth } from "../../../../context/AuthContext";
import styles from "./Topbar.module.css";

const Topbar = ({ title = "Dashboard" }) => {
  const { user } = useAuth();

  return (
    <header className={styles.topbar}>
      <div>
        <h2 className={styles.title}>{title}</h2>
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
