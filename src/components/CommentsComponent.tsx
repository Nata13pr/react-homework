import React, {useState, useEffect, FC} from 'react';

import ICommentModel from '../model/ICommentModel';
import {commentApiService} from '../services/api.service';
import CommentPage from '../pages/CommentPage';

const CommentsComponent: FC = () => {
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        commentApiService.getAllComments().then(value => setComments(value.data))
    }, []);
    return (
        <ul>
            {comments.map(comment => <CommentPage key={comment.id} comment={comment}/>)}
        </ul>
    );
};

export default CommentsComponent;