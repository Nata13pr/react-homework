import React, {useEffect, useState} from 'react';

import CarsComponent from "../../components/cars/CarsComponent";
import {carService} from "../../services/cars/api.cars.service";
import {ICarModel} from "../../models/ICarModel";

const CarsPage = () => {
    const [cars, setCars] = useState<ICarModel[]>()

    useEffect(() => {
        carService.getCars().then((value) => {
            if (value) {
                setCars(value.items)
            }
        })
    }, []);

    return (
        <div>
            <CarsComponent cars={cars}/>
        </div>
    );
};

export default CarsPage;