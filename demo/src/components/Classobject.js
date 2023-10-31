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
                <div>{renderUserDetails()}</div>
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