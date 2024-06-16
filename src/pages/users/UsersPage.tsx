import React, {useEffect} from 'react';

import {useAppDispatch} from "../../redux/store";
import {userActions} from "../../redux/slices/userSlice";
import UsersComponent from "../../components/users/UsersComponent";

const UsersPage = () => {
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, []);

    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;