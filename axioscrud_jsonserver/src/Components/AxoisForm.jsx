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
                        <TextField fullWidth label="Name" name='name' onChange={handleChange} id="fullWidth" />
                        <br /><br />

                        <TextField fullWidth label="Age" name='age' onChange={handleChange} id="fullWidth" />
                        <br /><br />

                        <TextField fullWidth label="Salary" name='salary' onChange={handleChange} id="fullWidth" />
                        <br /><br />

                        <TextField fullWidth label="Address" name='address' onChange={handleChange} id="fullWidth" />
                        <br /><br />

                        <Button type='submit' variant="contained" color="success">
                            SaveData
                        </Button>

                    </Box>
                </form>
            </div>
        </>
    )
}

export default AxoisForm
