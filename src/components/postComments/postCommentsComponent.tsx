import React, {useEffect, useMemo, useState} from 'react';

import {useStore} from "../../context/store";
import {PostWithCommentsType} from "../../models/PostWithCommentsType";
import PostCommentComponent from "../postComment/PostCommentComponent";

const PostCommentsComponent = () => {
    const {postStore: {allPosts}, commentsStore: {allComments}} = useStore();
    const [postsWithCommentState, setPostsWithCommentState] = useState<PostWithCommentsType[]>([]);

    const postWithCommentsArray = useMemo(() => {
        return () => {
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comment => comment.postId === post.id)}
            })
        }
    }, [allComments, allPosts])

    useEffect(() => {
        setPostsWithCommentState(postWithCommentsArray)
    }, [postWithCommentsArray]);
    return (
        <div>

            {postsWithCommentState.map(post => <div key={post.id}>
                <div>{post.title}</div>
                <ul>{post.comments.map(comment => <PostCommentComponent key={comment.id} comment={comment}/>)}</ul>
            </div>)}
        </div>
    );
};

export default PostCommentsComponent;