
import './App.css';
import Allmethod from './components/Allmethod';
import Classbasemethod from './components/Classbasemethod';
import Incrementdecrement from './components/Incrementdecrement';
import Statecomponent from './components/Statecomponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Incrementdecrement />
      <Statecomponent />
      <Allmethod />
      <Classbasemethod />
    </div>
  );
}

export default App;
