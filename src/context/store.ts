import {create} from "zustand";

import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";


type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        loadUsers: (users: IUserModel[]) => void,
        setFavoriteUser: (obj: IUserModel) => void,
        favoriteUser: IUserModel | null
    },
    postStore: {
        allPosts: IPostModel[],
        loadPosts: (posts: IPostModel[]) => void,
    }
}

export const useStore = create<StoreType>()((set) => ({
    userStore: {
        allUsers: [],
        loadUsers: (users: IUserModel[]) => {
            return set((state) => {
                return {
                    ...state,
                    userStore: {
                        ...state.userStore,
                        allUsers: users
                    }
                }
            })
        },
        favoriteUser: null,
        setFavoriteUser: (obj: IUserModel) => {
            return set(state => {
                return {
                    ...state,
                    userStore: {
                        ...state.userStore,
                        favoriteUser: obj
                    }
                }
            })
        }
    },
    postStore: {
        allPosts: [],
        loadPosts: (posts: IPostModel[]) => {
            return set((state) => {
                return {
                    ...state,
                    postStore: {
                        ...state.postStore,
                        allPosts: posts
                    }
                }
            })
        }
    }
}))