import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';

function AddData() {
    const userinfo = useSelector((state) => state.userInfo || []);
    const dispatch = useDispatch();
     const [inputValue,setInputValue] = useState({
        name:'',
        age:'',
        email:'',
        password:'',
     })
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
         email: '',
         password: '',
       });
     }
  return (
    <div>
       <form onSubmit={handleSubmit}>
           <label>Name:-</label>
           <input type="text" name="name" value={inputValue.name} onChange={handleChange} />
           <br/><br/>

           <label>Age:-</label>
           <input type="text" name="age" value={inputValue.age} onChange={handleChange} />
           <br/><br/>

           <label>Email:-</label>
           <input type="email" name="email" value={inputValue.email} onChange={handleChange} />
           <br/><br/>

           <lable>Password:-</lable>
           <input type="password" name="password" value={inputValue.password} onChange={handleChange} />
           <br/><br/>
           <button type="submit">SaveData</button>
       </form>
       <br/><br/>
       <table border={3}>
         <tr>
             <td>Id</td>
             <td>Name</td>
             <td>Age</td>
             <td>Email</td>
             <td>Password</td>
         </tr>
         {
              userinfo.map((i,index) =>{
                  return(
                      <tr>
                         <td>{index+1}</td>
                         <td>{i.name}</td>
                         <td>{i.age}</td>
                         <td>{i.email}</td>
                         <td>{i.password}</td>
                      </tr>
                  )
              })
         }
       </table>
    </div>
  )
}

export default AddData
