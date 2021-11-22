import React from 'react';
import Card from './UI/Card';
import style from './Meal.module.css';



const Meal = (props) => {

    return (
        <Card>
            <img className={style.image} src={props.data.url}/>
            <div className={style['meal-name']}>{props.data.name}</div>
            <div className={style['meal-description']}>{props.data.description}</div>
            <div className={style['meal-price']}>{props.data.price}€</div>
        </Card>

    );
}

export default Meal;
