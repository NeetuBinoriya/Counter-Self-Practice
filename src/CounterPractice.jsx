import React, { useState } from 'react'

const CounterPractice = () => {
    const [counter, setCounter] = useState(0);
   
    const increase = () =>{
        setCounter(counter + 1 )
        // counter++;
        console.log("Increase by 1", counter);
    }
    const decrease = () =>{
        setCounter(counter - 1)
        // counter--;
        console.log("Decrease by 1", counter);
    }
  return (
    <>
    <div className="container d-flex justify-content align-items-center flex-column m-3 gap-3">
    <h1>{counter}</h1>
    <h2>Increasing by 1</h2>
    <h2>Decreasing by 1</h2>
    <button onClick={increase} className="btn btn-info mx-3">Click me for Increase</button>
    <button onClick={decrease} className="btn btn-danger">Click me for Decrease</button>
    </div>
    </>
  )
}

export default CounterPractice