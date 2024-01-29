import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddData, DeleteData } from './redux/Action';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const Alldt = useSelector(state => state.Data)
  const dispatch = useDispatch();
  const SetData = () => {
    dispatch(AddData({ id: Date.now(), name: name, age: age }));
    setName('');
    setAge('');
  }
  const DeleteRecord = (id) => {
    dispatch(DeleteData({ id }));
  };
  return (
    <div className='App'>
      <h3 style={{color:"green"}}><u>Redux CrudOperation</u></h3>
      <div className="frm1">
        <div className='frm'>
          <form>
            <label>Name:-</label>
            <input type="text" name="name" value={name} onChange={(i) => setName(i.target.value)} />
            <br />
            <label>Age:-</label>
            <input  className="txt1" type="text" name="age" value={age} onChange={(i) => setAge(i.target.value)} />
            <br /><br />
            <input type="button" className='btn btn-success' value="Save" onClick={SetData} />
          </form>
        </div>
      </div>
      <br /><br />
      <table border={2} className='table table-striped'>
        <thead>
          <tr style={{fontWeight:"bold"}}>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
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
