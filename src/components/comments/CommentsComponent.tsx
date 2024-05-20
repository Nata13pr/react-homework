import React, {useEffect, useState} from 'react';

import {commentApiService} from '../../services/comment.service';
import {ICommentModel} from '../../model/ICommentModel';
import CommentComponent from '../comment/CommentComponent';

const CommentsComponent = () => {
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        commentApiService.getAll()
            .then(value => setComments(value.data))
    }, []);
    return (
        <ul>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </ul>
    );
};

export default CommentsComponent;