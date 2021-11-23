import { React, useEffect, useState } from "react";
import  {OverlayMenu}  from "./OverlayMenu";
import style from './Header.module.css';
import { connect } from "react-redux";
import { logSelector } from "../store/logStorage/logSelector";
import { updateLog } from "../store/logStorage/logActions";
import { overSelector } from "../store/overlay/overSelectors";
import { updateOver } from "../store/overlay/overActions";



export const HeaderComponent = ({ log, over, changeLog, changeOver }) => {

    const [navColor, SetNavColor] = useState(false); 

    const changeNavColor = () => {
        if (window.scrollY > 80)
            SetNavColor(true);
        else
            SetNavColor(false);
    }

    useEffect(() => {
        changeNavColor();
        window.addEventListener('scroll', changeNavColor);
    }, [])
        


    let navItem = (log) => {
        if (log) {
            return (
            <>
                <a href="#">Votre panier</a>
                <a href="#" onClick={() => changeLog()}>Se déconnecter</a>
            </>);
        }
        else {
            return (
                <>
                    <a href="#" onClick={() => changeLog()}>Se connecter</a>
                </>);
        }
    }

    if (over)
        return (
        <>
        <OverlayMenu />
        <div className={style.cross}>
                <img onClick={() => changeOver()} src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"/>
        </div>
        </>);
    else {
        return(
            <>
                <header className={navColor ? style['header-scrolled'] : style.header}>
                    <div className={style.elem}>
                        <div className={style.brand}>
                            Bouterestaurant
                        </div>
                        <div className={style.links}>
                            <a href="#">Menu</a>
                            {navItem(log)}
                        </div>
                        <div className={style.cross}>
                            <img onClick={() => changeOver()} src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"/>
                        </div>
                    </div>
                </header>
            </>
        );
    }
    


}

export const Header = connect((state) => ({
        log: logSelector(state),
        over: overSelector(state)
    }),
    (dispatch) => ({
        changeLog: () => dispatch(updateLog()),
        changeOver: () => dispatch(updateOver())
    })
)(HeaderComponent)

