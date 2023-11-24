import React, { Component } from 'react';

class Statecomponent extends Component {
    constructor() {
        super()
        this.state = {
            name: "jaydip"
        }
    }
    render() {
        const changeName = () => {
            this.setState({ name:this.state.name});
        }

        return (
            <div>
                <h4>My Name is :- {this.state.name}</h4>
                <input type='text' onChange={(e) => this.setState({name:e.target.value})} />
            </div>
        );
    }
}

export default Statecomponent;