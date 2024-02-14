import React, { useEffect, useState } from 'react'

function ApiForm() {
   const [dt, setDt] = useState([]);
   const [uid, setUid] = useState();
   const [empdata, setEmpdata] = useState({
      name: "",
      age: "",
      salary: "",
      address: ""
   });
   useEffect(() => {
      fetch("http://localhost:3000/emp")
         .then(res => res.json())
         .then(json => setDt(json));

   });
   const handleChange = (e) => {
      const { name, value } = e.target;
      setEmpdata({ ...empdata, [name]: value });
   }
   const setData = () => {
      if (uid !== '') {
         //updated code
         fetch(`http://localhost:3000/emp/${uid}`, {
            method: 'PUT',
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(empdata)
         })
            .then(res => res.json())
            .then(json => console.log(json));
         
      } else {
         //inserted code
         fetch("http://localhost:3000/emp", {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(empdata)
         })
            .then(res => res.json())
            .then(json => console.log(json));
      }

   }
   const removeData = (id) => {
      fetch(`http://localhost:3000/emp/${id}`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(empdata)
      })
         .then(res => res.json())
         .then(json => console.log(json));
   }
   // const editData = (id) => {
   //    fetch(`http://localhost:3000/emp/${id}`)
   //       .then(res => res.json())
   //       .then(json =>setEmpdata(json));
   // }
   const editData = (id) => {
      fetch(`http://localhost:3000/emp/${id}`)
         .then(res => res.json())
         .then(json => {
            setUid(id);
            setEmpdata(json);
         });
   }
   return (
      <div>
         <form name="frm" onSubmit={setData} method='post'>
            <label>Name:-</label>
            <input type="text" id='name' name="name" value={empdata.name} onChange={handleChange} />
            <br /><br />

            <label htmlFor="">Age:-</label>
            <input type="text" id='age' name="age" value={empdata.age} onChange={handleChange} />
            <br /><br />

            <label htmlFor="">Salary:-</label>
            <input type='text' id='salary' name="salary" value={empdata.salary} onChange={handleChange} />
            <br /><br />

            <label htmlFor="">Address:-</label>
            <input type="text" id='address' name="address" value={empdata.address} onChange={handleChange} />
            <br /><br />
            <input type="submit" value={"Save"} />
         </form>
         <br />
         <br />
         <table border={2}>
            <tr>
               <td>Id</td>
               <td>Name</td>
               <td>Age</td>
               <td>Salary</td>
               <td>Address</td>
               <td>Action</td>
            </tr>
            {
               dt.map((i) => (
                  <tr>
                     <td>{i.id}</td>
                     <td>{i.name}</td>
                     <td>{i.age}</td>
                     <td>{i.salary}</td>
                     <td>{i.address}</td>
                     <td><button type='button' onClick={() => editData(i.id)}>Edit</button><button type='button' onClick={() => removeData(i.id)}>Delete</button></td>
                  </tr>
               ))
            }
         </table>
      </div>
   )
}

export default ApiForm
