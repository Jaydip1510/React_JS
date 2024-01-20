import logo from './logo.svg';
import './App.css';
import RegistrationForm from './Components/RegistrationForm';
import { Link, Route, Routes } from 'react-router-dom';
import UserTable from './Components/UserTable';

function App() {
  return (
    <div className="App">
      <h3><u>User Form</u></h3>
      <Link to='/userform'>User Form</Link><br/>
      <Link to='/usertable'>User Table</Link>
      <Routes>
          <Route path='/usertable' element={<UserTable/>}></Route>
          <Route path='/userform' element={<RegistrationForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
