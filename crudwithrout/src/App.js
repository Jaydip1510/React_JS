import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Formfunctionbasecomponent from './components/Form';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
         <h5>Crud with Router</h5>
         <Navbar/>
         <Routes>            
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/form" element={<Formfunctionbasecomponent/>}>Form</Route>
          <Route path="/usertable" element={<Table/>}>Table</Route>
        </Routes>
    </div>
  );
}

export default App;
