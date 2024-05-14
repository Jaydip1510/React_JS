import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addItem, removeItem } from './Redux/Action';

function App() {
   const empInfo = useSelector((state) => state.empItem || []);
   const dispatch = useDispatch();
   const [inputValue, setInputValue] = useState({
      name: '',
      age: '',
      salary: '',
      address: '',
      email: '',
      password: ''
   });
   const handleChange = (e) => {
      const { name, value } = e.target;
      setInputValue({ ...inputValue, [name]: value });
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addItem(inputValue));
      setInputValue({
         name: '',
         age: '',
         salary: '',
         address: '',
         email: '',
         password: '',
      })
   }
   const deteleEmp = (id) => {
      dispatch(removeItem(id));
   }

   return (
      <div>
         <div className='frm'>
            <div className='frm1'>
               <form onSubmit={handleSubmit} method='post'>
                  <label>Name:-</label>
                  <input type='text' name='name' placeholder='Enter Your Name' value={inputValue.name} onChange={handleChange}></input>
                  <br /><br />

                  <label>Age:-</label>
                  <input type='text' name='age' placeholder='Enter Your Age' value={inputValue.age} onChange={handleChange}></input>
                  <br /><br />

                  <label>salary:-</label>
                  <input type='text' name='salary' placeholder='Enter Your Salary' value={inputValue.salary} onChange={handleChange}></input>
                  <br /><br />

                  <label>Address:-</label>
                  <input type='text' name='address' placeholder='Enter Your Address' value={inputValue.address} onChange={handleChange}></input>
                  <br /><br />

                  <label>Email:-</label>
                  <input type='email' name='email' placeholder='Enter Your Email' value={inputValue.email} onChange={handleChange}></input>
                  <br /><br />

                  <label>Password:-</label>
                  <input type='password' name='password' placeholder='Enter Your Password' value={inputValue.password} onChange={handleChange}></input>
                  <br /><br />

                  <button className='btn btn-outline-info' type='submit'>Submit</button>
               </form>
            </div>
         </div>
         <table border={2} className='table table-striped tbl'>
            <thead>
               <tr>
                  <td>Id</td>
                  <td>Name</td>
                  <td>Age</td>
                  <td>Salary</td>
                  <td>Address</td>
                  <td>Email</td>
                  <td>Password</td>
               </tr>
            </thead>
            <tbody>
               {
                  empInfo.map((i, index) => {
                     return (
                        <tr>
                           <td>{index + 1}</td>
                           <td>{i.name}</td>
                           <td>{i.age}</td>
                           <td>{i.salary}</td>
                           <td>{i.address}</td>
                           <td>{i.email}</td>
                           <td>{i.password}</td>
                        </tr>
                     )
                  })
               }
            </tbody>
         </table>
      </div>
   );

}

export default App;
