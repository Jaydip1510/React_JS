import logo from './logo.svg';
import './App.css';
import RoomList from './Components/RoomList';
import ReservationForm from './Components/ReservationForm';
import NavbarComponent from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Routes>
         <Route path='/roomlist' element={<RoomList/>} />
         <Route path='/reservation' element={<ReservationForm/>} />
      </Routes>
    </div>
  );
}

export default App;
