import axios, {AxiosResponse} from "axios";

import {IPostModel} from "../model/IPostModel"
import {ICommentModel} from "../model/ICommentModel"

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const postApiService = {
    getAll: (): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get('/posts')
    },
    getCommentsOfPost: (userId: string): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get(`posts/${userId}/comments`)
    }

}