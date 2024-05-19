import React,{FC} from 'react';
import {NavLink,useNavigate} from 'react-router-dom';

const ContactComponent:FC<any> = ({contact}) => {

    const navigate=useNavigate();

    const onClickNavigateHandler=()=>{
        console.log(contact.id.toString())
        navigate(
            // "/contacts/" + contact.id.toString(),
            `/contacts/${contact.id.toString()}`,
            // contact.id.toString(),
            {state:{contact}}
        )
    }
    return (
        <div>

            {contact.email}
            <NavLink to={`/contacts/${contact.id.toString()}`}>details</NavLink>
        <button onClick={onClickNavigateHandler}>details by button</button>
        </div>
    );
};

export default ContactComponent;