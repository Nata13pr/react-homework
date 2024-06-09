import {IPostModel} from "../models/IPostModel";
import {IUserModel} from "../models/IUserModel";
import {createContext, useContext} from "react";

type StoreType={
    userStore:{
        allUsers:IUserModel[],
        setFavoriteUser:(obj:IUserModel)=>void
    },
    postStore:{
        allPosts:IPostModel[]
    }
}

const defaultValue:StoreType={
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