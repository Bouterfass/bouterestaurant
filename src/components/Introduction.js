import { React } from 'react';
import styles from './Introduction.module.css';



const Introduction = () => {

    return (
        <>
            <div className="container">
                <div className={styles['container-image']}></div>
                <div className={styles['container-text']}>
                    <div className={styles.block}>
                        <div className={styles['block-blur']}></div>
                        <div className={styles.text}>Commandez, Recevez, Profitez.</div>
                        <div className={styles.paragraph}>
                            Aute adipisicing laborum non eiusmod duis magna minim irure anim. 
                            Pariatur aliqua Lorem aute enim tempor quis. Sint excepteur laboris duis ea sint ullamco et duis cupidatat velit.
                        </div>
                        <a className={styles.decouvrir} href="#">Servez-vous!</a>
                    </div>
                    
                </div>
            </div>
        </>
    )

}




export default Introduction;