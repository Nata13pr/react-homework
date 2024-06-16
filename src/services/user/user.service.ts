import {IUserModel} from "../../models/IUserModel";
import {axiosInstance} from "../index";

export const userService = {
    getAllUsers: async (): Promise<IUserModel[]> => {
        const response = await axiosInstance.get<IUserModel[]>('/users');
        return response.data
    }
}