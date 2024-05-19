import React, { FC } from 'react';
import { ICommentModel } from '../../model/ICommentModel';

interface IProps{
    comment:ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <li>
            <h2>{comment.name}</h2>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </li>
    );
};

export default CommentComponent;