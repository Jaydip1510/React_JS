import React, { Component } from 'react';

class Classbasemethod extends Component {
    render() {
        const add = ()=>{
            let a = 35;
            const b = 50;
            let c = a + b;
            return c;
          }
        const sub = () => {
            let p = 75;
            let q = 38;
            let r = p - q;
            return r;
        }
        const mul = () => {
            let x = 30;
            let y = 15;
            let z = x * y;
            return z;
        }
        const div = () => {
            let j = 415;
            let k = 7;
            let l = j / k;
            return l;
        }
        return (
            <div>
                <h1>Classbase Arithmetic operayion</h1>
                <h5>Addition is :- {add()}</h5>
                <h5>Subtaction is :- {sub()}</h5>
                <h5>Multiplication is :- {mul()}</h5>
                <h5>Division is :- {div()}</h5>
            </div>
        );
    }
}

export default Classbasemethod;