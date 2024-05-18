import React, {FC} from 'react';

import IPostModel from '../model/IPostModel';

interface IProps {
    post: IPostModel,
}

const PostPage: FC<IProps> = ({post}) => {
    return (
        <li>
            <h2>title-{post.title}</h2>
            <p>id-{post.id}</p>
            <p>body-{post.body}</p>
        </li>
    );
};

export default PostPage;