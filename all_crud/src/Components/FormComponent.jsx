import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateItem } from '../Redux/Action';

const FormComponent = () => {
    const empData = useSelector((state) => state.empItems || []);
    const dispatch = useDispatch();
    const [eid, setEid] = useState('');
    const [inputValue, setInputValue] = useState({
        name: "",
        age: "",
        email: "",
        password: "",
        salary: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem(inputValue));
        setInputValue({
            name: '',
            age: '',
            email: '',
            password: '',
            salary: '',
            address: ''
        });
    };

    const deleteData = (id) => {
        dispatch(removeItem(id));
    }

    const editData = (id) => {
        const setData = empData[id];
        if (setData) {
            setEid(id);
            setInputValue({
                name: setData.name || '',
                age: setData.age || '',
                email: setData.email || '',
                password: setData.password || '',
                salary: setData.salary || '',
                address: setData.address || '',
            })
        }
    }
    const updatedata = (e) => {
        e.preventDefault();
        const updateValue = {
            id: eid,
            name: inputValue.name,
            age: inputValue.age,
            email: inputValue.email,
            password: inputValue.password,
            salary: inputValue.salary,
            address: inputValue.address
        }
        dispatch(updateItem(updateValue));
        setInputValue({
            name: "",
            age: '',
            email: "",
            password: "",
            salary: "",
            address: "",
        })
        setEid("");
    }

    return (
        <div>
            <div className='frm'>
                <div className='frm1'>
                    <form onSubmit={eid !== '' ? updatedata : handleSubmit} method='post'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={inputValue.name} onChange={handleChange} placeholder="Enter Your Name" />
                        <br /><br />

                        <label htmlFor="age">Age:</label>
                        <input type="text" id="age" name="age" value={inputValue.age} placeholder='Enter Your Age' onChange={handleChange} />
                        <br /><br />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={inputValue.email} placeholder='Enter Your Email' onChange={handleChange} />
                        <br /><br />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={inputValue.password} placeholder='Enter Your Password' onChange={handleChange} />
                        <br /><br />

                        <label htmlFor="salary">Salary:</label>
                        <input type="number" id="salary" name="salary" value={inputValue.salary} placeholder='Enter Your Salary' onChange={handleChange} />
                        <br /><br />

                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" value={inputValue.address} placeholder="Enter Your Address" onChange={handleChange} />
                        <br /><br />

                        <button type='submit'>Save Data</button>
                    </form>
                </div>
            </div>

            <br /><br />
            <table border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Salary</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {empData.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>{item.salary}</td>
                            <td>{item.address}</td>
                            <td><button onClick={() => editData(index)}>Edit</button><button onClick={() => deleteData(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FormComponent;
