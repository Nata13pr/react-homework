import {AxiosError} from "axios";

import {ICarPaginatedModel} from "../../models/ICarPaginatedModel";
import {axiosInstance} from "../index";
import {ICreateNewCar} from "../../models/ICreateNewCar";

export const carService = {
    getCars: async (page: string='1') => {
        const response = await axiosInstance.get<ICarPaginatedModel>('/cars', {params: {page: page}})
        return response.data;
    },
    create: async (data: ICreateNewCar) => {
        try {
            const response = await axiosInstance.post<ICarPaginatedModel>('/cars', data);
            return response.data;
        } catch (e) {
            const axiosError = e as AxiosError;

        }
    },
    delete: async (id: number) => {
        try {
            await axiosInstance.delete('/cars/' + id);
        } catch (e) {
            console.log(e)
        }
    }
}