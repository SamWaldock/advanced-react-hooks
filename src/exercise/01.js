// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, newState) => {
  return newState
}

const Counter = ({initialCount = 0, step = 1}) => {
  const [count, setCount] = React.useReducer(countReducer, initialCount)

  const increment = () => setCount(count + step)
  
  return <button onClick={increment}>{count}</button>
}

const App = () => {
  return <Counter />
}

export default App
