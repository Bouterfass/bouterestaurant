import { React } from 'react';
import  ReactDOM  from 'react-dom';
import styles from './OverlayMenu.module.css';
import { connect } from 'react-redux';
import { updateLog } from '../store/logStorage/logActions';
import { logSelector } from '../store/logStorage/logSelector';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

export const OverlayComponent = () => {

    const log = useSelector(logSelector);
    const dispatch = useDispatch();

    const logHandler = useCallback(
        () => {
            dispatch(updateLog())   
        },
        [],
    );

    let navLinks = (log) => {
        if (log) {
            return (
                <div className={styles.container}>
                <div className={styles.links}>
                <a href="#">Menu</a>
                <a href="#">Votre panier</a>
                <a href="#" onClick={() => logHandler()}>Se déconnecter</a>
                </div>
            </div>);
        }
        else {
            return (
                <div className={styles.container}>
                <div className={styles.links}>
                    <a href="#">Menu</a>
                    <a href="#" onClick={() => logHandler()}>Se connecter</a>
                </div>
            </div>);
        }
    }

    return (
        <>
       {navLinks(log)}
        </>
    );

}
        
export const OverlayMenuComponent = () => {

    return (
        <>
            {ReactDOM.createPortal(
                <OverlayComponent />, 
                document.getElementById('overlay-menu'))}
        </>
    );

}

export const OverlayMenu = connect(
    (state) => ({
        log: logSelector(state)
    }),
    (dispatch) => ({
        changeLog: () => dispatch(updateLog())
    })
)(OverlayMenuComponent)

