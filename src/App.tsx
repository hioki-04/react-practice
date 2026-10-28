import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <>
      <p>Count：{count}</p>

      <button onClick={handlePlus}>+1</button>
      <button onClick={handleMinus}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
