import React, { createContext, useContext } from 'react'
const ct = createContext()
function FirstComponent(props) {
  return (
    <div>
        <h3>First Component</h3>
        <ct.Provider value={props.name}>
          name is:- {props.name}
          <FourComponent/>
        </ct.Provider>
    </div>
  );
}
const SecondComponent = (props) => {
    return (
        <div>
            <h3>Second Component</h3>
           <ThirdComponent name={props.name}/>
        </div>
      );
}

const ThirdComponent = (props) => {
  return (
    <div>
        <h3>Third Component</h3>
       <FourComponent name={props.name}/>
    </div>
  );

}

const FourComponent = (props) => {
  return (
    <div>
        <h3>Four Component</h3>
          name={useContext(ct)}
    </div>
  );
}

export default FirstComponent
