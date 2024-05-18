import React from 'react';
import {NavLink} from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div>
            <span><NavLink to={'about'}>about</NavLink></span>
            <span><NavLink to={'contacts'}>contacts</NavLink></span>
            <span><NavLink to={'dfsdfs'}>dfsdfs</NavLink></span>
        </div>
    );
};

export default HeaderComponent;