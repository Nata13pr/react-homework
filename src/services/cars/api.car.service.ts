import {AxiosError} from "axios";

import {ICarPaginatedModel} from "../../models/ICarPaginatedModel";
import {axiosInstance} from "../index";
import {retriveLocalStorage} from "../../utils/helpers";
import {ITokenObtainPair} from "../../models/ITokenObtainPair";
import {authService} from "../auth/api.auth.service";
import {ICreateNewCar} from "../../models/ICreateNewCar";

export const carService = {
    getCars: async (page: string) => {
        try {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars', {params: {page: page}})
            return response.data;
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError?.response?.status === 401) {
                const refreshToken = retriveLocalStorage<ITokenObtainPair>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                await carService.getCars(page);
            }
        }
    },
    create: async (data: ICreateNewCar) => {
        try {
            const response = await axiosInstance.post<ICarPaginatedModel>('/cars', data);
            return response.data;
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError?.response?.status === 401) {
                const refreshToken = retriveLocalStorage<ITokenObtainPair>('tokenPair').refresh;
                await authService.refresh(refreshToken);
            }
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