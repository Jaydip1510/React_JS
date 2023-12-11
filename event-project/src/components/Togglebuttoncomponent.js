import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Togglebuttoncomponent extends Component {
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
                <h3 className='mb-3'>Toggle Button</h3>
                <button className='btn btn-warning' onClick={changeStatus}>{this.state.status == 0 ? "OFF" : "ON"}</button>
            </div>
        );
    }
}

export default Togglebuttoncomponent;