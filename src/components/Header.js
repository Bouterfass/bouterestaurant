import {React, useState} from "react";
import OverlayMenu from "./OverlayMenu";
import style from './Header.module.css';


const Header = () => {

    const [overlay, SetOverlay] = useState(false);

    const menuHandler = () => {
        SetOverlay(over => !over);
    }

    const changeOver = x => {
        SetOverlay(x);
    }

    return(
        <>
            <header className={style.header}>
                <div className={style.elem}>
                    <div className={style.brand}>
                        Bouterestaurant
                    </div>
                    <div className={style.links}>
                        <a href="#">Menu</a>
                        <a href="#">Votre panier</a>
                        <a href="#">Se connecter</a>
                    </div>
                    <div className={style.cross}>
                        <img onClick={menuHandler} src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"/>
                    </div>
                </div>
            </header>
            {overlay && <OverlayMenu throwFalse={changeOver} />}
        </>
    );


}





export default Header;