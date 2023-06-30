// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (count, step) => {
  return count + step
}

const Counter = ({initialCount = 0, step = 1}) => {
  const [count, setCount] = React.useReducer(countReducer, initialCount)

  const increment = () => setCount(step)

  return <button onClick={increment}>{count}</button>
}

const App = () => {
  return <Counter />
}

export default App
