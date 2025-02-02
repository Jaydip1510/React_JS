import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col, Spinner, Navbar, Nav } from "react-bootstrap";
import ResponseForm from "./Response-form";

const BidDetails = () => {
  const { bidNumber } = useParams();
  const [bid, setBid] = useState(null);

  useEffect(() => {
    // In a real scenario, you would fetch the bid data from an API or backend
    const bidDetails = {
      1: {
        bidNumber: 1,
        origin: "New York",
        destination: "Los Angeles",
        vehicleType: "Truck",
        startDate: "2025-02-01",
        startTime: "10:00 AM",
        materialWeight: "5000kg",
      },
      2: {
        bidNumber: 2,
        origin: "Chicago",
        destination: "Miami",
        vehicleType: "Van",
        startDate: "2025-02-02",
        startTime: "11:00 AM",
        materialWeight: "2000kg",
      },
    };

    setBid(bidDetails[bidNumber]);
  }, [bidNumber]);

  return (
    <>
      {/* Bootstrap Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Bid System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/login">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-4">
        {bid ? (
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Bid Details</h2>
              <Row>
                <Col md={6}>
                  <p><strong>Bid Number:</strong> {bid.bidNumber}</p>
                  <p><strong>Origin:</strong> {bid.origin}</p>
                  <p><strong>Destination:</strong> {bid.destination}</p>
                </Col>
                <Col md={6}>
                  <p><strong>Vehicle Type:</strong> {bid.vehicleType}</p>
                  <p><strong>Start Date:</strong> {bid.startDate}</p>
                  <p><strong>Start Time:</strong> {bid.startTime}</p>
                  <p><strong>Material Weight:</strong> {bid.materialWeight}</p>
                </Col>
              </Row>
              <hr />
              {/* Response Form Component */}
              <ResponseForm bidNumber={bid.bidNumber} />
            </Card.Body>
          </Card>
        ) : (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <p>Loading bid details...</p>
          </div>
        )}
      </Container>
    </>
  );
};

export default BidDetails;
