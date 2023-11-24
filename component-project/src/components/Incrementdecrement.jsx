import React, { useState } from 'react'

export default function Incrementdecrement() {
    const [count, setCount] = useState(0)
    const addNum = () =>{
        setCount(count+1)
    }
    const subNum = () => {
        setCount(count-1)
    }
    return (
        <div>
             <h3>Functional componet called...</h3>
             <h4>Count is:{count}</h4>
             <button onClick={addNum}>Increment</button><br />
             <button onClick={subNum}>Decrement</button>

        </div>
    )
}
