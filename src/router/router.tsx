import App from "../App";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UserPostsPage from "../pages/UserPostsPage";
import {createBrowserRouter, RouteObject} from "react-router-dom";

const routes:RouteObject[]=[
    {
        path:'',element:<App/>,children:[
            {path:'users',element:<UsersPage/>},
            {path:'posts',element:<PostsPage/> },
            {path:'userPosts',element: <UserPostsPage/>}
        ]
    }
]

export const router=createBrowserRouter(routes);