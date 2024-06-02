import React, {FC} from 'react';

import {ICarModel} from "../../models/ICarModel";

interface IProps {
    car: ICarModel
}

const CarComponent: FC<IProps> = ({car}) => {
    return (
        <li>
            <h2>Brand - {car.brand}</h2>
            <p>Year - {car.year}</p>
            <p>Price - {car.price}</p>
        </li>
    );
};

export default CarComponent;