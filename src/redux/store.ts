import {configureStore, } from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {counter2Slice} from "./slices/counter2Slice";
import {counter1Slice} from "./slices/ccounter1Slice";



const store = configureStore({
    reducer: {
        counter2SliceState: counter2Slice.reducer,
        counter1SliceState: counter1Slice.reducer
    }
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;