import {AxiosResponse} from "axios";
import {IAuthDataModel} from "../../models/IAuthDataModel";
import {IAuthRegisterUserDataModule} from "../../models/IAuthRegisterUserDataModule";
import {ITokenObtainPair} from "../../models/ITokenObtainPair";
import {axiosInstance} from "../client-api";


export const authService = {
    register: (formData: IAuthDataModel): Promise<AxiosResponse<IAuthRegisterUserDataModule>> => {
        return axiosInstance.post('/users', formData)
    },
    authentication: async (authData: IAuthDataModel): Promise<boolean> => {
        let response;
        try {
            response = await axiosInstance.post<ITokenObtainPair>('auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data))
        } catch (e) {
            console.log(e)
        }
        return !!(response?.data?.access && response?.data?.refresh)
    },
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    }
}