import React from 'react';

import {useAppSelector} from "../../redux/store";
import CommentComponent from "../comment/CommentComponent";

const CommentsComponent = () => {

    let {comments, isLoaded} = useAppSelector(state => state.commentSlice)


    return (
        <ul>
            {isLoaded ? comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>) :
                <h3>Loading...</h3>}
        </ul>
    );
};

export default CommentsComponent;