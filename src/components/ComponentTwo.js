import React from 'react';
import {useDispatch}  from 'react-redux';
import {counter2Actions} from '../redux/slices/counter2Slice'

const ComponentTwo = () => {
    const dispatch=useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(counter2Actions.inc())}>inc</button>
            <button onClick={()=>dispatch(counter2Actions.dec())}>dec</button>
            <button onClick={()=>dispatch(counter2Actions.reset(9))}>reset</button>
        </div>
    );
};

export default ComponentTwo;