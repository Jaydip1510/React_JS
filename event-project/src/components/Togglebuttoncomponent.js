import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
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
                <Form>
                    <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label={this.state.status == 0 ? "OFF" : "ON"}
                        onClick={changeStatus}
                    />
                </Form><br/>
            </div>
        );
    }
}

export default Togglebuttoncomponent;