import axios from "axios";

import {baseURL} from "../utils/constants/constants";
import {retriveLocalStorage} from "../utils/helpers";
import {ITokenObtainPair} from "../models/ITokenObtainPair";

export const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.request.use(request => {
    if (
        localStorage.getItem('tokenPair')
        && (
            request.url !== '/auth'
            && request.url !== '/auth/refresh'
            && request.url !== '/users')
    ) {
        const iTokenObtainPair = retriveLocalStorage<ITokenObtainPair>('tokenPair');
        request.headers.set('Authorization', 'Bearer' + ' ' + iTokenObtainPair.access)
    }

    return request;
})

// axiosInstance.interceptors.response.use(
//     response => response,
//     ((error) => {
//         if (error.response.status === 401) {
//             // removeTokens()
//         }
//
//         return error
//     })
// )



