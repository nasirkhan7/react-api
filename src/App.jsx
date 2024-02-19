import { useState } from 'react'
import APIs from './APIs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <APIs />
    </>
  )
}

export default App
