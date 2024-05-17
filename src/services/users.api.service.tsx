import axios, {AxiosResponse} from 'axios';
import {IPost} from '../models/IPost';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    }
})
const addPost = (body: IPost): Promise<AxiosResponse<IPost>> => {
    return axiosInstance.post('/posts', body)
}

export {addPost}