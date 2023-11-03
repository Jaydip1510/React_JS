import React from "react";

const SquareCube = () =>{
    
    let a = [1,2,3,4,5]
    let b=a.map ((i)=>i**2);

    let c=[1,2,3,4,5];
    let d=c.map((j)=>j**3);
    return (
        
        <div>
             <h4>Square is :- {b}</h4> 
             <h4>Cube is :- {d}</h4>  <hr />
        </div>
    
    )
}

export default SquareCube