import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IUserModel} from "../../models/IUserModel";
import {userService} from "../../services/user/user.service";


type UserSliceType = {
    users: IUserModel[];
    error: string | unknown;
    favoriteUser: IUserModel | null;
    isLoaded: boolean;
}

const userInitState: UserSliceType = {
    users: [],
    error: '',
    favoriteUser: null,
    isLoaded: false,
}
const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await userService.getAllUsers();
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {
        setFavoriteUser: (state, action: PayloadAction<IUserModel>) => {
            state.favoriteUser = action.payload;
        },
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase((loadUsers.rejected), (state, action) => {
                state.error = action.payload;
            })
            .addMatcher(isFulfilled(loadUsers), (state, action) => {
                state.isLoaded = true
            })
            .addMatcher(isRejected(loadUsers), () => {

            })
})

export const userActions = {
    ...userSlice.actions,
    loadUsers
}