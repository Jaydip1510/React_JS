import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ReservationForm = () => {
    const [dt, setDt] = useState([]);
    const [uid, setUid] = useState();
    const [searchQuery, setSearchQuery] = useState('');
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
            fetchitem();
    }
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = dt.filter(item =>
        item.roomid.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.userid.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const editData = (id) => {
        setUid(id);
        fetch("http://localhost:3000/reservations/" + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(json => setReserData(json));
    }
    const deleteData = (id) => {
     
        setDt(dt.filter(item => item.id !== id));
    
        fetch("http://localhost:3000/reservations/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reserdata)
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error deleting data:', error));
        
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
        <TextField
                label="Search"
                fullWidth
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ marginTop: '20px', marginLeft: '75px', width: '400px' }}
            />

        <table  className='table table-striped'>
            <thead>
               <tr className='fw-bold'>
                  <td>RoomId</td>
                  <td>Date</td>
                  <td>CheckIn</td>
                  <td>CheckOut</td>
                  <td>UserId</td>
                  <td>Action</td>
               </tr>
            </thead>
            <tbody>
               {
                  dt.map((i) => {
                   return(
                     <tr>
                        <td>{i.userid}</td>
                        <td>{i.date}</td>
                        <td>{i.checkIn}</td>
                        <td>{i.checkout}</td>
                        <td>{i.userid}</td>
                        <td><button className='btn btn-outline-info' onClick={() => editData(i.id)}>Edit</button>&nbsp;<button className='btn btn-outline-danger' onClick={() => deleteData(i.id)}>Delete</button></td>
                     </tr>
                  )})
               }
            </tbody>
         </table>
        </>
  )
}

export default ReservationForm
