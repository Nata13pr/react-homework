import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {postActions} from "./redux/slices/postSlice";
import {userActions} from "./redux/slices/userSlice";

function App() {

    const dispatch = useAppDispatch();

    const {userSlice: {users, isLoaded}, postSlice: {posts}} = useAppSelector(state => state)
    useEffect(() => {
        dispatch(userActions.loadUsers())
        dispatch(postActions.loadPosts())
    }, []);
    return (
        <div>
            {
                isLoaded ? users.map(user => <div key={user.id}>{user.name} : {
                    user.email
                }
                </div>) : <h2>Loading...</h2>
            }
            <hr/>
            <p>POSTS</p>
            {
                posts.map(post => <div key={post.id}>{post.title}</div>)
            }
        </div>
    );
}

export default App;
