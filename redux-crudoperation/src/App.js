import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddData, DeleteData, EditData } from './redux/Action';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender,setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [qual, setQual] = useState([]);

  const Alldt = useSelector(state => state.Data);
  const editalldata = useSelector((state) => state.edituser);
  const dispatch = useDispatch();

  const SetData = () => {
    dispatch(AddData({ id: Date.now(), name:name, age:age, gender:gender, email:email, password:password, qual:qual }));
    setName('');
    setAge('');
    setGender('');
    setEmail('');
    setPassword('');
    setQual('');
    dispatch(EditData(null));
  }
  function Qualification(qualification) {
    if (qual.includes(qualification)) {
      setQual(qual.filter(q => q !== qualification));
    } else {
      setQual([...qual, qualification]);
    }
  }

  return (
    <div className='App'>
      <h3 style={{ color: "green" }}><u>Redux CrudOperation</u></h3>
      <div className="frm1">
        <div className='frm'>
          <form>
            <label>Name:-</label>
            <input type="text" name="name" value={editalldata?editalldata.name:name} onChange={(i) => setName(i.target.value)} />
            <br />
            <label>Age:-</label>
            <input className="txt1" type="text" name="age" value={editalldata?editalldata.age:age} onChange={(i) => setAge(i.target.value)} />
            <br />
            <label className='g1'>Gender:-</label>
            <input className="g2" type="radio" name="gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
            <label>Male</label>
            <input className="g3" type="radio" name="gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
            <label>Female</label>
            <br />
            <label>Email:-</label>
            <input type="email" name="email" value={editalldata?editalldata.email:email} onChange={(i)=>setEmail(i.target.value)} />
            <br/>
            <label>Pwd:-</label>
            <input type="password" className='p1' name="password" value={editalldata?editalldata.password:password} onChange={(i)=>setPassword(i.target.value)} />
            <br/><br/>
            <label className='ql1'>Qual:-</label>
              <input type="checkbox" className='q1' value="SSC" checked={qual.includes('SSC')} onChange={() => Qualification('SSC')} />
              SSC
              <input type="checkbox" className='q2' value="HSC" checked={qual.includes('HSC')} onChange={() => Qualification('HSC')} />
              HSC
              <input type="checkbox" className='q3' value="BCA" checked={qual.includes('BCA')} onChange={() => Qualification('BCA')} />
              BCA
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
            <td>Email</td>
            <td>Password</td>
            <td>Qual</td>
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
                <td>{i.email}</td>
                <td>{i.password}</td>
                <td>{i.qual}</td>
                <td><input type="button" className='btn btn-success' value="Edit" onClick={()=>dispatch(EditData(i.id))}/>&nbsp;<input type="button" className='btn btn-danger' value="Delete" onClick={() =>dispatch(DeleteData(i.id))} /></td>
              </tr>

            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
