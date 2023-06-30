// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => {
  const { type, step } = action;
  const { count } = state;

  switch (type) {
    case 'INCREMENT': {
      return { count: count + step };
    }
    default:
      return state;
  }
}

const Counter = ({initialCount = 0, step = 1}) => {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  console.log(state)

  const { count } = state;
  const increment = () => dispatch({ type: 'INCREMENT', step })


  return <button onClick={increment}>{count}</button>;
}

const App = () => {
  return <Counter />;
}

export default App
