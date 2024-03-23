import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const FormData = () => {
    return (
        <div className='container'>
            <form className='frm'>
                <label>Name</label>
                <Form.Control
                    type="text"
                    name='name'
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <label>Age</label>
                <Form.Control
                    type="text"
                    name='age'
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <label>Email</label>
                <Form.Control
                    type="email"
                    name='email'
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <label>Password</label>
                <Form.Control
                    type="password"
                    name='password'
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <br/><br/>
                <div className="d-grid gap-2">
                    <Button variant="secondary" size="lg">
                        SaveData
                    </Button>
                </div>
            </form>

        </div>
    )
}

export default FormData
