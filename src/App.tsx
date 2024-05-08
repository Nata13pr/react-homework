import React from 'react';
import useToggle from '../src/hooks/useToggle'

import './App.css';

import { useState } from "react"
function App() {
  const [value,toggleValue]=useToggle(true)
  // trueoggleValue(false)

  return (
    <div className="App">

    </div>
  );
}

export default App;
