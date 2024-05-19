import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {ICommentModel} from '../../model/ICommentModel';
import {postApiService} from '../../services/api.service';
import PostCommentComponent from '../../components/postComment/PostCommentComponent';
import {IPostModel} from '../../model/IPostModel';
import {useAppLocation} from '../../hooks/useAppLocation';

const PostCommentsComponent = () => {
    const {id} = useParams();

    const {state:post}=useAppLocation<{post:IPostModel}>();

    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        if (id) {
            postApiService.getCommentsOfPost(id)
                .then(value => setComments(value.data))
        }
    }, []);
    return (
        <>
            <h1>All comments to {post.post.title} post</h1>
            <ul>
                {comments.map(comment => <PostCommentComponent key={comment.id} comment={comment}/>)}
            </ul>
        </>

    );
};

export default PostCommentsComponent;