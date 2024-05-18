import axios, {AxiosResponse} from 'axios';

import IUserModel from '../model/IUserModel';
import ICommentModel from '../model/ICommentModel';
import IPostModel from '../model/IPostModel'

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    }
})

const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get('/users')
    }
}

const postApiService = {
    getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get('/posts')
    }
}

const commentApiService = {
    getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get('/comments')
    }
}
export {
    userApiService,
    postApiService,
    commentApiService
}