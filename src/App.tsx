import React from 'react';
import useToggle from '../src/hooks/useToggle'

import './App.css';

function App() {
  const [value,toggleValue]=useToggle(true)
  // trueoggleValue(false)

  return (
    <div className="App">

    </div>
  );
}

export default App;
