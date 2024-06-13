import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";

export type UserWithPostsTypes = IUserModel & { posts: IPostModel[] }