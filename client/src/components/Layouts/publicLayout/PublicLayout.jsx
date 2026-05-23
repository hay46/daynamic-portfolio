import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../common/navbar/Navbar'
import Footer from '../../../components/common/footer/Footer'
import './PublicLayout.module.css'
import styles from'./PublicLayout.module.css'

const PublicLayout = () => {
  return (
    <div className='styles.layout'>
        <Navbar/>
        <main className='style.main'>

        </main>

        <Footer/>

    </div>
  )
}

export default PublicLayout