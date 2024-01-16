import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', age: '',g1:'', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const saveData = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('empdata')) || [];
    const updatedData = [...storedData, formData];
    localStorage.setItem('empdata', JSON.stringify(updatedData));
    setFormData({ name: '', age: '',g1:'', email: '', password: '' });
    navigate('/table');
  };

  return (
    <div>
      <h3>User Form</h3>
      <form onSubmit={saveData} method='post'>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <br />
        <br/>

        <label htmlFor="age">Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
        <br />
        <br/>

        <label htmlFor="">Gender:-</label>
        <input type="radio" name="g1" id="" value="Male" onChange={handleChange}/>Male 
        <input type="radio" name="g1" id="" value="Female" onChange={handleChange} />Female
        <br/>
        <br/>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br />
        <br/>

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <br />
        <br/>

        <button className='btn btn-warning' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
