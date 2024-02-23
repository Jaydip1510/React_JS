import logo from './logo.svg';
import './App.css';
import Apiform from './Components/Apiform';
import Googlecomponent from './Components/Googlecomponent';
import FirebaseComponents from './FirebaseComponents';

function App() {
  return (
    <div>
      {/* <Googlecomponent/> */}
      {/* <h3 className='txt'>Axios CrudOperation</h3> */}
      {/* <Apiform/> */}
      <FirebaseComponents/>
    </div>
  );
}

export default App;
