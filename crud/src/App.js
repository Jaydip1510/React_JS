import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import EmployeeDetails from './components/EmployeeDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={EmployeeList} />
        <Route exact path="/add" component={AddEmployee} />
        <Route exact path="/edit/:id" component={EditEmployee} />
        <Route exact path="/details/:id" component={EmployeeDetails} />
      </Switch>
    </Router>
  );
}

export default App;
