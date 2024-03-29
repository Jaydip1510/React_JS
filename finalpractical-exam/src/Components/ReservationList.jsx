import React, { useState, useEffect } from 'react';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://localhost:3000/reservations');
        if (response.ok) {
          const data = await response.json();
          setReservations(data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchReservations();
  }, []);

  return (
    <div>
      <h2>Reservation List</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            Room ID: {reservation.roomid}, Date: {reservation.date}, Check-In: {reservation.checkIn}, Check-Out: {reservation.checkout}, User ID: {reservation.userid}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;