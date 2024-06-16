import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch} from "react-redux";
import {useAppDispatch} from "./redux/store";
import {userActions} from "./redux/slices/userSlice";
import {postActions} from "./redux/slices/postSlice";
import HeaderComponent from "./components/HeaderComponent";
import {Outlet} from "react-router-dom";

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.loadUsers());
        dispatch(postActions.loadPosts())
    }, []);

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
}

export default App;
