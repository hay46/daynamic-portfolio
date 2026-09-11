import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"; // ← adjust path to your Sidebar
import Topbar from "./Topbar"; // ← adjust path to your Topbar
import styles from "./DashbordLayout.module.css";

const DashbordLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className={styles.layout}>
      {/* Sidebar — receives props to control mobile visibility */}
      <div
        className={`${styles.sidebarWrapper} ${sidebarOpen ? styles.open : ""}`}
      >
        <Sidebar onClose={closeSidebar} />
      </div>

      {/* Dark overlay on mobile when sidebar is open */}
      {sidebarOpen && (
        <div className={styles.overlay} onClick={closeSidebar}></div>
      )}

      {/* Main content */}
      <div className={styles.main}>
        <Topbar onMenuClick={toggleSidebar} />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashbordLayout;
