import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';


const Child2 = () =>{

    let [state, dispatch] = useReducer(counterReducer, 20);
    console.log(state);

    return(
        <div>
            <h3>Value of Reducer : {state}</h3>
            <button onClick={ () => dispatch('INCREMENT') }> Increment </button>
            <button onClick={ () => dispatch('DECREMENT') }> Decrement </button>
        </div>
    )
}

export default Child2;