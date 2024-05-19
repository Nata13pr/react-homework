import axios, {AxiosResponse} from "axios";

import {IUserModel} from "../model/IUserModel"
import {IPostModel} from "../model/IPostModel"
import {ICommentModel} from "../model/ICommentModel"

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    }
})

const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get('/users')
    },

    getPostsOfUser: (userId: string): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get(`/users/${userId}/posts`)
    }
}

const postApiService = {
    getAll: (): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get('/posts')
    },
    getCommentsOfPost: (userId: string): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get(`posts/${userId}/comments`)
    }

}

const commentApiService = {
    getAll: (): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get('/comments')
    }
}

export {
    userApiService,
    postApiService,
    commentApiService
}