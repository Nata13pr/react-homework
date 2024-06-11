import {IUserModel} from "../models/IUserModel";
import {IPostsModel} from "../models/IPostsModel";
import {createContext, useContext} from "react";

type StoreType={
    userStore:{
        allUsers:IUserModel[],
        setFavoriteUser:(obj:IUserModel)=>void
    },
    postStore:{
        allPosts:IPostsModel[]
    }
}

export const defaultValue:StoreType={
    userStore:{
        allUsers:[],
        setFavoriteUser:()=>{}
    },
    postStore:{
        allPosts:[]
    }
}


export const Context=createContext<StoreType>(defaultValue);

export const useContextProvider=():StoreType=>useContext(Context)