import React, {useEffect} from 'react';

import {useAppDispatch} from "../../redux/store";
import {postActions} from "../../redux/slices/postSlice";
import PostsComponent from "../../components/posts/PostsComponent";

const PostsPage = () => {
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts())
    }, []);

    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;