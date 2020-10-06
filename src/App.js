import React, {useState} from 'react';
import Parent from './Parent.js';
import CounterContext from './CounterContext';
import './App.css';

function App() {
  let count = useState(200);
  // let [count, setCount] = useState(50);
  return (
    <CounterContext.Provider value={count}>
    <div className='App'>
      <h2>Welcome to React Learning</h2>
      <h6>By Sohail Ishaque</h6>
      <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
