import React, { useState } from 'react'

function Form() {
    const [input,setInput] = useState([]);
    const [empdata,setEmpdata] = useState();
    
    const saveData = (e) => {
        const name = e.name.value;
        const value = e.value.value
    }
  return (
    <div>
      <h3>User Form</h3>
      <form onSubmit={saveData} method='post'>

        <label htmlFor="">Name:-</label>
        <input type="text" name="name" placeholder='Enter Your Name' />
        <br/>
        <br/>
       
       <label htmlFor="">Age:-</label>
       <input type="number" name="age" placeholder='Enter Your Age' />
       <br/>
       <br/>

       <label htmlFor="">Gender:-</label>
       <input type="radio" name="g1"  value={'Male'} />Male&nbsp;&nbsp;
       <input type="radio" name="g1"  value={'Female'} />Female
       <br/>
       <br/>

       <label htmlFor="">Email:-</label>
       <input type="email" name="email" placeholder='Enter Your Email' />
       <br />
       <br />

       <label htmlFor="">Password:-</label>
       <input type="password" name="password" placeholder='Enter Your Password' />
       <br/>
       <br/>

       <input type="button" value="Save" /> 

      </form>
    </div>
  )
}

export default Form
