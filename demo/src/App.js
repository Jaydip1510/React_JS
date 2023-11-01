
import './App.css';
import Firstdemo from './components/Firstdemo';

import Classobject from './components/Classobject';
import FilterReduceFc from './components/FilterReduceFc';

const add = ()=>{
  let a = 20;
  const b = 20;
  let c = a + b;
  return c;
}

function App() {
let arr = [10,20,30,40,50,60,70,80,90];
let arr1 = arr.map((i)=>{
   return <li>{i}</li>
})

  return (
    <div className="App">
      <header className="App-header">
        {/* <h5>my first react demo</h5>
        <h5>Addition is :- {add()}</h5>
        <h5>Array is :- {arr[2]}</h5>
        <ul>
          {arr1}
        </ul>
        <Firstdemo /> */}
        <Classobject />
        <FilterReduceFc />
      </header>
    </div>
  );
}

export default App;
