import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData, removeData, updateItem } from './Redux/Action';
import { useSelector } from 'react-redux';


function App() {
  const empInfo = useSelector((state) => state.empData || []);
  const dispatch = useDispatch('');
  const [eid, setEid] = useState('');
  const [inputValue, setInputValue] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    address: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setInputValue({ ...inputValue, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addData(inputValue));
    setInputValue({
      name: '',
      age: '',
      email: '',
      password: '',
      address: '',
    })
  }
  const deleteData = (id) => {
    dispatch(removeData(id));
  }
  const editData = (id) => {
    const eData = empInfo[id];
    if (eData) {
      setEid(id);
      setInputValue({
        name: eData.name || '',
        age: eData.age || '',
        email: eData.email || '',
        password: eData.password || '',
        address: eData.address || ''
      })
    }
  }

  const updateData = (e) => {
    e.preventDefault();

    const updatevalue = {
      id: eid,
      name: inputValue.name,
      age: inputValue.age,
      email: inputValue.email,
      password: inputValue.password,
      address: inputValue.address
    }
    dispatch(updateItem(updatevalue));
    setInputValue({
      name: '',
      age: '',
      email: '',
      password: '',
      address: '',
    })
    setEid('');
  }

  return (
    <div className="App">
      <h3 className='txt'>ReduxCrud Operation</h3>
      <div className='frm'>
        <div className='frm1'>
          <form className='f1' onSubmit={eid !== '' ? updateData : handleSubmit}>
            <label>Name:-</label>
            <input className='t1' type="text" name='name' value={inputValue.name} onChange={handleChange} placeholder='Enter Your Name' />
            <br /><br />

            <label>Age:-</label>
            <input className='t2' type="text" name='age' value={inputValue.age} onChange={handleChange} placeholder='Enter Your Age' />
            <br /><br />

            <label>Email:-</label>
            <input className='t3' type="email" name='email' value={inputValue.email} onChange={handleChange} placeholder='Enter Yout Email' />
            <br /><br />

            <label>Password:-</label>
            <input className='t4' type='password' name='password' value={inputValue.password} onChange={handleChange} placeholder='Enter Your Password' />
            <br /><br />

            <label>Address:-</label>
            <input className='t5' type='text' name='address' value={inputValue.address} onChange={handleChange} placeholder='Enter Your Address' />
            <br /><br />

            <button className='btn btn-warning fw-bold' type='submmit'>SaveData</button>
          </form>
        </div>
      </div>
      <br /><br />
      <table border={2} className='table table-striped'>
        <thead>
          <tr className='fw-bold'>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Password</td>
            <td>Address</td>
            <td>Action</td>
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
                  <td>{i.email}</td>
                  <td>{i.password}</td>
                  <td>{i.address}</td>
                  <td><button className='btn btn-outline-success fw-bold' onClick={() => editData(index)}>Edit</button>&nbsp;&nbsp;<button className='btn btn-outline-danger fw-bold' onClick={() => deleteData(index)}>Delete</button></td>
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
