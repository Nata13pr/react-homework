import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import CarsComponent from "../../components/cars/CarsComponent";
import {ICarPaginatedModel} from "../../models/ICarPaginatedModel";
import {carService} from "../../services/cars/api.car.service";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import AddCarComponent from "../../components/car/AddCarComponent";


const CarsPage = () => {
    const [query, setQuery] = useSearchParams();

    const [carsObject, setCarsObject] = useState<ICarPaginatedModel>({
        prev: null,
        next: null,
        items: [],
        total_pages: 0,
        total_items: 0
    })

    useEffect(() => {
        carService.getCars(query.get('page') || '1').then(value => {
            if (value) {
                setCarsObject(value)
            }
        })

    }, [query]);

    return (
        <div>
            <AddCarComponent/>
            <CarsComponent cars={carsObject.items}/>
            <PaginationComponent next={carsObject.next} prev={carsObject.prev}/>
        </div>
    );
};

export default CarsPage;