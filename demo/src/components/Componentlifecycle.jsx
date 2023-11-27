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
    // static getDerivedStateFromProps(props,state) {
    //     console.log("getDerivedStateFromProps called...");
    //     return {name: props.myName}

    // }
    shouldComponentUpdate(nextProps,nextState) {
     console.log("shouldComponentUpdate called...");
     return this.state.name !== nextState.name
    }
    componentWillUpdate(){
        console.log("componentWillUpdate called...");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called...");
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate called...");
        document.getElementById("demo").innerHTML = "Before updated state name --"+prevState.name;
        document.getElementById("demo1").innerHTML = "After updated state name --"+this.state.name;

    }
    componentWillUnmount(){
        alert("componentWillUnmount called...");
        console.log("");
    }
    render() {
        console.log("render called...")
        return (
            <div>
                <h3>Component lifecycle Example</h3>
                <h3>Name is :- {this.state.name}</h3>
                <input type="text" onChange={(e)=>this.setState({name:e.target.value})}/>
                <div id="demo" ></div>
                <div id="demo1"></div>
            </div>
        );
    }
}

export default Componentlifecycle;