import React, { useEffect, useState } from 'react';

export default function ApiForm() {
  const [dt, setDt] = useState([]);
  const [inputvalue, setInputValue] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    address: '',
  });

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
    e.preventDefault(); // Prevent the default form submission
    try {
      const res = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputvalue),
      });
      const newData = await res.json();
      setDt([...dt, newData]); // Update the data list
      setInputValue({ name: '', age: '', email: '', password: '', address: '' }); // Reset the form fields
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  const deleteData = async (id) => {
    try {
      await fetch(`http://localhost:3000/user/${id}`, {
        method: 'DELETE',
      });
      // Remove the deleted item from the state
      setDt(dt.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={setData}>
        <label htmlFor="name">Name :-</label>
        <input
          type="text"
          name="name"
          value={inputvalue.name}
          onChange={handlechange}
        />
        <br />
        <br />

        <label htmlFor="age">Age :-</label>
        <input
          type="text"
          name="age"
          value={inputvalue.age}
          onChange={handlechange}
        />
        <br />
        <br />

        <label htmlFor="email">Email :-</label>
        <input
          type="email"
          name="email"
          value={inputvalue.email}
          onChange={handlechange}
        />
        <br />
        <br />

        <label htmlFor="password">Password :-</label>
        <input
          type="password"
          name="password"
          value={inputvalue.password}
          onChange={handlechange}
        />
        <br />
        <br />

        <label htmlFor="address">Address :-</label>
        <input
          type="text"
          name="address"
          value={inputvalue.address}
          onChange={handlechange}
        />
        <br />
        <br />

        <button type="submit">AddData</button>
      </form>

      {/* Table to display data */}
      <h2>Data List</h2>
      {dt.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0">
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
            {dt.map((item,index) => (
              <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.address}</td>
                <td>
                  <button onClick={() => deleteData(item.id)}>Delete</button>
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
