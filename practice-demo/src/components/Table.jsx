import React, { useState, useEffect } from 'react';

const Table = () => {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    // Retrieve data from localStorage on component mount
    const storedData = JSON.parse(localStorage.getItem('empdata')) || [];
    setUserdata(storedData);
  }, []);

  const deleteInfo = (index) => {
    const updatedData = [...userdata];
    updatedData.splice(index, 1);
    setUserdata(updatedData);
    localStorage.setItem('empdata', JSON.stringify(updatedData));
  };

  return (
    <div>
      <h3>User Table</h3>
      <table border={2} className='table table-striped'>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Password</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {userdata.map((i, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.age}</td>
              <td>{i.email}</td>
              <td>{i.password}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteInfo(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;