import React, {useEffect, useState} from 'react';

import CarsComponent from "../../components/cars/CarsComponent";
import {IAllCarsInfoModel} from "../../models/IAllCarsInfoModel";
import {carService} from "../../services/cars/api.cars.service";
import {ICarModel} from "../../models/ICarModel";

const CarsPage = () => {
    const [cars, setCars] = useState<ICarModel[]>()

    useEffect(() => {
        carService.getCars().then((value: IAllCarsInfoModel | undefined) => {
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