import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () =>{
    let counterValue = useContext(counterContext);
    console.log(counterValue)
    return(
        <div className='App-header'>
        <h2>No : {counterValue[0]}</h2>
        <button onClick={()=> {counterValue[1](++counterValue[0])} }>Increment</button>
        </div>
    )
}

export default Child;