import React, {useState} from 'react';
import Parent from './Parent.js';
import counterContext from './CounterContext';
import './App.css';

function App() {
  let count = useState(200);
  // let [count, setCount] = useState(50);
  return (
    <counterContext.Provider value={count}>
    <div className='App'>
      <h2>Welcome to React Learning</h2>
      <h6>By Sohail</h6>
      <Parent />
    </div>
    </counterContext.Provider>
  );
}

export default App;
