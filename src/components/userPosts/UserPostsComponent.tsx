import React, {useCallback, useEffect, useState} from 'react';

import UserPostComponent from "../userPost/UserPostComponent";
import {useAppSelector} from "../../redux/store";
import {UserWithPostsType} from "../../models/UserWithPostsType";

const UserPostsComponent = () => {
    const {postSlice: {posts}, userSlice: {users}} = useAppSelector(state => state)
    const [userWithPostsState, setUserWithPostsState] = useState<UserWithPostsType[]>([]);

    const userWithPostsArray = useCallback(
        () => users.map(user => ({
            ...user,
            posts: posts.filter(post => post.userId === user.id)
        })), [users, posts]);

    useEffect(() => {
        setUserWithPostsState(userWithPostsArray)
    }, [userWithPostsArray]);
    return (
        <div>
            {userWithPostsState.map(user => <div key={user.id}>
                <div>{user.name}</div>
                <ul>
                    {user.posts.map(post => <UserPostComponent key={post.id} post={post}/>)}
                </ul>
            </div>)}
        </div>
    );
};

export default UserPostsComponent;