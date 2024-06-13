import React, {useCallback, useEffect, useState} from 'react';

import {useStore} from "../../context/store";
import {UserWithPostsType} from "../../models/UserWithPostsType";
import UserPostComponent from "../userPost/UserPostComponent";

const UserPostsComponent = () => {
    const {postStore: {allPosts}, userStore: {allUsers}} = useStore();
    const [userWithPostsState, setUserWithPostsState] = useState<UserWithPostsType[]>([]);

    const userWithPostsArray = useCallback(
        () => allUsers.map(user => ({
            ...user,
            posts: allPosts.filter(post => post.userId === user.id)
        })), [allPosts, allUsers]
    )

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