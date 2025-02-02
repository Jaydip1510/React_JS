import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Both fields are required');
      return;
    }

    // Check if user exists in localStorage
    const user = JSON.parse(localStorage.getItem(`user-${username}`)); // Assuming user data is saved with key 'user-username'

    // Validate credentials
    if (!user) {
      setError('User not found');
      return;
    }

    if (user.password !== password) {
      setError('Incorrect password');
      return;
    }

    // If login is successful, redirect to home page or another page
    window.location.href = '/Dashboard'; // Or wherever you'd like to redirect after login
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;   