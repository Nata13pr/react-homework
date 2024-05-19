import React from 'react';
import { Outlet } from 'react-router-dom';

const UsersPage = () => {
    return (
        <div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;