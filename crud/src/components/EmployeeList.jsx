import React from 'react';
import { Link } from 'react-router-dom';
import { getEmployees, deleteEmployee } from './EmployeeService';

function EmployeeList({ history }) {
  const employees = getEmployees();

  const handleDelete = (id) => {
    deleteEmployee(id);
    // Reload the page or update state to reflect changes
    history.push('/');
  };

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
            <Link to={`/details/${employee.id}`}>Details</Link>
            <Link to={`/edit/${employee.id}`}>Edit</Link>
            <button onClick={() => handleDelete(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Employee</Link>
    </div>
  );
}

export default EmployeeList;
