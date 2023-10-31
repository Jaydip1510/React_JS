import React, { Component } from 'react';

class Classobject extends Component {
    render() {
        const arr = ["jay","raj","jaydip"]
        const [a,b,c] = arr
        return (
            <div>
                <h3>A is -- {a}</h3>
                <h3>B is -- {b}</h3>
                <h3>C is -- {c}</h3>
            </div>
        );
    }
}

export default Classobject;