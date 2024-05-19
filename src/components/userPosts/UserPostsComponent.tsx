import React, {useState, useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';

import {userApiService} from '../../services/api.service';
import {IPostModel} from '../../model/IPostModel';
import UserPostComponent from '../../components/userPost/UserPostComponent';

const UserPostsComponent = () => {
    const {id}=useParams();

    const [posts,setPosts]=useState<IPostModel[]>([]);

    useEffect(() => {
         if(id){
             userApiService.getPostsOfUser(id)
                 .then(value=>setPosts(value.data))
         }
    }, [id]);

    return (
        <ul>
            {posts.map(post=><UserPostComponent key={post.id} post={post}/>)}
        </ul>
    );
};

export default UserPostsComponent;