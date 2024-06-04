import React, {FC} from 'react';

import {ICarWithAuth} from "../../models/ICarWithAuth";


interface IProps {
    car: ICarWithAuth;
    deleteCar: (id: number) => void;
}

const CarComponent: FC<IProps> = ({car, deleteCar}) => {


    return (
        <li>
            <h2>{car.brand}</h2>
            <p>{car.year}</p>
            <p>{car.price}</p>
            <button onClick={() => deleteCar(car.id)}>Delete</button>
        </li>
    );
};

export default CarComponent;