import axios, {AxiosResponse} from "axios";
import IUserResponseModel from '../Models/IUserResponseModel'
import IUserPostResponseModel from "../Models/IUserPostResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json'
    }
})

const getAllUsers = (): Promise<AxiosResponse<IUserResponseModel>> => {
    return axiosInstance.get('/users')
}

const getAllPostByUserId = (id: number): Promise<AxiosResponse<IUserPostResponseModel>> => {
    return axiosInstance.get(`users/${id}/posts`)
}

export {getAllUsers, getAllPostByUserId};