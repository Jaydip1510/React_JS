import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Shop from './component/Shop';
import AboutUs from './component/AboutUs';
import Services from './component/Services';
import Blog from './component/Blog';
import ContactUs from './component/ContactUs';
import Cart from './component/Cart';
import CheckOut from './component/CheckOut';
import ThankYou from './component/ThankYou';
import LoginComponent from './component/LoginComponent';
import SignUpComponent from './component/SignUpComponent';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavBar/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<CheckOut/>} />
        <Route path='/thankyou' element={<ThankYou/>} />
        <Route path='/login' element={<LoginComponent/>} />
        <Route path='/register' element={<SignUpComponent/>} />
      </Routes>

    </div>
  );
}

export default App;
