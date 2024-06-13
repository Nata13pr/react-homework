import React from 'react';

import {useStore} from "../../context/store";
import UserComponent from "../user/UserComponent";

const UsersComponent = () => {
    const {userStore: {allUsers}} = useStore();

    return (
        <div>
            {allUsers.map(user =>
                <UserComponent key={user.id} user={user}/>
            )}
        </div>
    );
};

export default UsersComponent;