import {AxiosResponse} from "axios";

import {ICommentModel} from "../../models/ICommentModel";
import {axiosInstance} from "../index";

export const commentService = {
    getComments: async (): Promise<AxiosResponse<ICommentModel[]>> => {
        return await axiosInstance.get<ICommentModel[]>('/comments')
    }
}