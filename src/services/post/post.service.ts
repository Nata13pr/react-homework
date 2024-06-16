import {IUserModel} from "../../models/IUserModel";
import {axiosInstance} from "../index";
import {IPostModel} from "../../models/IPostModel";

export const postService = {
    getAllPosts: async (): Promise<IPostModel[]> => {
        const response = await axiosInstance.get<IPostModel[]>('/posts');
        return response.data
    }
}