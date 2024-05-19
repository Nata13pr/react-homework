import React, {FC} from 'react';

import {IPostModel} from '../../model/IPostModel';
import {useNavigate} from 'react-router-dom'

interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {
    const navigate = useNavigate();
    return (
        <li>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <button onClick={() => {
                navigate(`${post.id.toString()}/comments`, {state: {post}})
            }}>
                Show comments for this post
            </button>
        </li>
    );
};

export default PostComponent;