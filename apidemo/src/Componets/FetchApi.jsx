import React, { useEffect, useState } from 'react'

export default function FetchApi() {
    const [data, setData] = useState([]);
    
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
                  <td>{list.name}</td>
                  <td>{list.username}</td>
                  <td>{list.email}</td>
                  <td>
                    {list.address.street}, {list.address.suite}, {list.address.city}, {list.address.zipcode}
                  </td>
                  <td>{list.phone}</td>
                  <td>{list.company.name}</td>
                   <button onClick={() => handleDelete(list.id)}>Delete</button>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
}
