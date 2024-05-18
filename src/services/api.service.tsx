import axios, {AxiosResponse} from "axios"
import {IUserContactModel} from "../models/IUserContactModel"
import {baseUrl, urls } from "../constants/urls"


const axiosInstance= axios.create
({
    baseURL: baseUrl,
    headers: {'Content-Type': 'application/json'},
})

const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserContactModel[]>> => {
        return axiosInstance.get<IUserContactModel[]>(urls.users.allUsers)
    },
    getUserById:(id:string):Promise<AxiosResponse<IUserContactModel>> => {
        return axiosInstance.get<IUserContactModel>(urls.users.byId(id))
    }
}
export {
    userApiService
}