import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Footer from './component/Footer';
import NavBar from './component/NavBar';
// import PopularProduct from './component/PopularProduct';
// import ProductSession from './component/ProductSession';
// import RecentBox from './component/RecentBox';
// import Testimonials from './component/Testimonials';
// import WeHelpYou from './component/WeHelpYou';
// import WhyChoose from './component/WhyChoose';
import Shop from './component/Shop';
import AboutUs from './component/AboutUs';
import Services from './component/Services';

function App() {
  return (
    <div>
      
      {/* <NavBar />
      <ProductSession />
      <WhyChoose />
      <WeHelpYou />
      <PopularProduct />
      <Testimonials />
      <RecentBox />
      <Footer /> */}

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
