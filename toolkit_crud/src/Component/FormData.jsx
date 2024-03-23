import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../Redux/Reducers';
import Table from 'react-bootstrap/Table';
const FormData = () => {
    const userInfo = useSelector((state) => state.user.userData || []);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState({
        name: '',
        age: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem(inputValue));
        setInputValue({
            name: '',
            age: '',
            email: '',
            password: '',
        })
    }
    return (
        <>
            <div className='container'>
                <form className='frm' onSubmit={handleSubmit} method='post'>
                    <label>Name</label>
                    <Form.Control
                        type="text"
                        name='name'
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        onChange={handleChange}
                    />
                    <label>Age</label>
                    <Form.Control
                        type="text"
                        name='age'
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        onChange={handleChange}
                    />
                    <label>Email</label>
                    <Form.Control
                        type="email"
                        name='email'
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        onChange={handleChange}
                    />
                    <label>Password</label>
                    <Form.Control
                        type="password"
                        name='password'
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        onChange={handleChange}
                    />
                    <br /><br />
                    <div className="d-grid gap-2">
                        <Button type='submit' variant="secondary" size="lg">
                            SaveData
                        </Button>
                    </div>
                </form>
            </div>
            <Table striped>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {userInfo.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>
    )
}

export default FormData
