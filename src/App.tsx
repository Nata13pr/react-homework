import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import {postService, userService} from "./services/app.service";
import HeaderComponent from "./components/HeaderComponent";
import {Context} from './context/ContextProvider';
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";

const App: FC = () => {
    const [users, setUser] = useState<IUserModel[]>([])
    const [posts, setPosts] = useState<IPostModel[]>([])
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null)

    useEffect(() => {
        userService.getUsers().then(value => setUser(value.data));
        postService.getPosts().then(value => setPosts(value.data))
    }, []);

    const setFavoriteUser = (obj: IUserModel) => {
        setFavoriteUserState(obj)
    }
    return (
        <div>
            <HeaderComponent/>

            <Context.Provider value={
                {
                    userStore: {
                        allUsers: users,
                        setFavoriteUser: (obj: IUserModel) => setFavoriteUser(obj)
                    },
                    postStore: {
                        allPosts: posts
                    }
                }
            }>


                <Outlet/>

            </Context.Provider>

            <hr/>
            {favoriteUserState && <div>{favoriteUserState.email}</div>}
             <hr/>

                </div>
                );
            }

                export default App;
