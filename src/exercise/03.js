// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

const CountProvider = ({ children, ...props }) => {
  const [count, setCount] = React.useState(0);
  const value = [count, setCount];
  
  return (
    <CountContext.Provider value={value} {...props}>
      {children}
    </CountContext.Provider>
  )
}

function CountDisplay() {
  const [count] = React.useContext(CountContext);

  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = React.useContext(CountContext);
  const increment = () => setCount(c => c + 1)

  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  )
}

export default App
