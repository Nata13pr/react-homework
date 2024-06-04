import React, {FC} from 'react';
import {ICarWithAuth} from "../../models/ICarWithAuth";
interface IProps{
    car:ICarWithAuth
}
const CarComponent:FC<IProps> = ({car}) => {

    const delete=(id)=>{

    }
    return (
        <li>
            <h2>{car.brand}</h2>
            <p>{car.year}</p>
            <p>{car.price}</p>
            <button onClick={()=>delete(car.id)}>Delete</button>
        </li>
    );
};

export default CarComponent;