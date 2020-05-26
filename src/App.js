import React from 'react';

import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, toggleLoggedStatus} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
    <h1>Counter {counter}</h1>
    <button onClick={() => dispatch(increment(5))}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button><br></br>
    {isLogged && (<h3>is logged</h3>)}
    <button onClick={() => dispatch(toggleLoggedStatus())}>Toggle logged in state</button>
   
    </div>
  );
}

export default App;
