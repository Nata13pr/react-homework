import React, {useState, useEffect, FC} from 'react';

import IUserModel from '../model/IUserModel';
import {userApiService} from '../services/api.service';
import UserPage from '../pages/UserPage';

const UsersComponent: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        userApiService.getAllUsers().then(value => setUsers(value.data))
    }, []);
    return (
        <ul>
            {users.map(user => <UserPage key={user.id} user={user}/>
            )}
        </ul>
    );
};

export default UsersComponent;