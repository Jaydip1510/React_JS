import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
     <Provider store={Store}>
      <Calculator/>
     </Provider>
    </div>
  );
}

export default App;
