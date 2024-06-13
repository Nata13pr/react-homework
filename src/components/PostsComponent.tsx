import React from 'react';

import {useStore} from "../context/store";
import PostComponent from "./PostComponent";

const PostsComponent = () => {

    const {postStore: {allPosts}} = useStore();

    return (
        <div>
            {allPosts.map(post => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsComponent;