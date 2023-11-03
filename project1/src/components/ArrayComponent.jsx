import React from "react";

const ArrayComponent = () => {
    let arr = [11,22,33,44,55]
    const result = arr.filter ((i) =>{
        
    })

    return (
       <div>
               <h5>Array List</h5>
               <ul>
                {
                  arr.map((i)=>{
                    return <li>{i}</li>
                  })
                }
               </ul>
       </div>
    )
}

export default ArrayComponent


