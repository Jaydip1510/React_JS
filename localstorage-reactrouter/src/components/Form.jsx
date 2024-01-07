// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';


// function Form() {
//     const [userinfo, setUserinfo] = useState([]);
//     const [alluser, setAlluser] = useState({name:'',age:'',email:''});
//     const  navigate = useNavigate();
//     const setData = (e) => {
//          let name = e.target.name;
//          let value = e.target.value;
//          setAlluser(i => ({...i,[name]:value}));
        
//     }
//     const saveData = (e) => {
//         e.preventDefault();
//         userinfo.push(alluser);
//         localStorage.setItem('empInfo', JSON.stringify(userinfo));
//         setAlluser({ name: '', age: '', email: '' });
//         navigate('/table');
      
       
//     }
//   return (
//     <div>
//         <h3>Registration Form</h3>
//         <form action='#' method='post' onSubmit={saveData}>
//              <label htmlFor="">Name:-</label>
//              <input type="text" name="name" placeholder='Enter your name' onChange={setData}/>
//              <br />
//              <br />

//              <label htmlFor="">Age:-</label>
//              <input type="number" name="age" placeholder="Enter your age" onChange={setData}/>
//              <br />
//              <br />

//              <label htmlFor="">Email:-</label>
//              <input type="email" name="email" placeholder='Enter Your Email' onChange={setData} />
//              <br />
//              <br />

//              <input type="submit" value="save" defaultValue="submit" />
//         </form>
//     </div>
//   )
// }

// export default Form
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [userinfo, setUserinfo] = useState([]);
  const [alluser, setAlluser] = useState({ name: '', age: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('empInfo'));
    if (storedData) {
      setUserinfo(storedData);
    }
  }, []);

  const setData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAlluser((prevData) => ({ ...prevData, [name]: value }));
  };

  const saveData = (e) => {
    e.preventDefault();
    const updatedUserInfo = [...userinfo, alluser];
    setUserinfo(updatedUserInfo);
    localStorage.setItem('empInfo', JSON.stringify(updatedUserInfo));
    setAlluser({ name: '', age: '', email: '' });
    navigate('/table');
  };

  return (
    <div>
      <h3>Registration Form</h3>
      <form action="#" method="post" onSubmit={saveData}>
        <label htmlFor="">Name:-</label>
        <input type="text" name="name" placeholder="Enter your name" onChange={setData} />
        <br />
        <br />

        <label htmlFor="">Age:-</label>
        <input type="number" name="age" placeholder="Enter your age" onChange={setData} />
        <br />
        <br />

        <label htmlFor="">Email:-</label>
        <input type="email" name="email" placeholder="Enter Your Email" onChange={setData} />
        <br />
        <br />

        <input  className="btn btn-success" type="submit" value="save" />
      </form>
    </div>
  );
}

export default Form;