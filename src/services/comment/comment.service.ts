import {IUserModel} from "../../models/IUserModel";
import {axiosInstance} from "../index";
import {ICommentModel} from "../../models/ICommentModel";

export const commentService = {
    getAllComments: async (): Promise<ICommentModel[]> => {
        const response = await axiosInstance.get<ICommentModel[]>('/comments');
        return response.data
    }
}