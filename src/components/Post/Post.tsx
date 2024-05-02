import React, {FC} from 'react';

interface IProps {
    body: string,
    title: string,
    tags: string[],
    rections: number
}

type PostWithChildren<T> = T & { children?: React.ReactNode }
const Post: FC<PostWithChildren<IProps>> = ({body, title, tags, rections}) => {
    return (
        <li>
            <h3>Title - {title}</h3>
            <p>Body - {body}</p>
            <p>Reactions - {rections}</p>
            <ul>
                {tags.map(tag=><li key={tag}>{tag}</li>)}
            </ul>
        </li>
    );
};

export default Post;