import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";

import CarsComponent from "../../components/cars/CarsComponent";
import {ICarPaginatedModel} from "../../models/ICarPaginatedModel";
import {carService} from "../../services/cars/api.car.service";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import AddCarComponent from "../../components/car/AddCarComponent";
import {AxiosError} from "axios";
import {authService} from "../../services/auth/api.auth.service";


const CarsPage = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useSearchParams();

    const [carsObject, setCarsObject] = useState<ICarPaginatedModel>({
        prev: null,
        next: null,
        items: [],
        total_pages: 0,
        total_items: 0
    })

    useEffect(() => {
        const getCarsData = async () => {
            try {
                const response = await carService.getCars(query.get('page') || '1');
                if (response) {
                    setCarsObject(response);
                }
            } catch (e) {
                const axiosError = e as AxiosError;
                if (axiosError && axiosError?.response?.status === 401) {
                    try {
                        await authService.refresh()
                    } catch (e) {
                        return navigate('/')
                    }

                    const response = await carService.getCars(query.get('page') || '1')
                    if (response) {
                        setCarsObject(response);
                    }
                }
            }
        }
        getCarsData()
    }, [query])


    const deleteCar = async (id: number) => {
        try {
            await carService.delete(id);
            const updateCars = carsObject.items.filter(car => car.id !== id);
            setCarsObject(prevState => ({
                ...prevState,
                items: updateCars
            }))
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError && axiosError?.response?.status === 401) {
                try {
                    await authService.refresh()
                } catch (e) {
                    return navigate('/')
                }

                const response = await carService.getCars(query.get('page') || '1')
                if (response) {
                    setCarsObject(response);
                }
            }
        }

    }

    return (
        <div>
            <AddCarComponent/>
            <CarsComponent cars={carsObject.items} deleteCar={deleteCar}/>
            <PaginationComponent next={carsObject.next} prev={carsObject.prev}/>
        </div>
    );
};

export default CarsPage;