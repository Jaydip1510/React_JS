import logo from './logo.svg';
import './App.css';
import ApiComponet from './Componets/ApiComponet';
import ApiForm from './Componets/ApiForm';
import FetchApi from './Componets/FetchApi';
import ApiData from './Componets/ApiData';
import ApiCrud from './Componets/ApiCrud';
import ApiImgcrud from './Componets/ApiImgcrud';


function App() {
  return (
    <div className="App">
      {/* <h3 className='txt'>API CrudDemo</h3> */}
      {/* <ApiComponet/> */}
      {/* <ApiForm/> */}
      <FetchApi/>
      {/* <ApiData/> */}
      {/* <ApiCrud/> */}
      {/* <ApiImgcrud/> */}
    </div>
  );
}

export default App;
