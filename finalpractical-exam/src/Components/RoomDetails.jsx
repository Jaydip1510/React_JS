import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RoomDetail = () => {
    const [roomData, setRoomData] = useState({
        roomname: '',
        capacity: ''
    });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRoomData({ ...roomData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/rooms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(roomData)
            });
            if (response.ok) {
                history.push('/room-list'); // Redirect to room list page
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Add Room</h2>
            <form onSubmit={handleSubmit}>
                <label>Room Name:</label>
                <input type="text" name="roomname" value={roomData.roomname} onChange={handleChange} />
                <br />
                <label>Capacity:</label>
                <input type="text" name="capacity" value={roomData.capacity} onChange={handleChange} />
                <br />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default RoomDetail;