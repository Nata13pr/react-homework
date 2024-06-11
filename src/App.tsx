import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {IUserModel} from "./models/IUserModel";
import {IPostsModel} from "./models/IPostsModel";
import {postService, userService} from "./services/aps.service";
import HeaderComponent from "./components/HeaderComponent";
import {Outlet} from "react-router-dom";
import {Context} from "./context/ContextProvider";

function App() {

    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostsModel[]>([])
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null)

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getPosts().then(value => setPosts(value.data))
    }, []);

    const setFavoriteUser = (obj: IUserModel) => {
        setFavoriteUserState(obj)
    }

    return (
        <div>
            <HeaderComponent/>
            <Context.Provider value={{
                userStore: {
                    allUsers: users,
                    setFavoriteUser: (obj: IUserModel) => setFavoriteUser(obj)
                },
                postStore: {
                    allPosts: posts
                }
            }}>
                <Outlet/>
            </Context.Provider>

            <hr/>
            {favoriteUserState && <div>{favoriteUserState.email}</div>}
            <hr/>

        </div>
    );
}

export default App;
