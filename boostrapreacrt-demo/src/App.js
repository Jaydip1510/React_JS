import logo from './logo.svg';
import './App.css';
import Transferlist from './components/Transferlist';
import Selectcomponent from './components/Selectcomponent';
import Radiocomponent from './components/Radiocomponent';
import Textcomponent from './components/Textcomponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Transferlist/><hr/>
        <Selectcomponent/><hr/>
       <Radiocomponent/>
       <Textcomponent/>
      </header>
    </div>
  );
}

export default App;
