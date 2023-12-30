import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addEmployee } from './EmployeeService'

function AddEmployee() {
  const [employee, setEmployee] = useState({
    id: Math.floor(Math.random() * 1000),
    name: '',
    position: '',
    // Add other fields as needed
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);
    history.push('/');
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="position"
          value={employee.position}
          onChange={handleInputChange}
          placeholder="Position"
        />
        {/* Add other input fields */}
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;
