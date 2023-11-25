
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
      <Incrementdecrement /><hr/>
      <Statecomponent /><hr/>
      <Allmethod /><hr/>
      <Classbasemethod />
    </div>
  );
}

export default App;
