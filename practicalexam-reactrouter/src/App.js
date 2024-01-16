import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Table from './components/Table';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/form" element={<Form/>}>Form</Route>
        <Route path="/table" element={<Table/>}>Table</Route>
      </Routes>
    </div>
  );
}

export default App;
