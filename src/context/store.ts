import {create} from "zustand";

import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";


type StoreTye = {
    userStore: {
        allUsers: IUserModel[],
        loadUsers: (users: IUserModel[]) => void,
        setFavoriteUser: (obj: IUserModel) => void,
        favoriteUser: IUserModel | null
    },
    postStore: {
        allPosts: IPostModel[],
        loadPosts: (posts: IPostModel[]) => void
    },
    commentsStore: {
        allComments: ICommentModel[],
        loadComments: (comments: ICommentModel[]) => void
    }
}

export const useStore = create<StoreTye>()(set => ({
    userStore: {
        allUsers: [],
        loadUsers: (users: IUserModel[]) => {
            return set(state => {
                return {
                    ...state,
                    userStore: {
                        ...state.userStore,
                        allUsers: users
                    }
                }
            });
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
            return set(state => {
                return {
                    ...state,
                    postStore: {
                        ...state.postStore,
                        allPosts: posts
                    }
                }
            })
        }
    },
    commentsStore: {
        allComments: [],
        loadComments: (comments: ICommentModel[]) => {
            return set(state => {
                return {
                    ...state,
                    commentsStore: {
                        ...state.commentsStore,
                        allComments: comments
                    }
                }
            })
        }
    }
}))