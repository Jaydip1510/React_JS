import React, { Component } from 'react';

class Statecomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "jaydip",
      age: 26,
      gender:"male",
      address:"panshina"
    };
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({
          name: "raj",
          age: 25,
          gender:"male",
          address:"limbdi"
        });
      }, 5000);
  }

  render() {
    return (
      <div>
        <h3>Q3 component called...</h3>
        <p>Name is:- {this.state.name}</p>
        <p>Age is:- {this.state.age}</p>
        <p>Gender is:- {this.state.gender}</p>
        <p>address is:- {this.state.address}</p>
      </div>
    );
  }
}

export default Statecomponent;