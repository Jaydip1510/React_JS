import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData } from './Redux/Action';

function App() {
  const userinfo = useSelector((state) => state.userData || []);
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
  });
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
  const DeleteData = (id) => {
    dispatch(deleteData(id));
  }
  const EditData = (id) => {
    const selectedData = userinfo[id];
    if (selectedData) {
      setId(id);
      setInput({
        name: selectedData.name || '',
        age: selectedData.age || '',
        email: selectedData.email || '',
        password: selectedData.password || '',
      })
     
    }
  };
  const UpdateUser = (e) => {
    e.preventDefault();

    const updatevalue = {
      id: id,
      name: input.name,
      age: input.age,
      email: input.email,
      password: input.password,
    };
    dispatch(updateData(updatevalue));
    setInput({
      name: '',
      age: '',
      email: '',
      password: '',
    })
    setId('');
  };
  return (
    <div className="App">
      <div>
        <h2>Crud Operation</h2>
        <form onSubmit={id !== "" ? UpdateUser:handleSubmit}>
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

          <input type="submit" className='btn btn-warning' value={id !== "" ? "Update Data" :"Save"} />
        </form>
      </div>
      <br /><br />
      <div>
        <h2>User Table</h2>
        <table border={2} className='table table-striped'>
          <thead>
          <tr style={{fontWeight:"bold"}}>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Password</td>
            <td>Action</td>
          </tr>
          </thead>
          <tbody>
          {
            userinfo.map((i, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.email}</td>
                  <td>{i.password}</td>
                  <td><button className='btn btn-success' onClick={() => EditData(index)}>Edit</button>&nbsp;<button className='btn btn-danger' onClick={() => DeleteData(index)}>Delete</button></td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
