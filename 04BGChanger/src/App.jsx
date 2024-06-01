import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className= "flex flex-wrap justify-center gap-3 shadow-lg bg-gray-300 px-3 py-2 rounded-2xl">
          <button onClick={() => setColor("red")} className='outline-none px-5 rounded-3xl py-2  shadow-lg' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor("olive")} className='outline-none px-5 rounded-3xl py-2  shadow-lg' style={{backgroundColor:"olive"}}>olive</button>
          <button onClick={() => setColor("pink")} className='outline-none px-5 rounded-3xl py-2 shadow-lg' style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={() => setColor("palegreen")} className='outline-none px-5 rounded-3xl py-2  shadow-lg' style={{backgroundColor:"palegreen"}}>palegreen</button>
          <button onClick={() => setColor("white")} className='outline-none px-5 rounded-3xl py-2  shadow-lg' style={{backgroundColor:"white"}}>White</button>
          <button onClick={() => setColor("yellowgreen")} className='outline-none px-5 rounded-3xl py-2  shadow-lg' style={{backgroundColor:"yellowgreen"}}>Yellow</button>

        </div>
      </div>
      
    </div>
  )
}

export default App
