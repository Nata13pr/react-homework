import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/main/MainLayout";
import ErrorLayout from "../layouts/error/ErrorLayout";
import App from "../App";

const routes: RouteObject[] = [{
    path: '/',
    element: <MainLayout/>,
    errorElement: <ErrorLayout/>,
    children: [
        {index: true, element: <App/>}
    ]
}
]
export const router = createBrowserRouter(routes)