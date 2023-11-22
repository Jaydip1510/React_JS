import React from "react";
import PropsChild from "./PropsChild";

const PropsExample = () => {
    const msg = "Hello Props"
     return (
        <div>
            <h3>Parent Components called...</h3>
            <PropsChild message={msg} />
        </div>
     )
}

export default PropsExample