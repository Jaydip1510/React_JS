import React, { Component } from 'react';

class Statecomponent extends Component {
    constructor() {
        super()
        this.state = {
            id: 12,
            name: "raj"
        }
    }
    render() {
        this.changeName = () => {
           
        }

        return (
            <div>
                <h4>Id is :- {this.state.id}</h4>
                <h4>Name is :- {this.state.name}</h4>
                <input type='text' onChange={this.changeName} />
            </div>
        );
    }
}

export default Statecomponent;