import {createBrowserRouter} from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import ErrorLayout from '../layout/ErrorLayout';
import MainLayout from '../layout/MainLayout';
import UsersPage from '../pages/users/UsersPage';
import PostsPage from '../pages/posts/PostsPage';
import CommentsPage from '../pages/comments/CommentsPage';

export const routerConfig=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorLayout/>,
        children:[
            {index:true,element:<HomePage/>},
            {
                path:'/users',element: <UsersPage/>,
                children:[
                    // {path:'/:id',element:<PostsPage/>}
                ]
            },
            {path:'/posts?userId=:id',element:<PostsPage/>},
            {path:'/posts',element:<PostsPage/>},
            {path:'/comments',element:<CommentsPage/> }
        ]
    }
    ]

)