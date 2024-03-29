import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const ReservationForm = () => {
    const [dt, setDt] = useState([]);
      const [reserdata,setReserData] = useState({
           roomid:'',
           date:'',
           checkIn:'',
           checkout:'',
           userid:''
      })
      const handleChange = (e) => {
        const { name, value } = e.target;
        setReserData({ ...reserdata, [name]: value });
    } 
    const fetchitem = async () => {
        try {
           await fetch("http://localhost:3000/reservations").then(res => res.json()).then
              (res => setDt(res));
        } catch (error) {
           console.log(error.message);
        }
     }
     useEffect(() => {
        fetchitem();
     }, []);

    const handleSubmit = (e) => {
        fetch('http://localhost:3000/reservations', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(reserdata)
         })
            .then(res => res.json())
    }
  return (
    <>
        <div className='frm'>
            <form  onSubmit={handleSubmit} method='post'>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        marginLeft: "75px",
                        marginTop: "30px"
                    }}
                >
                    <TextField fullWidth label="RoomId" name='roomid' value={reserdata.roomid} onChange={handleChange} id="fullWidth" />
                    <br /><br />

                    <TextField fullWidth label="Date" name='date' value={reserdata.date} onChange={handleChange} id="fullWidth" />
                    <br /><br />

                    <TextField fullWidth label="CheckIn" name='checkIn' value={reserdata.checkIn} onChange={handleChange} id="fullWidth" />
                    <br /><br />

                    <TextField fullWidth label="CheckIn" name='checkout' value={reserdata.checkout} onChange={handleChange} id="fullWidth" />
                    <br /><br />

                    <TextField fullWidth label="UserId" name='userid' value={reserdata.userid} onChange={handleChange} id="fullWidth" />
                    <br /><br />

                    <Button type='submit' variant="contained" color="success">
                        SaveData
                    </Button>
                </Box>
            </form>
        </div>
        {/* <table  className='table table-striped'>
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
         </table> */}
        </>
  )
}

export default ReservationForm
