import {React, useState} from 'react';
import  ReactDOM  from 'react-dom';
import styles from './OverlayMenu.module.css';


const Overlay = props => {

    const closeHandler = () => {
        props.sendFalse(false);
    }

    return (
        
        <div className={styles.container}>
            <div className={styles.cross}>
                <img onClick={closeHandler} src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"/>
            </div>
            <div className={styles.links}>
                <a href="#">Menu</a>
                <a href="#">Votre panier</a>
                <a href="#">Se connecter</a>
            </div>
        </div>

    );

}
        
const OverlayMenu = props => {

    const sendFalsebis = f =>{
        props.throwFalse(f);
    }

    return (
        <>
            {ReactDOM.createPortal(
                <Overlay sendFalse={sendFalsebis} />, 
                document.getElementById('overlay-menu'))}
        </>
    );

}


export default OverlayMenu;