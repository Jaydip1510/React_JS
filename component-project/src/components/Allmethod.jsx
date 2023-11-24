import React from 'react'

export default function Allmethod() {
    const add = ()=>{
        let a = 20;
        const b = 20;
        let c = a + b;
        return c;
      }
    const sub = () => {
        let p = 85;
        let q = 30;
        let r = p - q;
        return r;
    }
    const mul = () => {
        let x = 25;
        let y = 20;
        let z = x * y;
        return z;
    }
    const div = () => {
        let j = 285;
        let k = 5;
        let l = j / k;
        return l;
    }
  return (
    <div>
      <h1>Functionbase Arithmetic operation</h1>
      <h5>Addition is :- {add()}</h5>
      <h5>Subtaction is :- {sub()}</h5>
      <h5>Multiplication is :- {mul()}</h5>
      <h5>Division is :- {div()}</h5>

    </div>
  )
}
