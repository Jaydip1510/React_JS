import React, { useState } from 'react'

export default function Content() {
    const [count, setCount] = useState(5)
    const addNum = () => {
        setCount(count + 5)
    }
    const subNum = () => {
        setCount(count - 5)
    }
    return (
        <div>
            <center> 
            <h3 className="border-bottom  border-secondary pt-1 pb-1"> Increment & Decrement </h3>
                <h4>Count is:{count}</h4>
                <button className='btn btn-success' onClick={addNum}>Increment</button><br /><br/>
                <button className= "btn btn-warning"onClick={subNum}>Decrement</button>
            </center>
        </div>
    )
}
