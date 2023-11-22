import React from "react";
import PropsChild from "./PropsChild";

const PropsExample = () => {
    const msg = "Hello Props"
    const user = {
        name:"jaydip",
        age:26,
        gender:"male",
    }
    const arrDetails = [
        {
         color:'blue',
         data:"abc",
         status:false
       },
       {
        color:'green',
        data:"pqr",
        status:true
       }
   ]
     return (
        <div>
            <h3>Parent Components called...</h3>
            <PropsChild message={msg} userInfo ={user} arrInfo ={arrDetails} />
        </div>
     )
}

export default PropsExample