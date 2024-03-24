import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, updateItem } from '../Redux/Reducers';
import Table from 'react-bootstrap/Table';
const FormData = () => {
    const userInfo = useSelector((state) => state.user.userData || []);
    const dispatch = useDispatch();
    const [uid, setUid] = useState('');
    const [inputValue, setInputValue] = useState({
        name: '',
        age: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem(inputValue));
        setInputValue({
            name: '',
            age: '',
            email: '',
            password: ''
        });
    }
    // delete data
    const deleteData = (id) => {
      dispatch(deleteItem(id));
    }

    // edit data
    const editData = (id) => {
       const edititem = userInfo[id];
       if(edititem){
          setUid(id);
          setInputValue({
             name: edititem.name || '',
             age: edititem.age || '',
             email: edititem.email || '',
             password: edititem.password || '',
          })
       }
    }
    // update user
    const updateData = (e) => {
       e.preventDefault();
       const updateuser = {
          id:uid,
          name: inputValue.name,
          age: inputValue.age,
          email: inputValue.email,
          password: inputValue.password,
       }
       dispatch(updateItem(updateuser));
       setInputValue({
          name:'',
          age:"",
          email:"",
          password:"",
       })
       setUid('');
    }
    return (
        <>
            <div className='container'>
                <form className='frm' onSubmit={uid !== ''? updateData : handleSubmit} method='post'>
                    <label>Name</label>
                    <Form.Control
                        type="text"
                        name='name'
                        value={inputValue.name}
                        onChange={handleChange}
                    />
                    <label>Age</label>
                    <Form.Control
                        type="text"
                        name='age'
                        value={inputValue.age}
                        onChange={handleChange}
                    />
                    <label>Email</label>
                    <Form.Control
                        type="email"
                        name='email'
                        value={inputValue.email}
                        onChange={handleChange}
                    />
                    <label>Password</label>
                    <Form.Control
                        type="password"
                        name='password'
                        value={inputValue.password}
                        onChange={handleChange}
                    />
                    <br /><br />
                    <div className="d-grid gap-2">
                        <Button type='submit' variant="secondary" size="lg">
                            SaveData
                        </Button>
                    </div>
                </form>
            </div>
            <Table striped>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userInfo.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td><button className='btn btn-outline-success' onClick={()=>editData(index)}>Edit</button><button className='btn btn-outline-danger' onClick={() => deleteData(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>
    )
}

export default FormData
