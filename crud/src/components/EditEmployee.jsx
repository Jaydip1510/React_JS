import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from './EmployeeService';

function EditEmployee() {
  const { id } = useParams();
  const history = useHistory();
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    position: '',
    // Add other fields as needed
  });

  useEffect(() => {
    const fetchedEmployee = getEmployeeById(Number(id));
    setEmployee(fetchedEmployee);
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(Number(id), employee);
    history.push('/');
  };

  return (
    <div>
      <h2>Edit Employee</h2>
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
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}

export default EditEmployee;
