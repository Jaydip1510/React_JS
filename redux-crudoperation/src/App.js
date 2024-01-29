import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddData, DeleteData } from './redux/Action';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender,setGender] = useState('');
  const Alldt = useSelector(state => state.Data)
  const dispatch = useDispatch();
  const SetData = () => {
    dispatch(AddData({ id: Date.now(), name: name, age: age,gender:gender }));
    setName('');
    setAge('');
    setGender('');
  }
  const DeleteRecord = (id) => {
    dispatch(DeleteData({ id }));
  };
  return (
    <div className='App'>
      <h3 style={{ color: "green" }}><u>Redux CrudOperation</u></h3>
      <div className="frm1">
        <div className='frm'>
          <form>
            <label>Name:-</label>
            <input type="text" name="name" value={name} onChange={(i) => setName(i.target.value)} />
            <br />
            <label>Age:-</label>
            <input className="txt1" type="text" name="age" value={age} onChange={(i) => setAge(i.target.value)} />
            <br />
            <label className='g1'>Gender:-</label>
            <input className="g2" type="radio" name="gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
            <label>Male</label>
            <input className="g3" type="radio" name="gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
            <label>Female</label>
            <br /><br />
            <input type="button" className='btn btn-success' value="Save" onClick={SetData} />
          </form>
        </div>
      </div>
      <br /><br />
      <table border={2} className='table table-striped'>
        <thead>
          <tr style={{ fontWeight: "bold" }}>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Gender</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            Alldt.map((i) => {
              return <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.gender}</td>
                <td><input type="button" className='btn btn-danger' value="Delete" onClick={() => DeleteRecord(i.id)} /></td>
              </tr>

            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
