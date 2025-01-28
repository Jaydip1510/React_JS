import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function ApiForm() {
  const [dt, setDt] = useState([]);
  const [inputvalue, setInputValue] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    address: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputvalue, [name]: value });
  };

  const fetchitem = async () => {
    try {
      const res = await fetch('http://localhost:3000/user');
      const data = await res.json();
      setDt(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchitem();
  }, []);

  const setData = async (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update data if in editing mode
      try {
        const res = await fetch(`http://localhost:3000/user/${editId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputvalue),
        });
        const updatedData = await res.json();
        setDt(dt.map((item) => (item.id === editId ? updatedData : item)));
        setIsEditing(false);
        setEditId(null);
        setInputValue({ name: '', age: '', email: '', password: '', address: '' });
      } catch (error) {
        console.error('Error updating data:', error);
      }
    } else {
      // Add new data
      try {
        const res = await fetch('http://localhost:3000/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputvalue),
        });
        const newData = await res.json();
        setDt([...dt, newData]);
        setInputValue({ name: '', age: '', email: '', password: '', address: '' });
      } catch (error) {
        console.error('Error inserting data:', error);
      }
    }
  };

  const deleteData = async (id) => {
    try {
      await fetch(`http://localhost:3000/user/${id}`, {
        method: 'DELETE',
      });
      setDt(dt.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const editData = (id) => {
    const selectedItem = dt.find((item) => item.id === id);
    if (selectedItem) {
      setInputValue({
        name: selectedItem.name,
        age: selectedItem.age,
        email: selectedItem.email,
        password: selectedItem.password,
        address: selectedItem.address,
      });
      setEditId(id);
      setIsEditing(true);
    }
  };

  return (
    <div>
      <div className='frm2'>
        <div className='frm'>
          <form onSubmit={setData} className='mt-5'>
            <label htmlFor="name">Name :-</label>
            <input
              className='txt'
              type="text"
              name="name"
              value={inputvalue.name}
              onChange={handlechange}
            />
            <br />
            <br />

            <label htmlFor="age">Age :-</label>
            <input
              className='txt agebox'
              type="text"
              name="age"
              value={inputvalue.age}
              onChange={handlechange}
            />
            <br />
            <br />

            <label htmlFor="email">Email :-</label>
            <input
              className='txt emailbox'
              type="email"
              name="email"
              value={inputvalue.email}
              onChange={handlechange}
            />
            <br />
            <br />

            <label htmlFor="password">Password :-</label>
            <input
              className='txt pwdbox'
              type="password"
              name="password"
              value={inputvalue.password}
              onChange={handlechange}
            />
            <br />
            <br />

            <label htmlFor="address">Address :-</label>
            <input
              className='txt addbox'
              type="text"
              name="address"
              value={inputvalue.address}
              onChange={handlechange}
            />
            <br />
            <br />

            <button className='btn btn-info' type="submit">{isEditing ? 'Update Data' : 'Add Data'}</button>
          </form>
        </div>
      </div>
      {/* Table to display data */}
      <h2 className='mt-3'>Data List</h2>
      {dt.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0" className='tbl'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Password</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dt.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.address}</td>
                <td>
                  <button className='btn btn-success' onClick={() => editData(item.id)}>Edit</button>&nbsp;
                  <button className='btn btn-danger' onClick={() => deleteData(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}
