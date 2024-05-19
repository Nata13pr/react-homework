import React, {useState, useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';

import {userApiService} from '../../services/api.service';
import {IPostModel} from '../../model/IPostModel';
import UserPostComponent from '../../components/userPost/UserPostComponent';
import {useAppLocation} from '../../hooks/useAppLocation';
import {IUserModel} from '../../model/IUserModel';


const UserPostsComponent = () => {
    const {id} = useParams();

    const {state: user} = useAppLocation<{ user: IUserModel }>();

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        if (id) {
            userApiService.getPostsOfUser(id)
                .then(value => setPosts(value.data))
        }
    }, [id]);

    return (
        <>
            <h1>All posts of {user.user.name}</h1>
            <ul>
                {posts.map(post => <UserPostComponent key={post.id} post={post}/>)}
            </ul>
        </>

    );
};

export default UserPostsComponent;