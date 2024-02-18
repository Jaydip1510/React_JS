import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../Redux/Reducers';

function AppData() {
    const empInfo = useSelector((state) => state.emp.empData || []);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState({
        name:'',
        age:'',
        email:'',
        password:'',
        address:''
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValue({...inputValue,[name]:value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addData(inputValue));
        setInputValue({
            name:'',
            age:'',
            email:'',
            password:'',
            address:'',
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
         <label>Name:-</label>
         <input type='text' name='name' value={inputValue.name} onChange={handleChange} />
         <br/><br/>

         <label>Age:-</label>
         <input type='tex' name='age' value={inputValue.age} onChange={handleChange} />
         <br/><br/>

         <label>Email:-</label>
         <input type='email' name='email' value={inputValue.email} onChange={handleChange} />
         <br/><br/>

         <label>Password:-</label>
         <input type='password' name='password' value={inputValue.password} onChange={handleChange} />
         <br/><br/>

         <button type='submit'>SaveData</button>
        </form>
        <br/>
        <br/>
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
                empInfo.map((i,index) => {
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.email}</td>
                            <td>{i.password}</td>
                            <td><button type='button'>Delete</button></td>
                        </tr>
                    )
                })
            }
         </table>
    </div>
  )
}

export default AppData
