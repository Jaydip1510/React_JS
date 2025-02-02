import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear session on logout
    window.location.href = '/login'; // Redirect to login page
  };

  const [bids, setBids] = useState([]);
  
  useEffect(() => {
    // Example of how you might get live bids
    const liveBids = [
      { bidNumber: 1, origin: 'New York', destination: 'Los Angeles', vehicleType: 'Truck', startDate: '2025-02-01', startTime: '10:00 AM' },
      { bidNumber: 2, origin: 'Chicago', destination: 'Miami', vehicleType: 'Van', startDate: '2025-02-02', startTime: '11:00 AM' },
      // Add more bids here
    ];
    setBids(liveBids);
    
  }, []);

  const handleBidClick = (bidNumber) => {
    // Redirect to the Bid Details Page using window.location.href
    window.location.href = `/bid-details/${bidNumber}`;
  };

  return (
    <div>
      <h2>Live Bids</h2>
      <table>
        <thead>
          <tr>
            <th>Bid Number</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Vehicle Type</th>
            <th>Start Date</th>
            <th>Start Time</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {bids.map((bid) => (
            <tr key={bid.bidNumber}>
              <td>{bid.bidNumber}</td>
              <td>{bid.origin}</td>
              <td>{bid.destination}</td>
              <td>{bid.vehicleType}</td>
              <td>{bid.startDate}</td>
              <td>{bid.startTime}</td>
              <td>
                <button onClick={() => handleBidClick(bid.bidNumber)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
