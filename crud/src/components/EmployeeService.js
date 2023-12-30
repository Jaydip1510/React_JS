const getEmployees = () => {
    return JSON.parse(localStorage.getItem('employees')) || [];
  };
  
  const addEmployee = (employee) => {
    const employees = getEmployees();
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
  };
  
  const updateEmployee = (id, updatedEmployee) => {
    const employees = getEmployees();
    const updatedEmployees = employees.map((employee) =>
      employee.id === id ? updatedEmployee : employee
    );
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };
  
  const deleteEmployee = (id) => {
    const employees = getEmployees().filter((employee) => employee.id !== id);
    localStorage.setItem('employees', JSON.stringify(employees));
  };
  
  const getEmployeeById = (id) => {
    const employees = getEmployees();
    return employees.find((employee) => employee.id === id);
  };
  
  export { getEmployees, addEmployee, updateEmployee, deleteEmployee, getEmployeeById };