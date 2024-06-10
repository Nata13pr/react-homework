import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

type StoreType={
    userStore:{
        allUsers:IUserModel[],
        loadUsers:(users:IUserModel)=>void,
        setFavoriteUser:(obj:IUserModel)=>void,
        favoriteUser:IUserModel | null
    },
    postStore:{
        allPosts:IPostModel[]
    }
}

export const useStore=create<StoreType>()(set=>({
    userStore:{
        allUsers:[],
        loadUsers:(users:IUserModel[])=>{
            return set((state)=>{
                return {
                    ...state,useStore:{
                        ...state.useStore,
                        allUsers:users
                    }
                }
            })
        },
        favoriteUser:null,
        setFavoriterUser:(obj:IUserModel)=>{
            return set(state=>{
                return {
                    ...state,
                    userStore:{
                        ...state.useStore,
                        favoriteUser:obj
                    }
                }
            })
        }
    },
  postStore:{
        allPosts:[]
  }
}))