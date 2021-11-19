import { React, useEffect, useState } from "react";
import styles from './Dishes.module.css';
import Meal from './Meal';


const Dishes = () => {

    const [dishes, setDishes] = useState([]);

    useEffect(() => {
       const dishes = async () => {
            const res = await fetch('http://localhost:3000/menu.json');
            let json = await res.json();
            setDishes(json);
       };

       dishes();
    }, [])

    return (
        <div className={styles.meals}>
            {dishes && dishes.map((meal) => (
                <Meal data={meal} key={meal.id} />
            ))}
        </div>
    );

}



export default Dishes;