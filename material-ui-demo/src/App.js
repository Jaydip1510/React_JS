import logo from './logo.svg';
import './App.css';
import Radiocomponent from './components/Radiocomponent';
import Textcomponent from './components/Textcomponent';
import Selectcomponent from './components/Selectcomponent';
import Transferlist from './components/Transferlist';
import Snakbarcomponent from './components/Snakbarcomponent';
import Transitioncomponent from './components/Transitioncomponet';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Radiocomponent/><hr />
        <Textcomponent/>
        <Selectcomponent/> */}
        {/* <Transferlist /> */}
        {/* <Snakbarcomponent/> */}
        <Transitioncomponent/>
        
      </header>
    </div>
  );
}

export default App;
