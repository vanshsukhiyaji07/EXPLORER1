// import React from 'react'
import { useState } from "react"
import User1 from "./components/User1"
import User2 from "./components/User2"
import { useEffect } from "react"

function App() {

  const [count, setCount] = useState(0)
  const [isvisible, setIsvisible] = useState(true)
  useEffect(() => {
    console.log('render...')
  }, [count])
  return (
    <>
      <h2>hello...!</h2>
      <h2>counter {count}</h2>
      <button onClick={() => setCount(count + 1)}>next</button>
      <button onClick={() => setCount(count - 1)}>reset</button>
      {isvisible ? <User1/> : <User2/>}
      <button onClick={() => setIsvisible(!isvisible)}>change</button>
    </>
  )
}

export default App
