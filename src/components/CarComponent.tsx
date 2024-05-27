import React, {FC} from 'react';
import {ICarWithAuth} from "../models/ICarWithAuth";

interface ICar {
    car: ICarWithAuth
}

const CarComponent: FC<ICar> = ({car}) => {
        return (
            <div>
                <div>{car.brand}</div>
            </div>
        );
    }
;

export default CarComponent;