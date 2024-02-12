import React, { useState } from 'react'

function ApiForm() {
     const [empdata,setEmpdata] = useState({
        name:"",
        age:"",
        salary:"",
        address:"",
     });
     const [id,setId] = useState("");

     const handleChange = (e) => {
          const {name,value} = e.target;
          setEmpdata({...empdata,[name]:value});
     }
     const setData = () => {
        fetch("http://localhost:3000/emp",{
          method: "POST",
          headers:{
             "Content-Type": "application/json"
          },
          body: JSON.stringify(empdata)
        })
           .then(res => res.json())
           .then(json =>console.log(json));
     }
  return (
    <div>
           <form name="frm" onSubmit={setData} method='post'>
            <label>Name:-</label>
            <input type="text" name="name" value={empdata.name} onChange={handleChange}/>
            <br /><br />

            <label htmlFor="">Age:-</label>
            <input type="text" name="age" value={empdata.age} onChange={handleChange}/>
            <br /><br />

            <label htmlFor="">Salary:-</label>
            <input type='text' name="salary" value={empdata.salary} onChange={handleChange}/>
            <br /><br />
            
            <label htmlFor="">Address:-</label>
            <input type="text" name="address" value={empdata.address} onChange={handleChange}/>
            <br/><br />
            <input type="submit" value={"Save"}/>
           </form>
    </div>
  )
}

export default ApiForm
