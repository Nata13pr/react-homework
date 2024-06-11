import React from 'react';

import {useContextProvider} from "../../context/ContextProvider";
import CommentComponent from "../comment/CommentComponent";

const CommentsComponent = () => {
    const {commentsStore: {allComments}} = useContextProvider()
    return (
        <ul>
            {allComments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </ul>
    );
};

export default CommentsComponent;