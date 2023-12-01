import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class Dataargument extends Component {
    constructor() {
        super()
        this.state = {
            status: 0
        }
    }
    render() {
        const changeStatus = () => {
            this.setState({ status: !this.state.status });
        }
        const empData = (id,name) => {
            console.log("id is:-"+id);
            console.log("name is:-"+name);

        }
        return (
            <div>
                {/* <button onClick={changeStatus}>{this.state.status == 0 ? "OFF" : "ON"}</button> */}
                <Form>
                    <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label={this.state.status == 0 ? "OFF" : "ON"}
                        onClick={changeStatus}
                    />
                </Form><br/>
                <button onClick={()=>empData(12,"jaydip")}>Student Info</button><br/><br/>
                <label>Emp Id is:-</label>
                <input type="text" onChange={(e) =>(this.state.id = e.target.value)}/><br/><br/>
                <label>Emp Name   :-</label>
                <input type="text" onChange={(e) =>(this.state.name = e.target.value)}/><br/><br/>
                <button onClick={() =>empData(this.state.id,this.state.name)}>Emp info</button>
                
            </div>
        );
    }
}

export default Dataargument;