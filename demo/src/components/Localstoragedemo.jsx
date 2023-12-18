import React, { useState } from 'react'

const Localstoragedemo = () => {
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [salary,setSalary] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [qual,setQual] = useState([]);
    const submitData = (e) => {
        e.preventDefault();
        localStorage.setItem("UserName",name);
        localStorage.setItem("UserAge",age);
        localStorage.setItem("UserSalary",salary);
        localStorage.setItem("UserEmail",email);
        localStorage.setItem("UserAddress",address);
        localStorage.setItem("UserQual",JSON.stringify(qual));

        console.log("Name is:-"+localStorage.getItem("UserName"));
        console.log("UserAge is:-"+localStorage.getItem("UserAge"));
        console.log("UserSalary is:-"+localStorage.getItem("UserSalary"));
        console.log("UserEmail is:-"+localStorage.getItem("UserEmail"));
        console.log("UserAddress is:-"+localStorage.getItem("UserAddress"));
        console.log("Qualification is:-"+JSON.parse(localStorage.getItem("UserQual")));
    }
    const getQualData = (e)=>{
        qual.push(e.target.value);

    }
  return (
    <div className='App'>
      <form name="frm" onSubmit={submitData}>
      <table border={2} align='center' cellPadding={0} cellSpacing={0} style={{height:500,width:600}} >

        <label htmlFor="" style={{ marginRight: 10 }} className='mb-2'>Name:-</label>
        <input type="text" className='mt-5' style={{height:35,width:200}} name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' />
        <br/><br/> 

        <label htmlFor="" style={{ marginRight: 25 }} className='mb-2'>Age:-</label>
        <input type="text" name="age" style={{height:35,width:200}} value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter Your Age' />
        <br/><br/> 

        <label htmlFor="" style={{ marginRight: 10 }} className='mb-2'>Salary:-</label>
        <input type="text" name="salary" style={{height:35,width:200}} value={salary} onChange={(e)=>setSalary(e.target.value)} placeholder='Enter Your Salary' />
        <br/><br/> 

        <label htmlFor="" style={{ marginRight: 15 }} className='mb-2'>Email:-</label>
        <input type="email" name="email" style={{height:35,width:200}} value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' />
        <br/><br/> 

        <label htmlFor="" style={{ marginRight: 25 }}>Add:-</label>
        <textarea name="address" cols="30" rows="2" style={{height:35,width:200}} value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Enter Your address' ></textarea>
        <br/><br/> 

        <label htmlFor="">Qualification:-</label>
        <input type="checkbox"  name="q1" value="10th" defaultChecked="" onChange={getQualData} />
        10th
        <input type="checkbox" name="q1" value="12th" defaultChecked="" onChange={getQualData} />
        12th
        <input type="checkbox" name="q1" value="BCA" defaultChecked="" onChange={getQualData} />
        BCA
        <input type="checkbox" name="q1" value="MCA" defaultChecked="" onChange={getQualData} />
        MCA
        <br/><br/>
        <button type="submit" className="btn btn-success">Submit</button>
        </table>
      </form>
    </div>
  )
}

export default Localstoragedemo
