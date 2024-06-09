import App from "../App";
import UsersPage from "../UsersPage/UsersPage";
import PostsPage from "../UsersPage/PostsPage";
import UserPostsPage from "../UsersPage/UserPostsPage";
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