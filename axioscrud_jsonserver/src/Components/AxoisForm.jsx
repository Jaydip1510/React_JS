import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const AxoisForm = () => {
    const [edata, setData] = useState([])
    const [inputValue, setInputValue] = useState({
        name: '',
        age: "",
        salary: "",
        address: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value })
    }

    const fetchitem = async () => {
        try {
            await axios.get('http://localhost:3000/emp').then
                (res => setData(res.data));
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        fetchitem();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/emp", inputValue)
            .then(res => {
                console.log(res.data);
                setInputValue({
                    name: "",
                    age: '',
                    salary: "",
                    address: "",
                });
                fetchitem(); // Fetch data after successful save
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const deleteData = (id) => {
        axios.delete(`http://localhost:3000/emp/${id}`)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.error('Error deleting data:', error);
            });
        fetchitem();
    }

    return (
        <>
            <div className='frm'>
                <form className='frm1' onSubmit={handleSubmit} method='post'>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                            marginLeft: "75px",
                            marginTop: "30px"
                        }}
                    >
                        <TextField fullWidth label="Name" name='name' value={inputValue.name} onChange={handleChange} id="fullWidth" />
                        <br /><br />

                        <TextField fullWidth label="Age" name='age' value={inputValue.age} onChange={handleChange} id="fullWidth" />
                        <br /><br />

                        <TextField fullWidth label="Salary" name='salary' value={inputValue.salary} onChange={handleChange} id="fullWidth" />
                        <br /><br />

                        <TextField fullWidth label="Address" name='address' value={inputValue.address} onChange={handleChange} id="fullWidth" />
                        <br /><br />

                        <Button type='submit' variant="contained" color="success">
                            SaveData
                        </Button>

                    </Box>
                </form>
            </div>
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
                        edata.map((i) => (
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.salary}</td>
                                <td>{i.address}</td>
                                <td><button onClick={() => deleteData(i.id)} className='btn btn-outline-danger'>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default AxoisForm
