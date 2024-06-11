import React, {useEffect, useMemo, useState} from 'react';

import {useContextProvider} from "../../context/ContextProvider";
import {PostWithCommentsType} from "../../models/PostWithCommentsType";

import PostCommentComponent from "../postComment/PostCommentComponent";

const PostCommentsComponent = () => {
    const {postStore: {allPosts}, commentsStore: {allComments}} = useContextProvider()
    const [postsWithCommentsState, setPostsWithCommentState] = useState<PostWithCommentsType[]>([])

    const postWithCommentsArray = useMemo(() => {
        return () => {
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comment => comment.postId === post.id)}
            })
        }
    }, [allComments, allPosts]);

    useEffect(() => {
        setPostsWithCommentState(postWithCommentsArray)
    }, [postWithCommentsArray]);

    return (
        <div>
            {postsWithCommentsState.map(post => <div key={post.id}>
                <div>{post.title}</div>
                <ul>
                    {post.comments.map(comment => <PostCommentComponent comment={comment} key={comment.id}/>)}
                </ul>
            </div>)}
        </div>
    );
};

export default PostCommentsComponent;