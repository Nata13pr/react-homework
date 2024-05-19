import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {ICommentModel} from '../../model/ICommentModel';
import {postApiService} from '../../services/api.service';
import PostCommentComponent from '../../components/postComment/PostCommentComponent';

const PostCommentsComponent = () => {
    const {id} = useParams()
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        if (id) {
            postApiService.getCommentsOfPost(id)
                .then(value => setComments(value.data))
        }
    }, []);
    return (
        <ul>
            {comments.map(comment => <PostCommentComponent key={comment.id} comment={comment}/>)}
        </ul>
    );
};

export default PostCommentsComponent;