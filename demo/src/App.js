import './App.css';
import Firstdemo from './components/Firstdemo';
import React from 'react';
import Classobject from './components/Classobject';
import FilterReduceFc from './components/FilterReduceFc';
import FormComponent from './components/Form';
import Folderjsx from './components/Folderjsx';
import PropsExample from './components/Props';
import Statefull from './components/Statefull';
import Statefunction from './components/Statefunction';
import Componentlifecycle from './components/Componentlifecycle';
import Hocomponent from './components/Hocomponent';
import {Transeferlist} from './components/Transeferlist';



const add = ()=>{
  let a = 20;
  const b = 20;
  let c = a + b;
  return c;
}

class App extends React.Component {
// let arr = [10,20,30,40,50,60,70,80,90];
// let arr1 = arr.map((i)=>{
//    return <li>{i}</li>
// })

// const [data,setData] =useState("jaydip")
// const updateData = () =>{
//   setData("makwana")
// }
  render(){
  return (
    <div className="App">
      <header className="App-header">
         {/* <h5>my first react demo</h5>
        <h5>Addition is :- {add()}</h5>
        <h5>Array is :- {arr[2]}</h5>
        <ul>
          {arr1}
        </ul> */}
         {/* <Firstdemo />  */}
         {/* <FilterReduceFc /> 
         <FormComponent />  */}
         {/* <Classobject /> */}
        
        {/* <Folderjsx /> */}
        {/* <PropsExample /> */}
        {/* <Statefull />
        <Statefunction />
        
        <Componentlifecycle myName="makwana" /> */}
        <Transeferlist />
        {/* <TransferList /> */}
        {/* <h3>{data}</h3>
       <button onClick={updateData}>Updata data</button> 
       {/* <h3>High Order Components</h3>
       <h3>name is:-{this.props.name}</h3>
        */} 

      </header>
    </div>
  );
 }
}

export default Hocomponent (App);
