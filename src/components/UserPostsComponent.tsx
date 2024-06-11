import React, {FC, useEffect, useMemo, useState} from 'react';
import {UserWithPostsType} from "../models/UserWithPostsType";
import {useContextProvider} from "../context/ContextProvider";

const UserPostsComponent:FC= () => {

   const {postStore:{allPosts},userStore:{allUsers}}=useContextProvider()
    const [userWithPostsState,setUserWithPostsState]=useState<UserWithPostsType[]>([])

    const userWithPostsArray=useMemo(()=>{
        return()=>{
            return allUsers.map(user=>{
                return{
                    ...user,posts:allPosts.filter(post=>post.userId===user.id)
                }
            })
        }
    },[allPosts,allUsers]);

    useEffect(() => {
        setUserWithPostsState(userWithPostsArray)
    }, [userWithPostsArray]);
    return (
        <div>
            {
                userWithPostsState.map(user=><div key={user.id}>
                    {user.name}
                    <ul>{
                        user.posts.map(post=>(<li key={post.id}>{post.title}</li>))
                    }</ul>
                </div>)
            }
        </div>
    );
};

export default UserPostsComponent;