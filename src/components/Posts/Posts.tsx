import React, {FC} from 'react';

import IUserPostModel from '../../Models/IUserPostModel'
import Post from '../Post/Post';

interface IProps {
    posts: IUserPostModel[]
}

type PostsWithChildren<T> = T & { children?: React.ReactNode }
const Posts: FC<PostsWithChildren<IProps>> = ({posts}) => {
    return (
        <ul>
            {posts.map(post => <Post key={post.id} body={post.body} title={post.title} tags={post.tags}
                                     rections={post.reactions}/>)}
        </ul>
    );
};

export default Posts;