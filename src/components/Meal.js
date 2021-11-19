import React from 'react';
import Card from './UI/Card';
import style from './Meal.module.css';
import styled from 'styled-components';



const ImgMeal = styled.div`
background: ${props => `url(../images/pizza.jpg)`} no-repeat 
center 
center;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
width: 20em;
height: 140px;
position: relative;
left: -3em;
top: -2.5em;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
border-radius: 7px;
transition: 1s;
`;


const Meal = (props) => {

    console.log(props.data.url);

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
