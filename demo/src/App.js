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
import Dataargument from './components/Dataargument';
import Listcomponent from './components/Listcomponent';
import Userefcomponent from './components/Userefcomponent';
import Buttoncomponent from './components/Buttoncomponent';
import Transitionscomponent from './components/Transitionscomponent';
import Formcontrollcomponent from './components/Formcontrollcomponent';
import Formfunctionbasecomponent from './components/Formfunctionbasecomponent';
import Formvalidationcomponent from './components/Formvalidationcomponent';
import Formvalidation from './components/Formvalidation';
import Materialtransitioncomponent from './components/Materialtransitioncomponent';
import Formvalidationcontrol from './components/Formvalidationcontrol';





const add = () => {
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
  render() {
    const number = [1, 2, 3, 4, 5];
    const listitem = number.map((number) =>
      <li>{number}</li>
    );
    const emplist = [
      {
        id: 1204,
        name: "jaydip"
      },
      {
        id: 1510,
        name: "alpesh"
      },
      {
        id: 3075,
        name: "raj"
      }
    ]
    const empdata = emplist.map((i) => {
      return <li key={i.toString()}>{i.name}</li>
    })
    const num = [10, 20, 30, 40, 50,];
    return (
      <div>
       
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
          {/* <Statefull /> */}
          {/* <Statefunction /> */}

          {/* <Componentlifecycle myName="makwana" /> */}
          {/* <Dataargument />

          <h3>List & Keys</h3>
         <ul>
          {listitem}
         </ul>
         <h3>Emp Data</h3>
         <ul>
          {empdata}
         </ul>
         <Listcomponent number = {num} />
         <Userefcomponent/><br/> */}
          {/* <Buttoncomponent /> */}
          {/* <Transitionscomponent/> */}
          {/* <h3>{data}</h3>
       <button onClick={updateData}>Updata data</button> 
       <h3>High Order Components</h3>
       <h3>name is:-{this.props.name}</h3> */}
       {/* <Formcontrollcomponent /> */}
       {/* <Formfunctionbasecomponent /> */}
       {/* <Formvalidationcomponent /> */}
       {/* <Formvalidation /> */}
      {/* <Materialtransitioncomponent/> */}
      <Formvalidationcontrol />

       
      </div>
    );
  }
}

export default Hocomponent(App);
