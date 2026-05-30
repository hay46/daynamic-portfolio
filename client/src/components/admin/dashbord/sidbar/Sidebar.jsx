//import React from 'react
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className ={styles.sidebar}>
<h2 className={styles.logo}>Admin</h2>
    <ul>
      <li><Link to="/admin">Dashboard</Link></li>
    </ul>
    </div>
  )
}

export default Sidebar