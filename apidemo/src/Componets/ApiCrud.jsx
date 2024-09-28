import React, { useEffect, useState } from 'react';

export default function CrudApi() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    // Read: Fetch all users when the component mounts
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // Create a new user
  const createUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email
      })
    })
      .then((res) => res.json())
      .then((newUser) => {
        setUsers([...users, newUser]);
        setName('');
        setEmail('');
      });
  };

  // Update an existing user
  const updateUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email
      })
    })
      .then((res) => res.json())
      .then((updatedUser) => {
        setUsers(users.map(user => user.id === id ? updatedUser : user));
        setName('');
        setEmail('');
        setEditingUser(null);
      });
  };

  // Delete a user
  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser(editingUser.id);
    } else {
      createUser();
    }
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditingUser(user);
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Name" 
          required
        />
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required
        />
        <button type="submit">
          {editingUser ? "Update User" : "Create User"}
        </button>
      </form>
      <br /><br />
      <table border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
