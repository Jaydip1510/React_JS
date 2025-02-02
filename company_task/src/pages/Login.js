import React, { useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Both fields are required!");
      return;
    }

    const user = JSON.parse(localStorage.getItem(`user-${username}`));

    if (!user) {
      setError("User not found!");
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password!");
      return;
    }

    window.location.href = "/Dashboard"; // Redirect after successful login
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "400px", padding: "20px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <a href="/register" className="text-primary">
              Signup here
            </a>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
