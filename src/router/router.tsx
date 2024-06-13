import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/main/MainLayout";
import ErrorLayout from "../layouts/error/ErrorLayout";
import UsersPage from "../pages/users/UsersPage";
import PostsPage from "../pages/posts/PostsPage";
import UserPostsPage from "../pages/userPosts/UserPostsPage";
import CommentsPage from "../pages/comments/CommentsPage";
import PostsCommentsPage from "../pages/postComments/PostsCommentsPage";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {
                index: true,
                path: 'users',
                element: <UsersPage/>
            },
            {
                path: 'posts',
                element: <PostsPage/>
            },
            {
                path: 'userPosts',
                element: <UserPostsPage/>
            },
            {
                path: 'comments',
                element: <CommentsPage/>
            },
            {
                path: 'postComments',
                element: <PostsCommentsPage/>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)