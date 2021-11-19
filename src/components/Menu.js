import React from 'react';
import style from './Menu.module.css';
import Dishes from './Dishes'

const Menu  = () => {

    return (
        <div className={style['menu-container']}>
            <div className={style['title']}>Nos Menus</div>
            <Dishes />
        </div>
    )
}



export default Menu;