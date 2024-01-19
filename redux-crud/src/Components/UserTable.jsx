import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../Action/Action';

const UserTable = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
  
    const handleDelete = (userId) => {
      dispatch(deleteUser(userId));
    };
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.address}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default UserTable;