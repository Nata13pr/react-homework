import React, {FC} from 'react';

import {ICarWithAuth} from "../../models/ICarWithAuth";
import CarComponent from "../car/CarComponent";

interface IProps {
    cars: ICarWithAuth[];
    deleteCar: (id: number) => void;
}

const CarsComponent: FC<IProps> = ({cars, deleteCar}) => {

    return (
        <ul>
            {cars.map(car => <CarComponent car={car} key={car.id} deleteCar={deleteCar}/>)}
        </ul>
    );
};

export default CarsComponent;