import React from 'react'
import styles from './card.module.css'
import { ArrowRight } from 'lucide-react'

const Card = (props) => {
    return (
        <div className={styles.card}
            style={{ backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className={styles.number}>{props.id}</div>
            <div className={styles.cardlower}>
                <div className={styles.cardcontent}>
                    {props.content || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                </div>
                <div className={styles.cardbtns}>
                    <button className={styles.readmorebtn}>Read More <ArrowRight size={16} /></button>
                </div>
            </div>

        </div>
    )
}

export default Card