
import './App.css';
import Increment from './components/Counter';
import Footer from './components/Footer';
import NavScrollExample from './components/Header';
import Section from './components/Section';
import Statecomponent from './components/Statecomponent';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Increment /><hr/>
      <NavScrollExample />
      <Section/>
      <Footer/><hr/>
      <Statecomponent />
    </div>
  );
}

export default App;
