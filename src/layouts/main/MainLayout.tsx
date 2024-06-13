import React, {useEffect} from 'react';
import {useStore} from "../../context/store";
import HeaderComponent from "../../components/header/HeaderComponent";
import {Outlet} from "react-router-dom";

import FooterComponent from "../../components/footer/FooterComponent";
import {commentService, postService, userService} from "../../services";

const MainLayout = () => {
    const {userStore, commentsStore, postStore} = useStore();

    useEffect(() => {
        userService.getUsers().then(value => userStore.loadUsers(value.data));
        commentService.getComments().then(value => commentsStore.loadComments(value.data));
        postService.getPosts().then(value => postStore.loadPosts(value.data));
    }, []);

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>

            <hr/>
            {userStore.favoriteUser && <div>{userStore.favoriteUser.email}</div>}
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;