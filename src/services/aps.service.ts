import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostsModel} from "../models/IPostsModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'}
})

const userService = {
    getUsers: async (): Promise<AxiosResponse<IUserModel[]>> => {
        return await axiosInstance.get<IUserModel[]>('/users')
    }
}

const postService = {
    getPosts: async (): Promise<AxiosResponse<IPostsModel[]>> => {
        return await axiosInstance.get<IPostsModel[]>('/posts')
    }
}

export {
    userService,
    postService
}