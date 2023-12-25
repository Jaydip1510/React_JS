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
        const student = [{
            roll_no :21,
            name:"raj",
            gender:"male"
        }]
        const renderUserDetails = () => {
            const userDetails = [];
            for (const key in emp) {
              userDetails.push(
                <p key={key}>
                  <strong>{key}:</strong> {emp[key]}
                </p>
              );
            }
            return userDetails;
          };
          
        return (
            <div>
                <h5>Array list</h5>
                <h4>A is:- {a}</h4>
                <h4>B is :- {b}</h4>
                <h4>C is :- {c}</h4>
                <ul>
                    {
                        arr2.map((i)=>{
                            return <li>{i}</li>
                        })
                    }
                </ul>
                {/* <div>{renderUserDetails()}</div> <hr /> */}
                {
                    student.map((i)=>{
                        return (
                            <div>
                                <h4>name is:-{i.name}</h4>
                                <h4>Age is:-{i.roll_no}</h4>
                                <h4>Gender is:-{i.gender}</h4><hr/>
                            </div>
                            
                        )
                    })
                }
            </div>
            
        );
    }
}

export default Classobject;