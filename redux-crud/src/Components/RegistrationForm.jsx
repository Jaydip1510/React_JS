import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../Action/Action';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        address: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGenderChange = (e) => {
        setFormData({ ...formData, gender: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: formData.name,
            age: formData.age,
            gender: formData.gender,
            address: formData.address,
            email: formData.email,
            password: formData.password,
        };
        dispatch(addUser(newUser));
        setFormData({
            name: '',
            age: '',
            gender: '',
            address: '',
            email: '',
            password: '',
        });
    };



    return (
        <div className='frm1'>
            <div className='frm'>
                <form onSubmit={handleSubmit}>
                    <label>Name:-</label>
                    <input className='i1' type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                    <br /><br />
                    <label>Age:-</label>
                    <input className='i2' type="text" name="age" value={formData.age} onChange={handleInputChange} required />
                    <br /><br />
                    <label>Gender:-</label>
                    <input
                      
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleGenderChange}
                    />
                    Male&nbsp;&nbsp;
                    <input
                       
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleGenderChange}
                    />
                    Female
                    <br /><br />
                    <label>Address:-</label>
                    <input className='i3' type="text" name="address" value={formData.address} onChange={handleInputChange} required />
                    <br /><br />
                    <label>Email:-</label>
                    <input className='i4' type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                    <br /><br />
                    <label>Password:-</label>
                    <input className='i5' type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                    <br /><br />
                    <button className='btn btn-success' type="submit">Register</button><br /><br />
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;