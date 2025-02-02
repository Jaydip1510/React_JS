import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ResponseForm from './Response-form';

const BidDetails = () => {
  const { bidNumber } = useParams();
  const [bid, setBid] = useState(null);

  useEffect(() => {
    // In a real scenario, you would fetch the bid data from an API or backend
    const bidDetails = {
      1: { bidNumber: 1, origin: 'New York', destination: 'Los Angeles', vehicleType: 'Truck', startDate: '2025-02-01', startTime: '10:00 AM', materialWeight: '5000kg' },
      2: { bidNumber: 2, origin: 'Chicago', destination: 'Miami', vehicleType: 'Van', startDate: '2025-02-02', startTime: '11:00 AM', materialWeight: '2000kg' },
      // Add more bid details here
    };

    setBid(bidDetails[bidNumber]);
  }, [bidNumber]);

  return (
    <div>
      {bid ? (
        <>
          <h2>Bid Details</h2>
          <p><strong>Bid Number:</strong> {bid.bidNumber}</p>
          <p><strong>Origin:</strong> {bid.origin}</p>
          <p><strong>Destination:</strong> {bid.destination}</p>
          <p><strong>Vehicle Type:</strong> {bid.vehicleType}</p>
          <p><strong>Start Date:</strong> {bid.startDate}</p>
          <p><strong>Start Time:</strong> {bid.startTime}</p>
          <p><strong>Material Weight:</strong> {bid.materialWeight}</p>
          <ResponseForm bidNumber={bid.bidNumber} />
        </>
      ) : (
        <p>Loading bid details...</p>
      )}
    </div>
  );
};

export default BidDetails;
