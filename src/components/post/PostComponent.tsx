import React,{FC} from 'react';
import { IPostModel } from '../../model/IPostModel';

interface IProps{
    post:IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <li>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </li>
    );
};

export default PostComponent;