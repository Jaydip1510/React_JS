import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Redux from './components/Redux';
import Calculator from './components/Redux';
import FirstComponent from './components/FirstComponent';

function App() {
  const name = "jaydip makwana"
  return (
    <div className="App">
      {/* <h3>Redux Couter</h3>
      <Provider store={Store}>
       <Redux/>
      </Provider> */}
      <FirstComponent name={name}/>
    </div>
  );
}

export default App;
