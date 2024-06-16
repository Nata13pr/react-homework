import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ICommentModel} from "../../models/ICommentModel";
import {commentService} from "../../services/comment/comment.service";

type CommentSliceType = {
    comments: ICommentModel[];
    error: string | unknown;
    isLoaded: boolean;
}

const commentInitState: CommentSliceType = {
    comments: [],
    error: '',
    isLoaded: false,
}
const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_, thunkAPI) => {
        try {
            const comments = await commentService.getAllComments();
            return thunkAPI.fulfillWithValue(comments);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: commentInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action) => {
                state.comments = action.payload;
            })
            .addCase((loadComments.rejected), (state, action) => {
                state.error = action.payload;
            })
            .addMatcher(isFulfilled(loadComments), (state, action) => {
                state.isLoaded = true;
            })
            .addMatcher(isRejected(loadComments), () => {

            })
})

export const commentActions = {
    ...commentSlice.actions,
    loadComments
}