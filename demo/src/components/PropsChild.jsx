import React from "react";

const PropsChild = (props) => {
    return (
        <div>
             <h3>Child Components called...{props.message}</h3>
             <h4>Name is :- {props.userInfo.name}</h4>
             <h4>age is :- {props.userInfo.age}</h4>
             <h4>gender is :- {props.userInfo.gender}</h4>
             {
                props.arrInfo.map((i)=>{
                    return <li>{i.color}</li>
                })
             }
        </div>
    )
}
export default PropsChild