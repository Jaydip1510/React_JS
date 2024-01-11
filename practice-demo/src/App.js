import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Table from './components/Table';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
      <Route path='/table' element={<Table/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
