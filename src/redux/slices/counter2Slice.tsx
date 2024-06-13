import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType = {
    value: number;
}


const initialState2: CounterStateType = {
    value: 0,
}


export const counter2Slice =
    createSlice({
        name: 'counter2SliceName',
        initialState: initialState2,
        reducers: {
            increment2: (state) => {
                state.value = state.value + 1;
            },
            decrement2: (state) => {
                state.value = state.value - 1;
            },
            incrementByAmount2: (
                state, action: PayloadAction<number>
            ) => {
                state.value = state.value + action.payload;
            }
        }
    })

export const {
    increment2,
    decrement2,
    incrementByAmount2
} = counter2Slice.actions;
