import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebare from '../../admin/dashbord/sidbar/Sidebar.jsx'
import Topbar from '../../admin/dashbord/topbar/Topbar.jsx'
import styles from './DashbordLayout.module.css'
const DashbordLayout = () => {
  return (
 <div  className={styles.dashboard}>
    <Sidebare/>
    <div className={styles.content}>
    <Topbar/>
      <main className={styles.main}>             
            <Outlet />                               
          </main>
   </div>
 </div>
  );
};

export default DashbordLayout