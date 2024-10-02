import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  
  let [counter, setCounter] = useState(15)
  

  // let counter = 15;

  const addValue = () => {
    console.log("Clicked", counter);
    // counter = (counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    console.log("Clicked", counter);
   setCounter(counter - 1);

  };

  const clearAll = () =>{
  console.log("Clicked", counter);
    setCounter(counter * 0)
  }
  return (
    <>
      <h1>MAX + DEV</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <br />
      <button onClick={clearAll}>Reset ALL</button>
    </>
  );
}


export default App;
