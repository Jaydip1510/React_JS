import React, { useEffect, useState } from 'react'

export default function FetchApi() {
    const [data, setData] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
      name: '',
      username: '',
      email: '',
    });

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }, []); 
    
    const handleDelete = (id) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: 'DELETE' })
      .then(() => setData(data.filter(user => user.id !== id))) 
      .catch(console.log);
    };

    const handleEdit = (id) => {
      const userToEdit = data.find(user => user.id === id);
      setFormData({
        name: userToEdit.name,
        username: userToEdit.username,
        email: userToEdit.email,
      });
      setEditingId(id);
    }

    const handleSave = (id) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(res => res.json())
      .then(updatedUser => {
        setData(data.map(user => user.id === id ? updatedUser : user));
        setEditingId(null);
      })
      .catch(console.log);
    }

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
      <div>
        <table border={2}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((list, index) => (
                <tr key={index}>
                  <td>{list.id}</td>
                  <td>
                    {editingId === list.id ? 
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                      /> 
                      : list.name}
                  </td>
                  <td>
                    {editingId === list.id ? 
                      <input 
                        type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange}
                      /> 
                      : list.username}
                  </td>
                  <td>
                    {editingId === list.id ? 
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                      /> 
                      : list.email}
                  </td>
                  <td>
                    {list.address.street}, {list.address.suite}, {list.address.city}, {list.address.zipcode}
                  </td>
                  <td>{list.phone}</td>
                  <td>{list.company.name}</td>
                  <td>
                    {editingId === list.id ? 
                      <button onClick={() => handleSave(list.id)}>Save</button> 
                      : <button onClick={() => handleEdit(list.id)}>Edit</button>}
                    <button onClick={() => handleDelete(list.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
}
