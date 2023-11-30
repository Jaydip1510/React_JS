import React, { useEffect, useState } from "react";

const Statefunction = () => {
    const [count, setCount] = useState(0)
    const addNum = () =>{
        setCount(count+1)
    }
    const subNum = () => { 
        setCount(count-1)
    }
    useEffect(()=>{
        console.log("useEffect called --- You Clicked"+count);
    })
    return (
        <div>
             <h3>Functional componet called...</h3>
             <h4>Count
                 is:{count}</h4>
             <button onClick={addNum}>Increment</button><br />
             <button onClick={subNum}>Decrement</button>

        </div>
    )
}

export default Statefunction