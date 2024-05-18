import {createBrowserRouter} from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage';
import UsersComponent from '../components/UsersComponent';
import PostsComponent from '../components/PostsComponent';
import CommentsComponent from '../components/CommentsComponent';
import ErrorLayout from '../layout/ErrorLayout';

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [/*child is - Outlet in your layout*/
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersComponent/>},
            {path: 'posts', element: <PostsComponent/>},
            {path: 'comments', element: <CommentsComponent/>}

        ]
    }
])