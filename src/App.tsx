import React, {FC} from 'react';

import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, increment, incrementByAmount} from "./redux/slices/ccounter1Slice";

const App: FC = () => {
    const counter1ValueState = useAppSelector(state => state.counter1SliceState.value)
    const dispatch = useAppDispatch();


    return (
        <div>
            <h2>{counter1ValueState}</h2>
            <button onClick={() => dispatch(increment())}>do increment</button>
            <button onClick={() => dispatch(decrement())}>do decrement</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>do inc by ammount of 10</button>
        </div>
    );
}

export default App;
