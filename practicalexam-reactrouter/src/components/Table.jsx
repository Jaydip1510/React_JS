import React, { useState, useEffect } from 'react';

const Table = () => {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('empdata')) || [];
    setUserdata(storedData);
  }, []);

  const deleteInfo = (index) => {
    const updatedData = [...userdata];
    updatedData.splice(index, 1);
    setUserdata(updatedData);
    localStorage.setItem('empdata', JSON.stringify(updatedData));
  };
  const searchData = (val) => {
    if(val !== ''){
      let dt = userdata.filter((i)=>{
        if(i.name.includes(val)){
          return i;
        }
      })
      setUserdata(dt);
    }else{
      setUserdata(JSON.parse(localStorage.getItem('empdata')));
    }
  }

  return (
    <div>
      <h3><u>Registration Table</u></h3>
      <input type="text" placeholder='Enter Any want to search' onChange={(e)=>searchData(e.target.value)}/>
      <br/>
      <br/>
      <table border={2} className='table table-striped'>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Gender</td>
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
              <td>{i.g1}</td>
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