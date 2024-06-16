import React from 'react';

import UserComponent from "../user/UserComponent";
import {useAppSelector} from "../../redux/store";

const UsersComponent = () => {
    let {users, isLoaded} = useAppSelector(state => state.userSlice)

    return (
        <ul>
            {isLoaded ?
                users.map(user => <UserComponent key={user.id} user={user}/>) : <h3>Loading...</h3>
            }
        </ul>
    );
};

export default UsersComponent;