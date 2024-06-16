import React, {useEffect, useMemo, useState} from 'react';

import {useAppSelector} from "../../redux/store";
import {PostWithCommentsType} from "../../models/PostWithCommentsType";
import PostCommentComponent from "../postComment/PostCommentComponent";

const PostCommentsComponent = () => {
    const {postSlice: {posts}, commentSlice: {comments}} = useAppSelector(state => state)
    const [postWithCommentsState, setPostWithCommentsState] = useState<PostWithCommentsType[]>([]);

    const postWithCommentArray = useMemo(() => {
        return () => {
            return posts.map(post => {
                return {...post, comments: comments.filter(comment => comment.id === post.id)}
            })
        }
    }, [comments, posts]);

    useEffect(() => {
        setPostWithCommentsState(postWithCommentArray)
    }, [postWithCommentArray]);

    return (
        <div>
            {
                postWithCommentsState.map(post => <div key={post.id}>
                    <div>{post.title}</div>
                    <ul>{post.comments.map(comment => <PostCommentComponent key={comment.id} comment={comment}/>)}</ul>
                </div>)
            }
        </div>
    );
};

export default PostCommentsComponent;