import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../Action/Action';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      name: '',
      age: '',
      gender: '', // Updated to store gender as a string
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
        id: new Date().getTime(),
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
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        <br/><br/>
        <label>Age:</label>
        <input type="text" name="age" value={formData.age} onChange={handleInputChange} required />
        <br/><br/>
        <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleGenderChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === 'other'}
              onChange={handleGenderChange}
            />
            Other
          </label>
        <br/><br/>
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
        <br/><br/>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        <br/><br/>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
        <br/><br/>
        <button type="submit">Register</button>
      </form>
    );
  };
  
  export default RegisterForm;