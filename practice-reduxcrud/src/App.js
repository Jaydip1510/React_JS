import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addData, removeData } from './Redux/Action';

function App() {
  const empInfo = useSelector((state) => state.empData || []);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    name: '',
    age: '',
    salary: '',
    address: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData(inputValue));
    setInputValue({
      name: '',
      age: '',
      salary: '',
      address: '',
    });
  }
  const deleteItem = (id) => {
     dispatch(removeData(id));
  }
  const editData = (id) => {
    
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Name:-</label>
        <input type="text" name="name" value={inputValue.name} onChange={handleChange} />
        <br /><br />

        <label>Age:-</label>
        <input type="number" name="age" value={inputValue.age} onChange={handleChange} />
        <br /><br />

        <label>Salary:-</label>
        <input type="number" name="salary" value={inputValue.salary} onChange={handleChange} />
        <br /><br />

        <label>Address:-</label>
        <input type="text" name="address" value={inputValue.address} onChange={handleChange} />
        <br/><br/>
        <button type="submit" value="submit">Submit</button>
      </form>
      <br /><br />
      <table border={2}>
          <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
              <td>Salary</td>
              <td>Address</td>
              <td>Action</td>
          </tr>
          {
            empInfo.map((i,index) => {
                return (
               <tr>
                  <td>{index +1}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.salary}</td>
                  <td>{i.address}</td>
                  <td><button onClick={() => editData(index)}>Edit</button><button onClick={() => deleteItem(index)}>Delete</button></td>
               </tr>
              )
            })
          }
      </table>
    </div>
  );
}

export default App;
