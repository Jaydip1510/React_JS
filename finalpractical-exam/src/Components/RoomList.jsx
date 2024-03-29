// RoomList.js
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const RoomList = () => {
    const [dt, setDt] = useState([]);
    const [roomdata, setRoomData] = useState({
        roomname: '',
        capacity: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRoomData({ ...roomdata, [name]: value });
    }
    const fetchitem = async () => {
        try {
           await fetch("http://localhost:3000/rooms").then(res => res.json()).then
              (res => setDt(res));
        } catch (error) {
           console.log(error.message);
        }
     }
     useEffect(() => {
        fetchitem();
     }, []);

    const handleSubmit = (e) => {
        fetch('http://localhost:3000/rooms', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(roomdata)
         })
            .then(res => res.json())
    }
    // const removeData = (id) => {
     
    //     setDt(dt.filter(item => item.id !== id));
    
    //     fetch("http://localhost:3000/emp/" + id, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(empdata)
    //     })
    //     .then(res => res.json())
    //     .then(json => console.log(json))
    //     .catch(error => console.error('Error deleting data:', error));
        
    // }
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
                    <TextField fullWidth label="RoomName" name='roomname' value={roomdata.roomname} onChange={handleChange} id="fullWidth" />
                    <br /><br />

                    <TextField fullWidth label="capacity" name='capacity' value={roomdata.capacity} onChange={handleChange} id="fullWidth" />
                    <br /><br />

                    <Button type='submit' variant="contained" color="success">
                        SaveData
                    </Button>
                </Box>
            </form>
        </div>
        <table  className='table table-striped'>
            <thead>
               <tr className='fw-bold'>
                  <td>Id</td>
                  <td>RoomName</td>
                  <td>Capacity</td>
               </tr>
            </thead>
            <tbody>
               {
                  dt.map((i) => {
                   return(
                     <tr>
                        <td>{i.id}</td>
                        <td>{i.roomname}</td>
                        <td>{i.capacity}</td>
                     </tr>
                  )})
               }
            </tbody>
         </table>
        </>
    )
}

export default RoomList
