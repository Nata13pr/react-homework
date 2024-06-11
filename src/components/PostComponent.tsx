import React, {FC} from 'react';
import {IPostsModel} from "../models/IPostsModel";

interface IProps {
    post: IPostsModel
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            {post.id} {post.title}
        </div>
    );
};

export default PostComponent;