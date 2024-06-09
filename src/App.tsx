import React, {FC, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Outlet} from "react-router-dom";
import {postService, userService} from "./services/app.service";
import HeaderComponent from "./components/HeaderComponent";
import {MyContext} from './context/ContextProvider';
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";

const App: FC = () => {
    const [users, setUser] = useState<IUserModel[]>([])
    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        userService.getUsers().then(value => setUser(value.data));
        postService.getPosts().then(value => setPosts(value.data))
    }, []);
    return (
        <>
            <MyContext.Provider value={
                {
                    userStore: {
                        allUsers: users
                    },
                    postStore: {
                        allPosts: posts
                    }
                }
            }>

                <HeaderComponent/>
                <Outlet/>

            </MyContext.Provider>
        </>
    );
}

export default App;
