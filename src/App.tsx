// import React from 'react';
// import useToggle from '../src/hooks/useToggle'
//
// import './App.css';
//
// function App() {
//   const [value,toggleValue]=useToggle(true)
//   // trueoggleValue(false)
// function handleTogle(){
//     toggleValue()
// }
//   return (
//     <div className="App">
// <button onClick={handleTogle}>{Number(value)}</button>
//     </div>
//   );
// }
//
// export default App;


import React from 'react';
import useToggle from '../src/hooks/useToggle';

import './App.css';

function App() {
    const [value, toggleValue] = useToggle(true);
    console.log(value)
    console.log(toggleValue)
    function handleToggle() {
         toggleValue(false);
        console.log('heelllll')
    }

    return (
        <div className="App">
            <button onClick={()=>handleToggle()}>{Number(value)}</button>
        </div>
    );
}

export default App;