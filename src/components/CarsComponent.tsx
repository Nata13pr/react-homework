import React, {FC} from 'react';
import {ICarWithAuth} from "../models/ICarWithAuth";
import CarComponent from "./CarComponent";

interface ICar {
    cars: ICarWithAuth[]
}

const CarsComponent: FC<ICar> = ({cars}) => {

    return (
        <div>
            {cars.map(car =>
              <CarComponent car={car}  key={car.id}/>
            )}
        </div>
    );
};

export default CarsComponent;