import logo from './logo.svg';
import './App.css';
import Firstdemo from './components/Firstdemo';
import Seconddemo from './components/Seconddemo';

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
        <h3>my first react demo</h3>
        <h4>Addition is :- {add()}</h4>
        <h4>Array is :- {arr [2]}</h4>
        <ul>
          {arr1}
        </ul>
        <Firstdemo />
        <Seconddemo />
      </header>
    </div>
  );
}

export default App;
