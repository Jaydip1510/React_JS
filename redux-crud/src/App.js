import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import RegisterForm from './Components/RegistrationForm';
import UserTable from './Components/UserTable';

function App() {
  return (
    <div className="App">
      <h3 className='nm'>Registration Form</h3>
      <Provider store={Store}>
        <RegisterForm/>
        <UserTable/>
      </Provider>
    </div>
  );
}

export default App;
