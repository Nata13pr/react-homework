import React, {FC} from 'react';
import IUserModel from '../../Models/IUserModel'

interface IProps {
    user: IUserModel,
}

type UserWithChildren<T> = T & { children?: React.ReactNode } & { handleButtonClick: (id: number) => void }
const User: FC<UserWithChildren<IProps>> = ({user, handleButtonClick}) => {

    return (
        <li>
            <h1>First name - {user.firstName}</h1>
            <h2>Last name - {user.lastName}</h2>
            <p>Maiden name - {user.maidenName}</p>
            <p>User name - {user.username}</p>
            <p>Age - {user.age}</p>
            <p>Gender - {user.gender}</p>
            <p>Email - {user.email}</p>
            <p>Phone - {user.phone}</p>
            <p>Password - {user.password}</p>
            <p>Birthdate - {user.birthDate}</p>
            <img src={user.image} alt={user.firstName} width={`150px`}/>
            <p>Blod group - {user.bloodGroup}</p>
            <p>Weight - {user.weight}</p>
            <p>Height - {user.height}</p>
            <p>Eye color - {user.eyeColor}</p>
            <button onClick={() => handleButtonClick(user.id)}>Add posts of {user.lastName} user</button>
        </li>
    );
};

export default User;