import React, {FC} from 'react';

import IUserModel from '../model/IUserModel'

interface IProps {
    user: IUserModel
}

const UserPage: FC<IProps> = ({user}) => {
    return (
        <li>
            <h1>name-{user.name}</h1>
            <p>username-{user.username}</p>
            <p>email-{user.email}</p>
            <p>phone-{user.phone}</p>
            <p>website-{user.website}</p>
            <p>Address{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.address.zipcode}</p>
            <p>{user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
        </li>
    );
};

export default UserPage;