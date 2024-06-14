import {configureStore} from "@reduxjs/toolkit";
import {counter1Slice} from "./slices/slice1";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        slice1: counter1Slice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>
console.log('typeof store.getState', typeof store.getState);
console.log('store.getState', store.getState)
export const useAppSelector = useSelector.withTypes<RootState>();

type AppDispatch = typeof store.dispatch;
console.log('AppDispatch', typeof store.dispatch);
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();