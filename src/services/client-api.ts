import axios from "axios";

import {retriveLocalStorageData} from "./helpers/helpers";
import {ITokenObtainPair} from "../models/ITokenObtainPair";

export const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.request.use(request => {
    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')) {
        const iTokenObtainPair = retriveLocalStorageData<ITokenObtainPair>('tokenPair');
        request.headers.set('Authorization', 'Bearer' + ' ' + iTokenObtainPair.access)
    }
    return request;
})
