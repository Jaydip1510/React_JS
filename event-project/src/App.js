import logo from './logo.svg';
import './App.css';
import React from 'react';
import Togglebuttoncomponent from './components/Togglebuttoncomponent';
import Arraycomponent from './components/Arraycomponent';
import Conditionalcomponent from './components/Conditionalcomponent';


class App extends React.Component {
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
      <div className="App">

        <Togglebuttoncomponent /><hr />
        <Arraycomponent number={num} />
        <h3>Emp Data</h3>
         <ul>
          {empdata}
         </ul><hr/>
        <Conditionalcomponent />
      </div>
    );
  }
}

export default App;
