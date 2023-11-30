import logo from './logo.svg';
import './App.css';
import Transferlist from './components/Transferlist';
import Selectcomponent from './components/Selectcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Transferlist/><hr/>
        <Selectcomponent/>
      </header>
    </div>
  );
}

export default App;
