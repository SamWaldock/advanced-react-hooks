// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => ({...state, ...(typeof action === 'function' ? action(state) : action)});

const Counter = ({initialCount = 0, step = 1}) => {
  const [state, setState] = React.useReducer(countReducer, {count: initialCount});

  const { count } = state;
  const increment = () => setState(currentState => ({count: currentState.count + step}));


  return <button onClick={increment}>{count}</button>;
}

const App = () => {
  return <Counter />;
}

export default App
