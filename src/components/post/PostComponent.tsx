import React, {FC} from 'react';

import {IPostModel} from "../../models/IPostModel";

interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <li>
            {post.id} {post.title}
        </li>
    );
};

export default PostComponent;