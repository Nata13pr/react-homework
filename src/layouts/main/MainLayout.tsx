import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import {IUserModel} from "../../models/IUserModel";
import {IPostModel} from "../../models/IPostModel";
import {ICommentModel} from "../../models/ICommentModel";
import {postService, userService, commentService} from "../../services";
import {Context} from "../../context/ContextProvider";

const MainLayout = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([])
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null)

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getUsers().then(value => setPosts(value.data));
        commentService.getComments().then(value => setComments(value.data))
    },[])

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
                    },
                    commentsStore: {
                        allComments: comments
                    }
                }
            }>

                <Outlet/>
            </Context.Provider>

            <hr/>
            {favoriteUserState ? <div>{favoriteUserState.email}</div> : null}
            <hr/>

            <FooterComponent/>
        </div>
    );
};

export default MainLayout;