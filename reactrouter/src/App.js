import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contect from './components/Contect';
import Navbar from './components/Navbar';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
       <h1>React Router</h1>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}>Home</Route>
         <Route path="/about/:id/:name" element={<About/>}>About</Route>
         <Route path="/contect" element={<Contect/>}>Contect</Route>
         <Route path="/blog" element={<Blog/>}>Contect</Route>
      </Routes>
    </div>
  );
}

export default App;
