import React from 'react';

import {useAppSelector} from "../../redux/store";
import PostComponent from "../post/PostComponent";

const PostsComponent = () => {
    let {posts, isLoaded} = useAppSelector(state => state.postSlice)

    return (
        <ul>
            {isLoaded ? posts.map(post => <PostComponent key={post.id} post={post}/>) : <h3>Loading...</h3>}
        </ul>
    );
};

export default PostsComponent;