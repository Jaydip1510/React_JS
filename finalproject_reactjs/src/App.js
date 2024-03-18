import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Shop from './component/Shop';
import AboutUs from './component/AboutUs';
import Services from './component/Services';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavBar/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>

    </div>
  );
}

export default App;
