import React, {useState} from 'react';

import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, decrementByAmount, increment, incrementByAmount, reset} from "./redux/slices/slice1";

function App() {
    const [number, setNumber] = useState<number>(0);

    const {value} = useAppSelector(state => state.slice1);
    const dispatch = useAppDispatch();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(Number(e.target.value))
    }

    return (
        <div>
            <input type={"text"} value={number} onChange={handleInput}/>

            <h2>{value}</h2>
            <div>
                <button onClick={() => {
                    dispatch(increment())
                }}>increment
                </button>
                <button onClick={() => {
                    dispatch(decrement())
                }}>decrement
                </button>
            </div>
            <div>
                <button onClick={() => {
                    dispatch(incrementByAmount(number))
                }}>increment by {number}
                </button>
                <button onClick={() => {
                    dispatch(decrementByAmount(number))
                }}>decrement by {number}
                </button>
            </div>

            <button onClick={() => {
                dispatch(reset())
            }}>reset
            </button>
        </div>
    );
}

export default App;
