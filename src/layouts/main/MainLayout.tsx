import React from 'react';
import {Outlet} from "react-router-dom";

import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import {useAppSelector} from "../../redux/store";

const MainLayout = () => {
    const {favoriteUser} = useAppSelector(state => state.userSlice)

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>

            <hr/>
            {favoriteUser && <div>{favoriteUser.email}</div>}
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;