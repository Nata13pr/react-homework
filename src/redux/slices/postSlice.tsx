import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IPostModel} from "../../models/IPostModel";
import {postService} from "../../services/post/post.service";

type PostSliceType = {
    posts: IPostModel[];
    error: string | unknown;
    isLoaded: boolean;
}

const postInitState: PostSliceType = {
    posts: [],
    error: '',
    isLoaded: false,
}
const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getAllPosts();
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase((loadPosts.rejected), (state, action) => {
                state.error = action.payload;
            })
            .addMatcher(isFulfilled(loadPosts), (state, action) => {
                state.isLoaded = true
            })
            .addMatcher(isRejected(loadPosts), () => {

            })
})

export const postActions = {
    ...postSlice.actions,
    loadPosts
}