import {createSlice, createAsyncThunk, isFulfilled, isRejected, isPending} from '@reduxjs/toolkit';

import {characterService} from '../../services'

let initialState = {
    characters: [],
    prevPage: null,
    nextPage: null,
    loading: null,
    error: null,
    trigger:null
}

const getAll = createAsyncThunk(
    'charactersSlice/getAll',
    async (page, thunkApi) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 3000))
            const {data} = await characterService.getAll(page)

            return data;
        } catch (e) {
            const error = e.response.data;
            console.log(error);
            return thunkApi.rejectWithValue(error)
        }
    }
)

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {
        // setResponse: (state, action) => {
        //     const {info: {prev, next}, results} = action.payload;
        //     state.characters = results
        //     state.prevPage = prev
        //     state.nextPage = next
        // },
        // setAllCharacters: (state, action) => {
        //     state.characters = action.payload
        // },
        trigger: state => {
            state.trigger = !state.trigger
        },

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                const {info: {prev, next}, results} = action.payload;
                state.characters = results
                state.prevPage = prev
                console.log(prev)
                console.log(next)
                state.nextPage = next
            })
            .addMatcher(isFulfilled(getAll), state => {
                state.loading = false
                state.error = null
            })
            .addMatcher(isPending(getAll), state => {
                state.loading = true
            })
            .addMatcher(isRejected(getAll), (state, action) => {
                state.error = action.payload.detail
                state.loading = false
            })
})

const {reducer: charactersReducer, actions} = charactersSlice;

const charactersActions = {
    ...actions,
    getAll
}

export {
    charactersReducer,
    charactersActions
}