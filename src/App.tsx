import React from 'react';
import './App.css';
import useToggle from '../src/hooks/useToggle';
import usePrevious from '../src/hooks/usePrevious';
import useStorage from '../src/hooks/useStorage'


function App() {
    const toggle = useToggle(true)
    console.log(toggle)
    const value = usePrevious(8)
    console.log(value)
    const localStorage = useStorage('Helllo hellll')
    console.log(localStorage)
    return (
        <div className="App">
        </div>
    );
}

export default App;
