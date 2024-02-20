import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Apiform = () => {
    const [data, setData] = useState([])
    const [uid, setUid] = useState();
    const [userData, setUserData] = useState({
        name: '',
        age: '',
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }
    const fetchitem = async () => {
        try {
            await axios.get('http://localhost:3000/user').then
                (res => setData(res.data));
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        fetchitem();
    }, []);
    const handleSubmmit = (e) => {
        e.preventDefault();
        if (uid) {
            //update
            axios.put(`http://localhost:3000/user/${uid}`, userData)
                .then(res => {
                    console.log(res.data);
                    setUserData({
                        name: '',
                        age: '',
                        email: '',
                        password: ''
                    });
                    setUid(null);
                    fetchitem();
                })
                .catch(error => {
                    console.error('Error updating data:', error);
                });

        } else {


            axios.post('http://localhost:3000/user', userData)
                .then(res => {
                    console.log(res.data);
                    setUserData({
                        name: '',
                        age: '',
                        email: '',
                        password: ''
                    });

                })
                .catch(error => {
                    console.error('Error:', error);
                });
            fetchitem();
        }

    }
    const deleteData = (id) => {
        axios.delete(`http://localhost:3000/user/${id}`)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.error('Error deleting data:', error);
            });
        fetchitem();
    };
    const editData = (id) => {
        setUid(id);
        axios.patch(`http://localhost:3000/user/${id}`)
            .then(res => {
                console.log(res.data);
                setUserData(res.data);
            })
            .catch(error => {
                console.error('Error editing data:', error);
            });
    }
    return (
        <div>
            <div className='frm'>
                <div className='frm1'>
                    <form className='f1'  onSubmit={handleSubmmit} method='post'>
                        <label>Name:-</label>
                        <input type="text" className='t1' name='name' value={userData.name} onChange={handleChange} />
                        <br /><br />

                        <label>Age:-</label>
                        <input type='text' className='t2' name='age' value={userData.age} onChange={handleChange} />
                        <br /><br />

                        <label>Email:-</label>
                        <input type='email' className='t3' name='email' value={userData.email} onChange={handleChange} />
                        <br /><br />

                        <label>Password:-</label>
                        <input type='password' className='t4' name='password' value={userData.password} onChange={handleChange} />
                        <br /><br />

                        <button className='btn btn-outline-primary' type='submit'>SaveData</button>
                    </form>
                </div>
            </div>
            <br /><br />
            <table border={2} className='table table-striped'>
                <thead>
                    <tr className='fw-bold'>
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
                        data.map((i) => (
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.email}</td>
                                <td>{i.password}</td>
                                <td><button type='button' className='btn btn-outline-success' onClick={() => editData(i.id)}>Edit</button>&nbsp;<button type='button' className='btn btn-outline-danger' onClick={() => deleteData(i.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Apiform
