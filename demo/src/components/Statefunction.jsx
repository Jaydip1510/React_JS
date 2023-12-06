import React, { useEffect, useRef, useState } from "react";

const Statefunction = () => {
    const [count, setCount] = useState(0)
    const name = useRef(null) 
    const addNum = () =>{
        console.log("name is:-"+name.current.value);
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
             <h4>Count is:{count}</h4>
             <button onClick={addNum}>Increment</button><br />
             Name is:- <input type="text" ref={name} onChange={(e)=>e.target.value}/><br/>
             <button onClick={subNum}>Decrement</button>

        </div>
    )
}

export default Statefunction