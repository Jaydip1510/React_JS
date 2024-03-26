import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ApiData = () => {
    const [dt, setDt] = useState([]);
    const [uid, setUid] = useState();
    const [userData, setUserData] = useState({
        name: '',
        age: '',
        email: '',
        password: '',
        address: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }
    const fetchitem = async () => {
        try {
            await fetch("http://localhost:3000/user").then(res => res.json()).then
                (res => setDt(res));
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        fetchitem();
    }, []);

    const saveData = (e) => {
        if (uid) {
            // update data
            fetch(`http://localhost:3000/user/${uid}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
         })
            .then(res => res.json())
            .then(json => console.log(json));
        } else {
            //insert data
            fetch('http://localhost:3000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then(res => res.json())
                .then(newData => {
                    // Update state with the new data
                    setDt([...dt, newData]);
                })
                .catch(error => console.error('Error inserting data:', error));
            fetchitem();
        }

    }


    const deleteData = (id) => {
        setDt(dt.filter(item => item.id === id));

        fetch("http://localhost:3000/user/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(error => console.error('Error deleting data:', error));
        fetchitem();
    }
    const editData = (id) => {
        setUid(id);
        fetch("http://localhost:3000/user/" + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(json => setUserData(json));
    }
    return (
        <>
            <div className='frm'>
                <form className='frm1' onSubmit={saveData} method='post'>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                            margin: "auto",
                            marginTop: "40px"
                        }}
                    >
                        <TextField fullWidth label="name" name='name' value={userData.name} onChange={handleChange} id="fullWidth" />
                        <br /><br />
                        <TextField fullWidth label="age" name='age' value={userData.age} onChange={handleChange} id="fullWidth" />
                        <br /><br />
                        <TextField fullWidth label="email" name='email' value={userData.email} onChange={handleChange} id="fullWidth" />
                        <br /><br />
                        <TextField fullWidth label="password" name='password' value={userData.password} onChange={handleChange} id="fullWidth" />
                        <br /><br />
                        <TextField fullWidth label="address" name='address' value={userData.address} onChange={handleChange} id="fullWidth" />
                    </Box><br /><br />
                    <Stack spacing={2} direction="row" className='btn1'>
                        <Button type='submit' variant="contained" >SaveData</Button>
                    </Stack>
                </form>
            </div>
            <br /><br /><br />
            <table border={2} className='table table-striped'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Address</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        dt.map((i) => {
                            return (
                                <tr key={i.id}>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.age}</td>
                                    <td>{i.email}</td>
                                    <td>{i.password}</td>
                                    <td>{i.address}</td>
                                    <td><button className='btn btn-outline-info' onClick={() => editData(i.id)}>Edit</button>&nbsp;<button onClick={() => deleteData(i.id)} className='btn btn-outline-danger'>Delete</button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ApiData
