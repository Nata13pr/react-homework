import {AxiosResponse} from "axios";

import {IAuthDataModel} from "../../models/IAuthDataModel";
import {axiosInstance} from "../index";
import {ITokenObtainPair} from "../../models/ITokenObtainPair";
import {setTokens} from "../../utils/helpers";
import {IAuthRegisterUserDataModule} from "../../models/IAuthRegisterUserDataModule";

const authService = {
    logIn: async (authData: IAuthDataModel): Promise<boolean> => {
        let response;
        try {
            response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
            // localStorage.setItem('tokenPair', JSON.stringify(response.data));
            setTokens(response.data)
        } catch (e) {
            console.log(e)
        }

        return !!(response?.data?.access && response?.data?.refresh)
    },
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<ITokenObtainPair>(
            '/auth/refresh',
            {refresh: refreshToken}
        );
        // localStorage.setItem('tokenPair', JSON.stringify(response.data));
        setTokens(response.data)
    },
    register: async (formData: IAuthDataModel): Promise<AxiosResponse<IAuthRegisterUserDataModule>> => {
        return axiosInstance.post('/users', {username: formData.username, password: formData.password})
    }
}
export {
    authService
}