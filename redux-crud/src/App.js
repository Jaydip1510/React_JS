import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import RegisterForm from './Components/RegistrationForm';
import UserTable from './Components/UserTable';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <Link to="userform">UserForm</Link><br/>
      <Link to="usertable">UserTable</Link>
      <Provider store={Store}>
        <Routes>
          <Route path="/userform" element={ <RegisterForm/>}></Route>
          <Route path="usertable" element={<UserTable/>}></Route>
        </Routes> 
      </Provider>
    </div>
  );
}

export default App;
