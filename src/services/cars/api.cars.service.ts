import {AxiosError} from "axios";

import {IAllCarsInfoModel} from "../../models/IAllCarsInfoModel";
import {axiosInstance} from "../client-api";
import {retriveLocalStorageData} from "../helpers/helpers";
import {ITokenObtainPair} from "../../models/ITokenObtainPair";
import {authService} from "../auth/api.auth.service";


export const carService = {
    getCars: async () => {
        try {
            const response = await axiosInstance.get<IAllCarsInfoModel>('/cars')
            return response.data;
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError?.response?.status === 401) {
                const refreshToken = retriveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                await carService.getCars();
            }
        }
    }
}