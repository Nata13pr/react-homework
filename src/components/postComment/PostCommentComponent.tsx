import React, {FC} from 'react';

import {ICommentModel} from "../../models/ICommentModel";

interface IProps {
    comment: ICommentModel
}

const PostCommentComponent: FC<IProps> = ({comment}) => {
    return (
        <li>
            <p>{comment.name}</p>
        </li>
    );
};

export default PostCommentComponent;