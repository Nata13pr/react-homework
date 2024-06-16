import React from 'react';

import UserComponent from "./UserComponent";
import {useAppSelector} from "../redux/store";

const UsersComponent = () => {
    let {users, isLoaded} = useAppSelector(state => state.userSlice);
    return (
        <div>
            {
                isLoaded ? users.map(user => <UserComponent key={user.id} user={user}/>)
                    :
                    <h3>loading ...</h3>
            }
        </div>
    );
};

export default UsersComponent;