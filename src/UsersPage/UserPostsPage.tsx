import React, {useEffect, useMemo, useState} from 'react';
import UserPostsComponent from "../components/UserPostsComponent";
import {UserWithPostsType} from "../models/UserWithPostsType";
import {useContextProvider} from "../context/ContextProvider";

const UserPostsPage = () => {
    //
    // const {userStore: {allUsers}, postStore: {allPosts}} = useContextProvider();
    // const [userWithPostsState, setUserWithPostsState] = useState<UserWithPostsType[]>([])
    //
    //
    // const usersWithPostArray = useMemo(() => {
    //     return allUsers.map(user => {
    //         return {...user, posts: allPosts.filter(post => post.userId === user.id)}
    //     })
    // }, [allPosts, allUsers]);
    //
    // useEffect(() => {
    //     setUserWithPostsState(usersWithPostArray)
    // }, [usersWithPostArray]);

    return (
        <div>
            <UserPostsComponent />
        </div>
    );
};

export default UserPostsPage;