import React, {FC} from 'react';

import {IPostModel} from "../../models/IPostModel";

interface IProps {
    post: IPostModel
}

const UserPostComponent: FC<IProps> = ({post}) => {
    return (
        <li>
            {post.title}
        </li>
    );
};

export default UserPostComponent;