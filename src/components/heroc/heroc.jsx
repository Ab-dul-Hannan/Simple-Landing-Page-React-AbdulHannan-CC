import React from 'react'
import styles from './heroc.module.css'
import { ArrowUpRight } from 'lucide-react'

const Heroc = () => {
  return (
    <div className={styles.heroc}>
        <div className={styles.contentheroc}>
            <h1>A <span>Place</span> Where<br />Art Meets<br /><span>Code</span></h1>
            <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
        </div>
        <div className={styles.btn}>
            <ArrowUpRight size={67} color="#1c2120" className={styles.arrow}/>
        </div>
    </div>
  )
}

export default Heroc