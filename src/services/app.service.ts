import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import {IUserModel} from "../models/IUserModel";

const axiosInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{'Content-Type': 'application/json'}
})

const userService={
    getUsers:async ():Promise<AxiosResponse<IUserModel[]>> =>{
        return await axiosInstance.get<IUserModel[]>('/users')
    }
}

const postService={
    getPosts:async ():Promise<AxiosResponse<IPostModel[]>> =>{
        return await axiosInstance.get<IPostModel[]>('/posts')
    }
}

export {
    userService,
    postService
}