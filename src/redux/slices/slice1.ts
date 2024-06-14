import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType = {
    value: number;
}

const initialState: CounterStateType = {
    value: 0
}

export const counter1Slice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        }
    }
})

export const {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    reset
} = counter1Slice.actions;