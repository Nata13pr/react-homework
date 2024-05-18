import React, {FC, useState, useEffect} from 'react';

import {postApiService} from '../services/api.service';
import IPostModel from '../model/IPostModel';
import PostPage from '../pages/PostPage';

const PostsComponent: FC = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        // (async () => {
        //     const a =  await postApiService.getAllPosts()
        //         .then((r) => {
        //         console.log("Log fron first then", r);
        //
        //         return "Returned from first then"
        //     }).then((r2) => {
        //             console.log(r2)
        //
        //             return 257
        //         });
        //
        //     console.log(2,a)
        // })()
        postApiService.getAllPosts().then(value => setPosts(value.data))
    }, []);

    return (
        <ul>
            {posts.map(post => <PostPage key={post.id} post={post}></PostPage>)}
        </ul>
    );
};

export default PostsComponent;