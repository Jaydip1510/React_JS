import React, { useState, useEffect } from "react";
import { Table, Button, Container, Card, Navbar, Nav } from "react-bootstrap";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear session on logout
    window.location.href = "/"; // Redirect to login page
  };

  const [bids, setBids] = useState([]);

  useEffect(() => {
    // Example data for live bids
    const liveBids = [
      {
        bidNumber: 1,
        origin: "New York",
        destination: "Los Angeles",
        vehicleType: "Truck",
        startDate: "2025-02-01",
        startTime: "10:00 AM",
      },
      {
        bidNumber: 2,
        origin: "Chicago",
        destination: "Miami",
        vehicleType: "Van",
        startDate: "2025-02-02",
        startTime: "11:00 AM",
      },
    ];
    setBids(liveBids);
  }, []);

  const handleBidClick = (bidNumber) => {
    window.location.href = `/bid-details/${bidNumber}`;
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Dashboard</Navbar.Brand>
          <Nav className="ms-auto">
            <Button variant="outline-light" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>

      {/* Content Section */}
      <Container className="mt-4">
        <Card className="shadow-lg p-4">
          <h2 className="text-center mb-4">Live Bids</h2>

          {/* Table for Bids */}
          <Table striped bordered hover responsive>
            <thead className="table-dark">
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
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleBidClick(bid.bidNumber)}
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Container>
    </div>
  );
};

export default Dashboard;
