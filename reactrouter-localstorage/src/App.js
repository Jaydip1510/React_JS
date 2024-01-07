import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Table from './components/Table';
function App() {
  return (
    <div className="App">
      <h3>User Form</h3>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/form" element={<Form/>}>Form</Route>
        <Route path='/table' element={<Table/>}>Table</Route>
      </Routes>
    </div>
  );
}

export default App;