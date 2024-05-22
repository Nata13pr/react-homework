import React, {useState} from 'react';
import {useSelector} from 'react-redux'

import './App.css';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo'

function App() {
    const {count} = useSelector(state => state.counter1);
    const {count:count2}=useSelector(state=>state.counter2)

    return (
        <div className="App">
           <div>count1:{count}</div>
            <div>count2:{count2}</div>
            <ComponentOne/>
            <ComponentTwo/>
        </div>
    );
}

export default App;
