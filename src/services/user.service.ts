import axios, {AxiosResponse} from "axios";

import {IUserModel} from "../model/IUserModel"
import {IPostModel} from "../model/IPostModel"

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get('/users')
    },

    getPostsOfUser: (userId: string): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get(`/users/${userId}/posts`)
    }
}