import React, { useEffect, useState } from 'react';

export default function ApiData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        localStorage.setItem("users", JSON.stringify(data));
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
           name :-  {user.name}  <br />
           email :- {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
