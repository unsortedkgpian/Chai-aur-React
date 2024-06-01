import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [chart, setChart] = useState(false);
  const [password, setPassword] = useState("");


  // UseRef 
  const passwordRef = useRef(null)
  // const num = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (chart) str += "!@#$%^&*()_+-=[];',./{}|:";

    for (let i = 0; i < length; i++) {
      let c = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(c);
    }
    setPassword(pass);
  }, [length, number, chart, setPassword]);


  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, chart, passwordGenerator])
  
  

  return (
    <div className="w-full max-w-md shadow-md rounded-lg px-4 py-3 my-8 mx-auto text-orange-400 bg-gray-600">
      <h1 className="text-center text-white">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5  shrink-0">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" name="" id="" min={4} max={24} value={length}
            className="cursor-pointer" onChange={(e) => { setLength(e.target.value) }} />
          <label htmlFor="">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={number} id="numberInput" 
            onChange={()=>{
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={chart} id="chart" 
            onChange={()=>{
              setChart((prev) => !prev);
            }}
          />
          <label htmlFor="">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
