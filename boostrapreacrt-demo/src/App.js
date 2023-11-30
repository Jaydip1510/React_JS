import logo from './logo.svg';
import './App.css';
import Carouselcomponent from './components/Carouselcomponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Carouselcomponent/>
      </header>
    </div>
  );
}

export default App;
