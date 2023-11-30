import logo from './logo.svg';
import './App.css';
import Buttongroupcomponent from './components/Buttongroupcomponent';
import Validationcomponent from './components/Validationcomponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
       {/* <Buttongroupcomponent/> */}
       <Validationcomponent/>
      </header>
    </div>
  );
}

export default App;
