import React, { useState,useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', age: '', g1: '', email: '', password: '' });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.formData) {
      const { formData: selectedData } = location.state;
      setFormData(selectedData);
    } else {
      setFormData({ name: '', age: '', g1: '', email: '', password: '' });
    }
  }, [location.state]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((i) => ({ ...i, [name]: value }));
  };

  const saveData = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('empdata')) || [];
    const updatedData = [...storedData, formData];
    localStorage.setItem('empdata', JSON.stringify(updatedData));
    setFormData({ name: '', age: '', g1: '', email: '', password: '' });
    navigate('/table');
  };

  return (
    <div>
      <h3><u>Registration Form</u></h3>
      <div className='frm1'>
        <form onSubmit={saveData} method='post' className='frm'>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <br />
          <br />

          <label htmlFor="age">Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          <br />
          <br />

          <label htmlFor="">Gender:-</label>
          <input type="radio" name="g1" id="" value="Male" checked={formData.g1 === 'Male'} onChange={handleChange} />Male
          <input type="radio" name="g1" id="" value="Female" checked={formData.g1 === 'Female'} onChange={handleChange} />Female
          <br />
          <br />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <br />
          <br />

          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          <br />
          <br />

          <button className='btn btn-warning' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
