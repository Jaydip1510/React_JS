import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData, removeData,updateItem } from './Redux/Action';
import { useSelector } from 'react-redux';


function App() {
  const empInfo = useSelector((state) => state.empData || []);
  const dispatch = useDispatch('');
  const [eid,setEid] = useState('');
  const [inputValue,setInputValue] = useState({
       name:'',
       age:'',
       email:'',
       password:'',
       address:''
  })
  const handleChange = (e) => {
      const {name,value} = e.target
      setInputValue({...inputValue,[name]:value})
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
  const deleteData = (id) => {
       dispatch(removeData(id));
  }
  const editData = (id) => {
      const eData = empInfo[id];
      if(eData){
         setEid(id);
         setInputValue({
            name:eData.name || '',
            age:eData.age || '',
            email:eData.email || '',
            password:eData.password || '',
            address:eData.address || ''
         })
      }
  }

  const updateData = (e) => {
      e.preventDefault();
      
      const updatevalue = {
          id:eid,
          name:inputValue.name,
          age:inputValue.age,
          email:inputValue.email,
          password:inputValue.password,
          address:inputValue.address
      }
      dispatch(updateItem(updatevalue));
      setInputValue({
          name:'',
          age:'',
          email:'',
          password:'',
          address:'',
      })
      setEid('');
  }

  return (
    <div className="App">
        <form onSubmit={eid !== '' ? updateData : handleSubmit}>
            <label>Name:-</label>
            <input type="text" name='name' value={inputValue.name} onChange={handleChange} />
            <br /><br/>

            <label>Age:-</label>
            <input type="text" name='age' value={inputValue.age} onChange={handleChange} />
            <br /><br/>

            <label>Email:-</label>
            <input type="email" name='email' value={inputValue.email} onChange={handleChange} />
            <br /><br/>

            <label>Password:-</label>
            <input type='password' name='password' value={inputValue.password} onChange={handleChange}/>
            <br /><br/>

            <label>Address:-</label>
            <input type='text' name='address' value={inputValue.address} onChange={handleChange} />
            <br /><br/>

            <button type='submmit'>SaveData</button>
        </form>
        <br/><br/>
        <table border={2}>
            <tr>
               <td>Id</td>
               <td>Name</td>
               <td>Age</td>
               <td>Email</td>
               <td>Password</td>
               <td>Address</td>
               <td>Action</td>
            </tr>
            {
               empInfo.map((i,index)=>{
                  return(
                  <tr>
                      <td>{index+1}</td>
                      <td>{i.name}</td>
                      <td>{i.age}</td>
                      <td>{i.email}</td>
                      <td>{i.password}</td>
                      <td>{i.address}</td>
                      <td><button onClick={() => editData(index)}>Edit</button><button onClick={() => deleteData(index)}>Delete</button></td>
                  </tr>
                  )
               })
            }
        </table>
    </div>
  );
}

export default App;
