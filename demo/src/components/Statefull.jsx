import React, { Component } from 'react';

class Statefull extends Component {
    constructor() {
        super()
        this.state = {
            id: 12,
            name: "raj"6
        }
    }
    render() {

        this.changeName = () => {
            this.setState({
                name: "jay",
                id :7
            })
        }

            return (
                <div>
                    <h3>class component called...</h3>
                    <h4>Id is :- {this.state.id}</h4>
                    <h4>Name is :- {this.state.name}</h4>
                    <button type="button" onClick={this.changeName}>Update Name</button>
                </div>
            );
        }
    }

export default Statefull;
