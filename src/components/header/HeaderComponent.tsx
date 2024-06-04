import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={'/'}>Login Page</NavLink>
                </li>
                <li>
                    <NavLink to={'/users'}>Register Page</NavLink>
                </li>
                <li>
                    <NavLink to={'/cars'}>Cars Page</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default HeaderComponent;