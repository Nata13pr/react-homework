import React,{FC} from 'react';
import {NavLink,useNavigate} from 'react-router-dom';

const ContactComponent:FC<any> = ({contact}) => {

    // const navigate=useNavigate();
    //
    // const onClickNavigateHandler=()=>{
    //     navigate(contact.id.toString(),{state:{contact}})
    // }
    return (
        <div>
            lllll
        {/*    {contact.email}*/}
        {/*    <NavLink to={contact.id.toString()}>details</NavLink>*/}
        {/*<button onClick={onClickNavigateHandler}>details by button</button>*/}
        </div>
    );
};

export default ContactComponent;