import { React, useState } from "react";
import OverlayMenu from "./OverlayMenu";
import style from './Header.module.css';
import { connect } from "react-redux";
import { UPDATE_LOG_ACTION } from "../store/logReducer";
import { logSelector } from "../store/logSelector";
import { updateLog } from "../store/logActions";



export const HeaderComponent = ({ log, changeLog }) => {

    const [overlay, SetOverlay] = useState(false);

    const menuHandler = () => {
        SetOverlay(over => !over);
    }

    const changeOver = x => {
        SetOverlay(x);
    }

    let navItem = (log) => {
        if (log) {
            return (
            <>
                <a href="#">Votre panier</a>
                <a href="#" onClick={() => {changeLog()}}>Se déconnecter</a>
            </>);
        }
        else {
            return (
                <>
                    <a href="#" onClick={() => {changeLog()}}>Se connecter</a>
                </>);
        }
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
                        {navItem(log)}
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

export const Header = connect((state) => ({
        log: logSelector(state.isLogged)
    }),
    (dispatch) => ({
        changeLog: (log) => dispatch(updateLog(log))
    })
)(HeaderComponent)

