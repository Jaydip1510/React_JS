import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from './Redux/Action';

function App() {
  const [input, setInput] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
  });
  const userinfo = useSelector((state) => state.useData || []);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData(input));
    setInput({
      name: '',
      age: '',
      email: '',
      password: '',
    });
  };
  return (
    <div className="App">
      <div>
         <h2>Crud Operation</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:-</label>
          <input type="text" name="name" value={input.name} onChange={handleChange} />
          <br /><br />

          <label>Age:-</label>
          <input type="text" name="age" value={input.age} onChange={handleChange} />
          <br /><br />

          <label>Email:-</label>
          <input type="email" name="email" value={input.email} onChange={handleChange} />
          <br /><br />

          <label>Password:-</label>
          <input type="password" name="password" value={input.password} onChange={handleChange} />
          <br /><br />

          <input type="submit" value="Save" />
        </form>
      </div>
      <br /><br />
      <div>
          <h2>User Table</h2>
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
                userinfo.map((i,index) => {
                    return (
                      <tr>
                          <td>{index+1}</td>
                          <td>{i.name}</td>
                          <td>{i.age}</td>
                          <td>{i.email}</td>
                          <td>{i.password}</td>
                          <td><button>Delete</button></td>
                      </tr>
                    )
                })
             }
          </table>
      </div>
    </div>
  );
}

export default App;
