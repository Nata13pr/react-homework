import {createBrowserRouter} from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import ErrorLayout from '../layout/ErrorLayout';
import MainLayout from '../layout/MainLayout';
import UsersPage from '../pages/users/UsersPage'

export const routerConfig=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorLayout/>,
        children:[
            {index:true,element:<HomePage/>},
            {
                path:'users',element: <UsersPage/>
            }
        ]
    }
    ]

)