import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddData,DeleteData } from './redux/Action';

function App() {
  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const Alldt = useSelector(state => state.Data)
  const dispatch = useDispatch();
  const SetData = () => {
     dispatch(AddData({id:Date.now(),name:name,age:age}));
     setName('');
     setAge('');
  }
  const DeleteRecord = (id) => {
    dispatch(DeleteData({ id }));
  };
  return (
    <div className="App">
        <form>
            <label>Name:-</label>
            <input type="text" name="name" value={name} onChange={(i)=>setName(i.target.value)}/>
            <br/><br/>
            <label>Age:-</label>
            <input type="text" name="age" value={age} onChange={(i)=>setAge(i.target.value)}/>
            <br/><br/>
            <input type="button" value="Save" onClick={SetData}/>
        </form>
        <br/><br/>
        <table border={2}>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Action</td>
            </tr>
            {
               Alldt.map((i)=>{
                  return <tr>
                      <td>{i.id}</td>
                      <td>{i.name}</td>
                      <td>{i.age}</td>
                      <td><input type="button" value="Delete" onClick={() => DeleteRecord(i.id)}/></td>
                  </tr>
               })
            }
        </table>
    </div>
  );
}

export default App;
