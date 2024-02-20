import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Apiform = () => {
    const [data,setData] = useState([])
    const [userData,setUserData] = useState({
        name:'',
        age:'',
        email:'',
        password:''
    })
    const handleChange = (e) => {
        const {name,value} = e.target;
        setUserData({...userData,[name]:value})
    }
    const fetchitem = async () => {
        try {
           await axios.get('http://localhost:3000/user').then
           (res=>setData(res.data));
        }catch(error){
            console.log(error.message);
        }
     }
    useEffect(() => {
            fetchitem();
    }, []);
    const handleSubmmit = (e) => {
        e.preventDefault();
    
        axios.post('http://localhost:3000/user', userData)
            .then(res => {
                console.log(res.data);
                setUserData({
                    name: '',
                    age: '',
                    email: '',
                    password: ''
                });
                
            })
            .catch(error => {
                console.error('Error:', error);
            });
            fetchitem();
    }
    const deleteData = (id) => {
        axios.delete(`http://localhost:3000/user/${id}`)
            .then(res => {
                console.log(res.data); 
            })
            .catch(error => {
                console.error('Error deleting data:', error);
            });
            fetchitem();
    };
  return (
    <div>
      <form onSubmit={handleSubmmit}>
          <label>Name:-</label>
          <input type="text" name='name' value={userData.name} onChange={handleChange} />
          <br/><br/>

          <label>Age:-</label>
          <input type='text' name='age' value={userData.age} onChange={handleChange} />
          <br/><br/>

          <label>Email:-</label>
          <input type='email' name='email' value={userData.email} onChange={handleChange} />
          <br/><br/>

          <label>Password:-</label>
          <input type='password' name='password' value={userData.password} onChange={handleChange} />
          <br/><br/>

          <button type='submit'>SaveData</button>
      </form>
      <br/><br/>
      <table border={2}>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Password</td>
            <td>Action</td>
          </tr>
          {
              data.map((i) => (
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>{i.email}</td>
                        <td>{i.password}</td>
                        <td><button type='button' onClick={() => deleteData(i.id)}>Delete</button></td>
                    </tr>  
              ))
          }
      </table>
    </div>
  )
}

export default Apiform
