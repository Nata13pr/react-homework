import React from 'react';
import {useForm} from "react-hook-form";
import {ICreateNewCar} from "../../models/ICreateNewCar";
import {carService} from "../../services/cars/api.car.service";

const AddCarComponent = () => {
    const {register,handleSubmit,reset}=useForm<ICreateNewCar>();

    const addNewCar=async (data:ICreateNewCar)=>{
        await carService.create({brand:data.brand,year:Number(data.year),price:Number(data.price)});
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(addNewCar)}>
                <input type='text' placeholder='brand' {...register('brand') }/>
                <input type='text' placeholder='year' {...register('year')}/>
                <input type='text' placeholder='price' {...register('price')}/>
                <button>Add new car</button>
            </form>
        </div>
    );
};

export default AddCarComponent;