import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 10;
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    // console.log("addValue funtion is about to begain", counter, Math.floor(Math.random()*10));
    // counter = counter + 1;
    // setCounter(counter);
    setCounter(prevCounter => prevCounter + 1)
    setCounter(counter >= 20 ? counter : counter + 1);
    setCounter(counter >= 20 ? counter : counter + 1);
    setCounter(counter >= 20 ? counter : counter + 1);

  }
  const removeValue = () => {
    setCounter(counter <= 0 ? counter:counter - 1)
  }

  return (
    <>
      <h1>Chai aur React Js</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button> 
      {/* Just give a reverece of the funtion in onClick event */}
      <br />
      <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
