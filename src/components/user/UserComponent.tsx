import React, {FC} from 'react';

import {IUserModel} from '../../model/IUserModel';
import {useNavigate} from 'react-router-dom';

interface IProps {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user}) => {
    const navigate = useNavigate();
    return (
        <div>
            {user.name}
            <button onClick={() => {
                navigate(`${user.id.toString()}/posts`, {state: {user}})
            }}>
                Show posts of this user
            </button>
        </div>
    );
};

export default UserComponent;