import React, {useEffect, useState} from 'react';

import {ICarWithAuth} from "../models/ICarWithAuth";
import CarsComponent from "../components/CarsComponent";
import {carService} from "../services/api.service";

const CarsPage = () => {
    const [cars, setCars] = useState<ICarWithAuth[]>([]);

    useEffect(() => {
        carService.getCars().then(value => {
            console.log(value)
            if(value){
                setCars([...value.items])
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