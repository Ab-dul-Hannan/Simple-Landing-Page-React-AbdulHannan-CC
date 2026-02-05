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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda exercitationem laborum necessitatibus modi possimus.
                </div>
                <div className={styles.cardbtns}>
                    <button className={styles.readmorebtn}>Read More <ArrowRight size={16} /></button>
                </div>
            </div>

        </div>
    )
}

export default Card