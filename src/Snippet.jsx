import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Snippet() {
  // const [count, setCount] = useState(0)
  const [countInfo, setCountInfo] = useState({
    count: 0,
    message: "counting"
  })
  const { count, message } = countInfo

  // let countInfoCount = countInfo.count
  // let countInfoMessage = countInfo.message

  const handleClick = () => {
    setCountInfo(({ count, message }) => ({
      count: count + 1, 
      message: message
    }))
    
    // setCountInfo(({ count, message }) => {
    //   return {
    //     count: count + 1, 
    //     message: message
    //   }
    // })
    
    // setCountInfo((info) => {
    //   return {
    //     count: info.count + 1, 
    //     message: info.message
    //   }
    // })

    alert(`${message}, current count: ${count}`)
  }

  let effectiveMessage = count

  useEffect(() => {
    alert("effective ako")
    effectiveMessage = count
  }, [count])
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
        {/* <button onClick={() => setCount(count => {
          alert("clicked")
          return count + 1
        })}> */}
        <button onClick={handleClick}>
          count is {count}
          <br />
          effective count: {effectiveMessage}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
