import React, { useState } from 'react'

export default function Content() {
    const [count, setCount] = useState(5)
    const addNum = () =>{
        setCount(count+5)
    }
    const subNum = () => {
        setCount(count-5)
    }
    return (
        <div>
             
             <h4>Count is:{count}</h4>
             <button onClick={addNum}>Increment</button><br />
             <button onClick={subNum}>Decrement</button>

        </div>
    )
}
