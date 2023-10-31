import React, { Component } from 'react';

class Classobject extends Component {
    render() {
        const arr = ["jay","raj","jaydip","abc","pqr","xyz"]
        const [a,b,...c] = arr // spreading (...)
        const arr1 = [10,20,30]
        const arr2 = [...arr1, ...arr] // .Merging 
        return (
            <div>
                {/* <h3>A is -- {a}</h3>
                <h3>B is -- {b}</h3>
                <h3>C is -- {c}</h3> */}
                <h3>Array list</h3>
                <ul>
                    {
                        arr2.map((i)=>{
                            return <li>{i}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Classobject;