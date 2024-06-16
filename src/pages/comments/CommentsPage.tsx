import React, {useEffect} from 'react';
import {useAppDispatch} from "../../redux/store";
import {commentActions} from "../../redux/slices/commentSlice";
import CommentsComponent from "../../components/comments/CommentsComponent";

const CommentsPage = () => {

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentActions.loadComments())
    }, []);

    return (
        <div>
            <CommentsComponent/>
        </div>
    );
};

export default CommentsPage;