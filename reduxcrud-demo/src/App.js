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
    gender: '',
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
      gender: '',
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
        gender: selectedData.gender || '',
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
      gender: input.gender,
      email: input.email,
      password: input.password,
    };
    dispatch(updateData(updatevalue));
    setInput({
      name: '',
      age: '',
      gender: '',
      email: '',
      password: '',
    })
    setId('');
  };
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "lightgreen" }}><u>User Form</u></h2>
      <div className="frm1">
        <div className='frm'>
          <form onSubmit={id !== "" ? UpdateUser : handleSubmit}>
            <label>Name:-</label>
            <input type="text" className='tt1' name="name" value={input.name} onChange={handleChange} />
            <br /><br />

            <label>Age:-</label>
            <input type="text" className='t2' name="age" value={input.age} onChange={handleChange} />
            <br /><br />

            <label className='gl1'>Gender:-</label>
              <label>
                <input
                  className='g1'
                  type="radio"
                  name="gender"
                  value="male"
                  checked={input.gender === 'male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  className='g1'
                  type="radio"
                  name="gender"
                  value="female"
                  checked={input.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </label>
            <br /><br />

            <label>Email:-</label>
            <input type="email" className='t3' name="email" value={input.email} onChange={handleChange} />
            <br /><br />

            <label>Pwd:-</label>
            <input type="password" className='t4' name="password" value={input.password} onChange={handleChange} />
            <br /><br />

            <input type="submit" style={{ color: "green", fontWeight: "bold" }} class="btn btn-outline-warning" value={id !== "" ? "Update Data" : "Save"} />
          </form>
        </div>
      </div>
      <br /><br />
      <div className='t1'>
        <h3 style={{ color: "green" }}><u>User Table</u></h3>
        <table border={2} className='table table-striped'>
          <thead>
            <tr style={{ fontWeight: "bold", textAlign: "center" }}>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
              <td>Gender</td>
              <td>Email</td>
              <td>Password</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              userinfo.map((i, index) => {
                return (
                  <tr style={{ textAlign: "center" }}>
                    <td>{index + 1}</td>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.gender}</td>
                    <td>{i.email}</td>
                    <td>{i.password}</td>
                    <td><button style={{ fontWeight: "bold" }} className='btn btn-outline-success' onClick={() => EditData(index)}>Edit</button>&nbsp;<button style={{ fontWeight: "bold" }} className='btn btn-outline-danger' onClick={() => DeleteData(index)}>Delete</button></td>
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
