import {IUserModel} from "./IUserModel";
import {IPostsModel} from "./IPostsModel";

export type UserWithPostsType=IUserModel & {posts:IPostsModel[]}