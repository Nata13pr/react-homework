import React, {useEffect, useMemo, useState} from 'react';

import {useStore} from "../context/store";
import {UserWithPostsTypes} from "../models/UserWithPostsTypes";

const UserPostsComponent = () => {
    const {userStore: {allUsers}, postStore: {allPosts}} = useStore();

    const [userWithPostsState, setUsersWithPostsState] = useState<UserWithPostsTypes[]>([])

    const userWithPostsArray = useMemo(() => {
        return () => {
            return allUsers.map(user => {
                return {...user, posts: allPosts.filter(post => post.userId === user.id)}
            })
        }
    }, [allPosts, allUsers]);

    useEffect(() => {
        setUsersWithPostsState(userWithPostsArray)
    }, [userWithPostsArray]);

    return (
        <div>
            {
                userWithPostsState.map(user => <div key={user.id}>
                    <div>{user.username}</div>
                    <ul>
                        {
                            user.posts.map(post => <li key={post.id}>{post.title}</li>)
                        }
                    </ul>
                </div>)
            }
        </div>
    );
};

export default UserPostsComponent;