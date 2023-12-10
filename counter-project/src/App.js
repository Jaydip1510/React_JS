import logo from './logo.svg';
import './App.css';
import Incrementdecrement from './components/Incrementdecrement';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Incrementdecrement />
      </header>
    </div>
  );
}

export default App;
