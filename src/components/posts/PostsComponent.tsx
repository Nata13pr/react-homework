import React, {useEffect, useState} from 'react';

import {IPostModel} from '../../model/IPostModel';
import {postApiService} from '../../services/post.service';
import PostComponent from '../post/PostComponent';

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        postApiService.getAll()
            .then(value => setPosts(value.data))
    }, []);

    return (
        <ul>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </ul>
    );
};

export default PostsComponent;