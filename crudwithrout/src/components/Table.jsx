// import React, { useState, useEffect } from "react";

// function Table() {
//   const [empdata, setEmpdata] = useState([]);
//   const [alluserdata, setUserdata] = useState(
//     JSON.parse(localStorage.getItem("UserInfo"))
//   );

//   useEffect(() => {
//     // Fetch data or set data from localStorage
//     const dataFromLocalStorage =
//       JSON.parse(localStorage.getItem("UserInfo")) || [];
//     setEmpdata(dataFromLocalStorage);
//   }, []); // Empty dependency array ensures this runs only once on component mount
//   const deleteinfo = (index) => {
//     // Copy the current empdata array
//     const updatedData = [...empdata];
//     // Remove the element at the given index
//     updatedData.splice(index, 1);
//     // Update the state with the modified data
//     setEmpdata(updatedData);
//     // Update localStorage with the modified data
//     localStorage.setItem('UserInfo', JSON.stringify(updatedData));
//   };


//   return (
//     <div className="App">
//       <h5>User Table</h5>
//       <table border={2}>
//         <thead>
//           <tr style={{ textAlign: "center" }}>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Gender</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Country</th>
//             <th>Qualifications</th>
//             <th>Address</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {empdata.map((i, index) => (
//             <tr key={index} style={{ textAlign: "center" }}>
//               <td>{index + 1}</td>
//               <td>{i.name}</td>
//               <td>{i.g1}</td>
//               <td>{i.email}</td>
//               <td>{i.password}</td>
//               <td>{i.country}</td>
//               <td>{i.qual}</td>
//               <td>{i.address}</td>
//               <td>
//                 <button
//                   type="button"
//                   className="btn btn-danges bg-danger"
//                   onClick={() => deleteinfo(index)}
//                 >
//                   Delete
//                 </button>
//               </td>
//               {/* Include buttons or actions here if needed */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;
import React, { useState, useEffect } from "react";

function Table() {
  const [empdata, setEmpdata] = useState([]);
  const [qual, setQual] = useState([]);
  const [alluserdata, setUserdata] = useState(
    JSON.parse(localStorage.getItem("UserInfo"))
  );
  const [editIndex, setEditIndex] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    g1: "",
    email: "",
    password: "",
    country: "",
    qual: "",
    address: "",
  });

  useEffect(() => {
    const dataFromLocalStorage =
      JSON.parse(localStorage.getItem("UserInfo")) || [];
    setEmpdata(dataFromLocalStorage);
  }, []);

  const deleteinfo = (index) => {
    const updatedData = [...empdata];
    updatedData.splice(index, 1);
    setEmpdata(updatedData);
    localStorage.setItem('UserInfo', JSON.stringify(updatedData));
  };

  const editinfo = (index) => {
    setEditIndex(index);
    const editingData = empdata[index];
    setInputs(editingData);
  };

  const updateData = (e) => {
    e.preventDefault();
    const updatedData = [...empdata];
    updatedData[editIndex] = inputs;
    setEmpdata(updatedData);
    localStorage.setItem('UserInfo', JSON.stringify(updatedData));
    setEditIndex(null);
    setInputs({
      name: "",
      g1: "",
      email: "",
      password: "",
      country: "",
      qual: "",
      address: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  const setData = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name
    setInputs(i => ({ ...i, [name]: value }))
}
const getQualData = (e) => {
    //    const { value, checked } = e.target;
    //    if (checked) {
    //     setQual(prevQual => [...prevQual, value]); // Add the qualification if checked
    //    } else {
    //     setQual(prevQual => prevQual.filter(item => item !== value)); // Remove the qualification if unchecked
    //    }
    const { value, checked } = e.target;

    if (checked) {
        setQual((prevQual) => [...prevQual, value]);
        setInputs((prevInputs) => ({
            ...prevInputs,
            qual: [...(prevInputs.qual || []), value],
        }));
    } else {
        setQual((prevQual) => prevQual.filter((item) => item !== value));
        setInputs((prevInputs) => ({
            ...prevInputs,
            qual: (prevInputs.qual || []).filter((item) => item !== value),
        }));
    }
}

const searchDetail = (val) =>{
    if(val !== ''){
       let dt = empdata.filter((i)=>{
        if(i.name.includes(val)){
          return i;
        }
       })
       setEmpdata(dt);
    }else{
      setEmpdata(JSON.parse(localStorage.getItem('UserInfo')));
    }
}

const filterDetail = (val) => {
    if(val !== ''){
      let dt = empdata.filter((i)=>{
        if(i.name == val){
          return i;
        }
      })
      setEmpdata(dt);
    }else{
      setEmpdata(JSON.parse(localStorage.getItem('UserInfo')));
    }
}
  return (
    <div className="App">
      <h5>User Table</h5><br/>
      <input type="text" name="searchName" placeholder="Enter any want to search" onChange={(e)=>searchDetail(e.target.value)}/>&nbsp;&nbsp;&nbsp;&nbsp;
      <select name="Name" onChange={(i)=>filterDetail(i.target.value)}>
      <option>--Select Name--</option>
        {
          empdata.map((i)=>{
            return <option value={i.name}>{i.name}</option>
          })
        }
      </select>
      <br/><br/>
      <table border={2} className="table table-striped">
        <thead>
          <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Gender</td>
          <td>Email</td>
          <td>Password</td>
          <td>Country</td>
          <td>Qualification</td>
          <td>Address</td>
          <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {empdata.map((i, index) => (
            <tr key={index} style={{ textAlign: "center" }}>
              {/* Table data */}
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.g1}</td>
              <td>{i.email}</td>
              <td>{i.password}</td>
              <td>{i.country}</td>
              <td>{i.qual}</td>
              <td>{i.address}</td>
              <td>
                {editIndex === index ? (
                  <button onClick={updateData}>Update</button>
                ) : (
                  <button className="btn btn-success" onClick={() => editinfo(index)}>Edit</button>
                )}
                <button className="btn btn-danger" onClick={() => deleteinfo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Form for editing */}
      {editIndex !== null && (
        <form onSubmit={updateData}>
        <label htmlFor="" style={{ color: "blue", width: 100 }}>Name:-</label>
                        <input type="text" name="name" className='mt-5' style={{ height: 30, width: 200 }} value={inputs.name} onChange={setData} placeholder='Enter Your Name' />
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Gender:-</label>
                        <input type="radio" name="g1" id="" value="male" defaultValue="" checked={inputs.g1 === 'male'} onChange={setData} />
                        Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="g1" id="" checked={inputs.g1 === 'female'} value="female" defaultValue="" onChange={setData} />
                        Female
                        <br /><br />
                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Email:-</label>
                        <input type="email" style={{ height: 30, width: 190 }} name="email" id="" value={inputs.email} onChange={setData} placeholder='Enter Email Address' />
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Password:-</label>
                        <input type="password" style={{ height: 30, width: 190 }} name="password" id="" value={inputs.password} onChange={setData} placeholder='Enter Password' />
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Qualification:-</label>
                        <input type="checkbox" name="qual" value="12th" defaultChecked="" checked={inputs.qual && inputs.qual.includes('12th')} onChange={getQualData} />
                        12th&nbsp;&nbsp;
                        <input type="checkbox" name="qual" value="BCA" defaultChecked="" checked={inputs.qual && inputs.qual.includes('BCA')} onChange={getQualData} />
                        BCA&nbsp;&nbsp;
                        <input type="checkbox" name="qual" value="MCA" defaultChecked="" checked={inputs.qual && inputs.qual.includes('MCA')} onChange={getQualData} />
                        MCA
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Country:-</label>
                        <select name="country" style={{ width: 190 }} id="" value={inputs.country} required="" onChange={setData}>
                            <option value="">--Select Country--</option>
                            <option value="IND">IND</option>
                            <option value="USA">USA</option>
                            <option value="AUS">AUS</option>
                            <option value="SA">SA</option>
                        </select>
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Address:-</label>
                        <textarea name="address" rows={2} cols={20} value={inputs.address ? inputs.address : ''} defaultValue={''} onChange={setData} />
                        <br />
                        <br />
          <button className="btn btn-success" type="submit">Update</button>
        </form>
      )}
    </div>
  );
}

export default Table;
