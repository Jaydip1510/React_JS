import logo from './logo.svg';
import './App.css';
import IncrementDecrement from './components/IncrementDecrement';
import AddData from './components/AddData';
function App() {
  return (
    <div className="App">
     <h3 style={{color:"blue",fontFamily:"cursive"}}>ReduxToolkit</h3>
     <AddData/>
     {/* <IncrementDecrement/> */}
    </div>
  );
}

export default App;
