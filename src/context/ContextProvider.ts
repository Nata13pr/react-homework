import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {createContext, useContext} from "react";
import {ICommentModel} from "../models/ICommentModel";

type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        setFavoriteUser: (obj: IUserModel) => void
    },
    postStore: {
        allPosts: IPostModel[]
    },
    commentsStore:{
        allComments:ICommentModel[]
    }
}

const defaultValue: StoreType = {
    userStore: {
        allUsers: [],
        setFavoriteUser: () => {
        }
    },
    postStore: {
        allPosts: []
    },
    commentsStore:{
        allComments:[]
    }
}

export const Context = createContext<StoreType>(defaultValue);

export const useContextProvider = (): StoreType => useContext(Context);