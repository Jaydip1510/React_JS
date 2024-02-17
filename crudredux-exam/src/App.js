import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteItem, addItem,updateItem } from './Redux/Action';
import { useState } from 'react';

function App() {
  const userInfo = useSelector((state) => state.userItems || [] );
  const dispatch = useDispatch();
  const [eid,setEid] = useState('');
  const [inputValue,setInputValue] = useState({
      name:"",
      age:'',
      salary:'',
      address:'',
  });

  const handelChange = (e) => {
      const {name, value} = e.target;
      setInputValue({...inputValue, [name] : value});
  }
  const handelSubmmit = (e) => {
      e.preventDefault();

      dispatch(addItem(inputValue));
      setInputValue({
          name:"",
          age:'',
          salary:'',
          address:'',
      })
  }
  const deleteUser = (id) => {
     dispatch(DeleteItem(id));
  }
  const editData = (id) => {
    const setData = userInfo[id];
    if(setData){
      setEid(id);
      setInputValue({
          name: setData.name || '',
          age: setData.age || '',
          salary: setData.salary || '',
          address: setData.address || '',
      })
    }
  }
  const updateitem = (e) => {
    e.preventDefault();

    const updatevalue = {
      id:eid,
      name:inputValue.name,
      age:inputValue.age,
      salary:inputValue.salary,
      address:inputValue.address,
    };
    dispatch(updateItem(updatevalue));
    setInputValue({
       name:'',
       age:'',
       salary:'',
       address:'',
    })
    setEid('');
  }
  return (
    <div className="App">
         <form onSubmit={eid !== '' ? updateitem : handelSubmmit}>
              <label>Name:-</label>
              <input type="text" name='name' value={inputValue.name} onChange={handelChange} />
              <br/>
              <br/>

              <label>Age:-</label>
              <input type='number' name='age' value={inputValue.age} onChange={handelChange} /> 
              <br/>
              <br/>

              <label>Salary:-</label>
              <input type="number" name='salary' value={inputValue.salary} onChange={handelChange} />
              <br/>
              <br/>

              <label>Address:-</label>
              <input type="text" name="address" value={inputValue.address} onChange={handelChange} /> 
              <br/>
              <br/>

              <button type='submmit'>SaveData</button>
         </form>
         <br/><br/>
         <table border={2} className='table table-striped'>
               <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Salary</td>
                    <td>Address</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {
                   userInfo.map((i,index)=>{
                       return (
                            <tr>
                              <td>{index+1}</td>
                              <td>{i.name}</td>
                              <td>{i.age}</td>
                              <td>{i.salary}</td>
                              <td>{i.address}</td>
                              <td><button onClick={() => editData(index)}>Edit</button><button onClick={() => deleteUser(index)}>Delete</button></td>
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
