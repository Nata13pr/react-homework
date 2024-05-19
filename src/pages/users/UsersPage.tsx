import React from 'react';
import { Outlet } from 'react-router-dom';
import UsersComponent from '../../components/users/UsersComponent';

const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;