import React, {FC} from 'react';
import FooterComponent from '../components/footer/FooterComponent';
import {Outlet} from 'react-router-dom';
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