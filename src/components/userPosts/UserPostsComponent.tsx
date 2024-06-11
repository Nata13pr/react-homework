import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';

import {useContextProvider} from "../../context/ContextProvider";
import {UserWithPostsType} from "../../models/UserWithPostsType";
import UserPostComponent from "../userPost/UserPostComponent";

const UserPostsComponent: FC = () => {
    const {postStore: {allPosts}, userStore: {allUsers}} = useContextProvider();
    const [userWithPostsState, setUserWithPostsState] = useState<UserWithPostsType[]>([])


    const userWithPostsArray = useCallback(
        () => allUsers.map(user => ({
            ...user,
            posts: allPosts.filter(post => post.userId === user.id)
        })),
        [allPosts, allUsers]
    );

    // const userWithPostsArray = useCallback(() => {
    // console.log("qwe 2")
    //     return allUsers.map(user => {
    //         return {...user, posts: allPosts.filter(post => post.userId === user.id)}
    //     })
    // }, [allPosts, allUsers]);

    // const userWithPostsArray = useMemo(() => {
    //     return () => {
    //         console.log("qwe 1")
    //         return allUsers.map(user => {
    //             return {...user, posts: allPosts.filter(post => post.userId === user.id)}
    //         })
    //     }
    // }, [allPosts, allUsers]);

    useEffect(() => {
        setUserWithPostsState(userWithPostsArray)
    }, [userWithPostsArray]);

    return (
        <div>
            {userWithPostsState.map(user => <div key={user.id}>
                <div>{user.name}</div>
                <ul>
                    {user.posts.map(post => <UserPostComponent post={post} key={post.id}/>)}
                </ul>
            </div>)}
        </div>
    );
};

export default UserPostsComponent;