import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import ErrorLayout from "../layout/error/ErrorLayout";
import AuthPage from "../pages/auth/AuthPage";
import CarsPage from "../pages/cars/CarsPage";
import UsersPage from "../pages/users/UsersPage";

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index: true, element: <AuthPage/>},
            {path: '/cars', element: <CarsPage/>},
            {path: '/cars/:id', element: <CarsPage/>},
            {path: '/users', element: <UsersPage/>}
        ]
    }
])