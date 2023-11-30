import logo from './logo.svg';
import './App.css';
import Transferlist from './components/Transferlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Transferlist/>
      </header>
    </div>
  );
}

export default App;
