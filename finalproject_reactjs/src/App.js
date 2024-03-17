import './App.css';
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import PopularProduct from './component/PopularProduct';
import ProductSession from './component/ProductSession';
import RecentBox from './component/RecentBox';
import Testimonials from './component/Testimonials';
import WeHelpYou from './component/WeHelpYou';
import WhyChoose from './component/WhyChoose';

function App() {
  return (
    <div>
      
      <NavBar />
      <ProductSession />
      <WhyChoose />
      <WeHelpYou />
      <PopularProduct />
      <Testimonials />
      <RecentBox />
      <Footer />

    </div>
  );
}

export default App;
