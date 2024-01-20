import React, { useState, useEffect } from 'react';

function UserTable() {
  const [getalldata, setGetalldata] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('UserDetail')) || [];
    setGetalldata(userData);
  }, []);

  const handleDelete = (index) => {
    const updatedData = [...getalldata];
    updatedData.splice(index, 1);
    localStorage.setItem('UserDetail', JSON.stringify(updatedData));
    setGetalldata(updatedData);
  };

  return (
    <div>
      <table border={1} align='center'>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Password</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {getalldata.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td> <button onClick={() => handleDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;