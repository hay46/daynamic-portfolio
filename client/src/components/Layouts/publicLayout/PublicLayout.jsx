import { Outlet } from 'react-router-dom'
import Navbar from '../../common/navbar/Navbar'
import Footer from '../../../components/common/footer/Footer'
import styles from './PublicLayout.module.css'   // only one import

const PublicLayout = () => {
  return (
    <div className={styles.layout}>              
      <Navbar />
      <main className={styles.main}>             
        <Outlet />                               
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout