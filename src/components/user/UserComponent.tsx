import React,{FC} from 'react';
import { IUserModel } from '../../model/IUserModel';
import { useNavigate } from 'react-router-dom';

interface IProps{
    user:IUserModel
}
const UserComponent:FC<IProps> = ({user}) => {
    const navigate=useNavigate();
    console.log(user.id.toString())
    return (
        <div>
            {user.name}
            <button onClick={()=>{
                navigate(`/posts?userId=${user.id.toString()}`,{state:{foo:'footbar'}})
            }}>
                Show posts of this user
            </button>
        </div>
    );
};

export default UserComponent;