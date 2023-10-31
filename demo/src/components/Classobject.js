import React, { Component } from 'react';

class Classobject extends Component {
    render() {
        const arr = ["jay","raj","jaydip","abc","pqr","xyz"]
        const [a,b,...c] = arr // spreading (...)
        const arr1 = [10,20,30]
        const arr2 = [...arr1, ...arr] // .Merging 
        const emp = {
            name:"jaydip",
            age:26,
            salary:30000
        }
        return (
            <div>
                {/* <h3>A is -- {a}</h3>
                <h3>B is -- {b}</h3>
                <h3>C is -- {c}</h3> */}
                <h5>Array list</h5>
                <h5>Name is --- {emp.name}</h5>
                <h5>Age is --- {emp.age}</h5>
                <h5>Salary is --- {emp.salary}</h5>
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