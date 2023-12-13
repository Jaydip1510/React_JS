import React, { Component } from 'react';
import { Form } from "react-bootstrap/Form"

class Formcontrollcomponent extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            g1: '',
            qual: [],
            email: '',
            password: '', 
            country: '',
            address: ''

        };
        this.submitData = this.submitData.bind(this);
        this.setData = this.setData.bind(this);
    }
    submitData = (e) => {
        e.preventDefault();
        console.log("Name is:-" + this.state.name);
        console.log("gender is:-" + this.state.g1);
        console.log("qualification is:-"+this.state.qual);
        console.log("email is:-"+ this.state.email);
        console.log("password is:-"+ this.state.password);
        console.log("country is:-"+this.state.country);
    }
    setData = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        const gender = target.g1
        this.setState({ [name]: value })
    }
    getQualData = (e) => {
        this.state.qual.push(e.target.value)
    }
    render() {
        return (
            <div>
                <form name="frm" onSubmit={this.submitData}>
                    <label htmlFor="">Name:-</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.setData} /><br /><br />
                    <label htmlFor="">Gender:-</label>
                    <input type="radio" name="g1" value="male" defaultChecked="" onChange={this.setData} />
                    Male
                    <input type="radio" name="g1" value="female" onChange={this.setData} />Female<br /><br />
                    <label htmlFor="">Email:-</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.setData} /><br /><br />
                    <label htmlFor="">Password:-</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.setData} /><br /><br />
                    <label htmlFor="">Qualification:-</label>
                    <input type="checkbox" name="qual" value="10th" defaultChecked="" onChange={this.getQualData} />
                    10th
                    <input type="checkbox" name="qual" value="12th" defaultChecked="" onChange={this.getQualData} />
                    12th
                    <input type="checkbox" name="qual" value="BCA" defaultChecked="" onChange={this.getQualData} />
                    BCA
                    <input type="checkbox" name="qual" value="MCA" defaultChecked="" onChange={this.getQualData} />
                    MCA
                    <br/>
                    <br/>
                    <label htmlFor="">Country:-</label>
                    <select name="country" id="" required="" onChange={this.setData}>
                       <option value="">--Select Country--</option>
                        <option value="IND">IND</option>
                        <option value="USA">USA</option>
                        <option value="AUS">AUS</option>
                        <option value="SA">SA</option>
                    </select><br/><br/>
                    <label htmlFor="">Address:-</label>
                    <textarea name="address" rows={2} cols={10} defaultValue={''} onChange={this.setData} />
                    <br/><br/>
                    <input type="submit" name="submit" />

                </form>
                
            </div >
        );
    }
}

export default Formcontrollcomponent;