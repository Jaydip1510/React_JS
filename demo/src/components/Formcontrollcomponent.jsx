import React, { Component } from 'react';
import {Form} from "react-bootstrap/Form"

class Formcontrollcomponent extends Component {
    constructor(props) {
        super()
        this.state = {
            name:'',
            g1:'',
            qual:[],
            email:'',
            passwords:'',
            country:'',
            address:''

        };
        this.submitData = this.submitData.bind(this);
        this.setData = this.setData.bind(this);
    }
    submitData = (e) => {
        e.preventDefault();
        console.log("Name is:-"+this.state.name);
        console.log("gender is:-"+this.state.g1);
    }
    setData = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        this.setState({name:e.target.value})
    }
    render() {
        return (
            <div>
                <form name="frm" onSubmit={this.submitData}>
                    <label htmlFor="">Name:-</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.setData} /><br/><br/>
                    <label htmlFor="">Gender:-</label>
                    <input type="radio" name="g1" value="male" defaultChecked="" onChange={this.setData} />
                    Male
                    <input type="radio" name="g1" value="female" onChange={this.setData} />Female<br/><br/>
                    <input type="submit" name="submit" />
                </form>
                
            </div>
        );
    }
}

export default Formcontrollcomponent;