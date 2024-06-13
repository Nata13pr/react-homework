import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";

import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import {useStore} from "./context/store";
import {postService, userService} from "./services/api.service";

function App() {

    const {userStore, postStore} = useStore();

    useEffect(() => {
        userService.getUsers().then(value => {
            userStore.loadUsers(value.data)
        });
        postService.getPosts().then(value => postStore.loadPosts(value.data))
    }, []);

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <hr/>
            {userStore.favoriteUser && <div>{userStore.favoriteUser.email}</div>}
        </div>
    );
}

export default App;
