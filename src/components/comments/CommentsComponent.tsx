import React from 'react';

import {useStore} from "../../context/store";
import CommentComponent from "../comment/CommentComponent";

const CommentsComponent = () => {
    const {commentsStore: {allComments}} = useStore();

    return (
        <ul>
            {allComments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </ul>
    );
};

export default CommentsComponent;