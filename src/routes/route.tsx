import {createBrowserRouter} from "react-router-dom";

import MainLayout from "../layouts/main/MainLayout";
import LogInPage from "../pages/auth/LogInPage";
import CarsPage from "../pages/cars/CarsPage";
import SignUpPage from "../pages/auth/SignUpPage";

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        loader: () => {
            console.log('sdfsdfsdf')
            return null
        },
        children: [
            {
                index: true,
                element: <LogInPage/>
            },
            {
                path: '/cars',
                element: <CarsPage/>
            },
            {
                path: '/users',
                element: <SignUpPage/>
            }
        ]
    }
])