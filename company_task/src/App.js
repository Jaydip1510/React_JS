import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BidDetails from './pages/Bid-detail';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/register" element={ <Signup/> } />
      <Route path="/" element={ <Login/> } />
      <Route path="/dashboard" element={ <Dashboard/> } />
      <Route path="/bid-details/:bidNumber" element={<BidDetails/>} />
    </Routes>
  </div>
  );
}

export default App;
