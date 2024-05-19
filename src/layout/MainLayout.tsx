import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';

import FooterComponent from '../components/footer/FooterComponent';
import HeaderComponent from '../components/header/HeaderComponent';

const MainLayout: FC = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;