import React, {FC} from 'react';
import {ICarWithAuth} from "../../models/ICarWithAuth";
import CarComponent from "../car/CarComponent";

interface IProps{
    cars:ICarWithAuth[]
}
const CarsComponent:FC<IProps> = ({cars}) => {
    return (
            <ul>
                {cars.map(car => <CarComponent car={car} key={car.id}/>)}
            </ul>
    );
};

export default CarsComponent;