import React, {FC} from 'react';

import ICommentModel from '../model/ICommentModel';

interface IProps {
    comment: ICommentModel
}

const CommentPage: FC<IProps> = ({comment}) => {
    return (
        <li>
            <h2>name-{comment.name}</h2>
            <p>id-{comment.id}</p>
            <p>email-{comment.email}</p>
            <p>body-{comment.body}</p>
        </li>
    );
};

export default CommentPage;