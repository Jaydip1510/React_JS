import React, { useState } from 'react'

const  Incrementdecrement = () => {
    const [count, setCount] = useState(0)
    const addNum = () =>{
        setCount(count+2)
    }
    
    return (
        <div>
             <h3>Q1 component called...</h3>
             <h4>Count is:{count}</h4>
             <button onClick={addNum}>Increment</button><br />
            
        </div>
    )
}

export default Incrementdecrement