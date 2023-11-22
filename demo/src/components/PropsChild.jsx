import React from "react";

const PropsChild = (props) => {
    return (
        <div>
             <h3>Child Components called...{props.message}</h3>
        </div>
    )
}
export default PropsChild