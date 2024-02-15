import React, { useEffect, useState } from 'react'

function ApiForm() {
   const [dt, setDt] = useState([]);
   const [eid, setEid] = useState();
   const [empdata, setEmpdata] = useState({
      name: "",
      age: "",
      salary: "",
      address: ""
   });
   const handleChange = (e) => {
      const { name, value } = e.target;
      setEmpdata({ ...empdata, [name]: value });
   }
   useEffect(() => {
      fetch("http://localhost:3000/emp")
         .then(res => res.json())
         .then(json => setDt(json));
   }, [handleChange]);

   // const setData = () => {
   //    if(eid != ''){
   //       //update data
   //       fetch("http://localhost:3000/emp/"+eid, {
   //          method: 'PUT',
   //          headers: {
   //             "Content-Type": "application/json"
   //          },
   //          body: JSON.stringify(empdata)
   //       })
   //       .then(res => res.json())
   //       .then(json => console.log(json));
   //    }
   //    else{
   //       fetch("http://localhost:3000/emp", {
   //       method: "POST",
   //       headers: {
   //          "Content-Type": "application/json"
   //       },
   //       body: JSON.stringify(empdata)
   //    })
   //       .then(res => res.json())
   //       .then(json => console.log(json));
   //    }
   // }
   const setData = () => {
      if (eid) {
         // Update data
         fetch(`http://localhost:3000/emp/${eid}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(empdata)
         })
            .then(res => res.json())
            .then(json => console.log(json));
      } else {
         // Insert data
         fetch('http://localhost:3000/emp', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(empdata)
         })
            .then(res => res.json())
            .then(newData => {
               // Update state with the new data
               setDt([...dt, newData]);
            })
            .catch(error => console.error('Error inserting data:', error));
      }
   }
   const removeData = (id) => {
      fetch("http://localhost:3000/emp/" + id, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(empdata)
      })
         .then(res => res.json())
         .then(json => console.log(json));
   }
   const editData = (id) => {
      setEid(id)
      fetch("http://localhost:3000/emp/" + id, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json"
         },
      })
         .then(res => res.json())
         .then(json => setEmpdata(json));
   }
   return (
      <div>
         <div className='frm2'>
            <div className='frm'>
               <form name="frm" className='fm1' onSubmit={setData} method='post'>
                  <label>Name:-</label>
                  <input type="text" className='t1' id='name' name="name" value={empdata.name} onChange={handleChange} />
                  <br /><br />

                  <label htmlFor="">Age:-</label>
                  <input type="text" className='t2' id='age' name="age" value={empdata.age} onChange={handleChange} />
                  <br /><br />

                  <label htmlFor="">Salary:-</label>
                  <input type='text' className='t3' id='salary' name="salary" value={empdata.salary} onChange={handleChange} />
                  <br /><br />

                  <label htmlFor="">Add:-</label>
                  <input type="text" className='t4' id='address' name="address" value={empdata.address} onChange={handleChange} />
                  <br /><br />
                  <input type="submit" className='btn btn-outline-warning fw-bold' value={"Save"} />
               </form>
            </div>
         </div>
         <br />
         <br />
         <table border={2} className='table table-striped'>
            <thead>
            <tr className='fw-bold'>
               <td>Id</td>
               <td>Name</td>
               <td>Age</td>
               <td>Salary</td>
               <td>Address</td>
               <td>Action</td>
            </tr>
            </thead>
            <tbody>
            {
               dt.map((i) => (
                  <tr>
                     <td>{i.id}</td>
                     <td>{i.name}</td>
                     <td>{i.age}</td>
                     <td>{i.salary}</td>
                     <td>{i.address}</td>
                     <td><button type='button' className='btn btn-outline-primary fw-bold' onClick={() => editData(i.id)}>Edit</button>&nbsp;&nbsp;<button type='button' className='btn btn-danger fw-bold' onClick={() => removeData(i.id)}>Delete</button></td>
                  </tr>
               ))
            }
            </tbody>
         </table>
      </div>
   )
}

export default ApiForm
