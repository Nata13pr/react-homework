import axios, {AxiosResponse} from "axios";

import {ICommentModel} from "../model/ICommentModel"

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    }
})

export  const commentApiService = {
    getAll: (): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get('/comments')
    }
}

