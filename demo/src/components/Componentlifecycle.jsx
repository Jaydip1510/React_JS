import React, { Component } from 'react';

class Componentlifecycle extends Component {
    constructor(props) {
      super(props)
      console.log("constructor called...")
      this.state = {name:"Abc"}
    }
    componentDidMount(){
        console.log("componentDidMount called");
        setTimeout(()=>{
            this.setState({name:"jaydip"})
        },2000)
    }
    static getDerivedStateFromProps(props,state) {
        return {name: props.myName}
    }
    render() {
        console.log("render called...")
        return (
            <div>
                <h3>Component lifecycle Example</h3>
                <h3>Name is :- {this.state.name}</h3>
            </div>
        );
    }
}

export default Componentlifecycle;