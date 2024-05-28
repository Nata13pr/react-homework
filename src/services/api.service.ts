import axios, {AxiosError} from "axios";
import {IAuthDataModel} from "../models/IAuthDataModel";
import ITokenObtainPair from "../models/ITokenObtainPair";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {retrieveLocalStorageData} from "../helpers/helpers";
import {log} from "node:util";

let axiosInstance = axios.create({
    baseURL: 'http://www.owu.linkpc.net/carsAPI/v2',
    headers: {}
})

axiosInstance.interceptors.request.use((request) => {
    if (localStorage.getItem('tokenPair') && request.url !== '/auth/refresh')
        request.headers.set('Authorization', `Bearer ${retrieveLocalStorageData<ITokenObtainPair>('tokenPair').access}`);
        // request.headers.set('Authorization', 'Bearer ' + retrieveLocalStorageData<ITokenObtainPair>('tokenPair').access);

    return request;
})
const authService = {
    authentication: async (authData: IAuthDataModel): Promise<boolean> => {
        let response;
        try {
            response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        } catch (e) {
            console.log(e)
        }

        return !!(response?.data?.access && response.data?.refresh);
    },
    refresh:async(refreshToken:string)=>{
        const response=await axiosInstance.post<ITokenObtainPair>('/auth/refresh',{refresh:refreshToken});
        localStorage.setItem('tokenPair',JSON.stringify(response.data))
    }
}


const carService={
    getCars:async(page:string):Promise<ICarPaginatedModel | null>=>{
       try{
           const response=await axiosInstance.get<ICarPaginatedModel>('/cars',{params:{page:page}});
           return response.data;
       }catch(e){
           let axiosError=e as AxiosError;
           console.log(axiosError);
           if(axiosError?.response?.status===401){
               const refreshToken=retrieveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
               await  authService.refresh(refreshToken);
               return  carService.getCars(page)
           }
       }
return null;
    }
}
export {
    authService,
    carService
}