import React, {FC} from 'react';

import {IUserModel} from "../../models/IUserModel";
import {useAppDispatch} from "../../redux/store";
import {userActions} from "../../redux/slices/userSlice";

interface IProps {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user}) => {
    const dispatch = useAppDispatch();
    return (
        <li>
            {user.id} {user.name}
            <button onClick={() => dispatch(userActions.setFavoriteUser(user))}>set as favorite</button>
        </li>
    );
};

export default UserComponent;