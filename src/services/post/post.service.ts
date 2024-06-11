import {AxiosResponse} from "axios";

import {IPostModel} from "../../models/IPostModel";
import {axiosInstance} from "../index";

export const postService = {
    getUsers: async (): Promise<AxiosResponse<IPostModel[]>> => {
        return await axiosInstance.get<IPostModel[]>('/posts')
    }
}