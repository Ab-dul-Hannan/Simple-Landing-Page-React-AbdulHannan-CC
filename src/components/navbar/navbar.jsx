import React from 'react'
import styles from './navbar.module.css'
import { CornerDownRight } from 'lucide-react'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logobtn}>Landing Page</div>
      <div className={styles.announce}>
        <CornerDownRight size={18} color="#1c2120" /> <p>2026 &copy; Abdul Hannan. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Navbar