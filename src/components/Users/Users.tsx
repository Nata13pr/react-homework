import React, {useState, useEffect, FC} from 'react';

import IUserModel from '../../Models/IUserModel';
import IUserPostModel from '../../Models/IUserPostModel'
import {getAllUsers, getAllPostByUserId} from '../../services/users.api.service';
import User from '../User/User';
import Posts from '../Posts/Posts';

const Users: FC = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IUserPostModel[]>([])

    useEffect(() => {
        getAllUsers().then(value => setUsers(value.data.users))
    }, []);


    const handleButtonClick = (id: number) => {
        getAllPostByUserId(id).then(value => setPosts(value.data.posts))
    }

    return (
        <>
            <ul>
                {
                    users.map((user) => <User key={user.id} user={user} handleButtonClick={handleButtonClick}/>)
                }
                <Posts posts={posts}/>
            </ul>

        </>

    );
};

export default Users;