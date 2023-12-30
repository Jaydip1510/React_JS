import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployeeById } from './EmployeeService';

function EmployeeDetails() {
  const { id } = useParams();
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

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Position: {employee.position}</p>
      {/* Display other details */}
    </div>
  );
}

export default EmployeeDetails;
