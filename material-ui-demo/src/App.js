import logo from './logo.svg';
import './App.css';
import Radiocomponent from './components/Radiocomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Radiocomponent/>
      </header>
    </div>
  );
}

export default App;
