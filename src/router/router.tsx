import App from "../App";
import UsersPage from "../UsersPage/UsersPage";
import PostsPage from "../UsersPage/PostsPage";
import UserPostsPage from "../UsersPage/UserPostsPage";
import {createBrowserRouter} from "react-router-dom";

const routes=[
    {
        path:'',element:<App/>,children:[
            {path:'users',element:<UsersPage/>},
            {path:'posts',element:<PostsPage/> },
            {path:'userPosts',element: <UserPostsPage/>}
        ]
    }
]

export const router=createBrowserRouter(routes);