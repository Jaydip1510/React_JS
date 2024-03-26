import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ApiData = () => {
    const [dt, setDt] = useState([]);
    const [userData,setUserData] = useState({
        name:'',
        age:'',
        email:'',
        password:'',
        address:''
    })

    const handleChange = (e) => {
        const { name,value } = e.target;
        setUserData({...userData,[name]:value});
    }

    const saveData = (e) => {
        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
         })
            .then(res => res.json())
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
                        <TextField fullWidth label="name" name='name' onChange={handleChange} id="fullWidth" />
                        <br /><br />
                        <TextField fullWidth label="age" name='age' onChange={handleChange} id="fullWidth" />
                        <br /><br />
                        <TextField fullWidth label="email" name='email' onChange={handleChange} id="fullWidth" />
                        <br /><br />
                        <TextField fullWidth label="password" name='password' onChange={handleChange} id="fullWidth" />
                        <br /><br />
                        <TextField fullWidth label="address" name='address' onChange={handleChange} id="fullWidth" />
                    </Box><br /><br />
                    <Stack spacing={2} direction="row" className='btn1'>   
                        <Button type='submit' variant="contained" >SaveData</Button>   
                    </Stack>
                </form>
            </div>
            <br /><br /><br />
            <table border={2}> 
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
                        
                    }
                </tbody>
            </table>
        </>
    )
}

export default ApiData
