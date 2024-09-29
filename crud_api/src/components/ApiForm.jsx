import React, { useEffect, useState } from 'react'

export default function ApiForm() {
    const [dt, setDt] = useState([]);
    const [inputvalue,setInputValue] = useState({
        name:'',
        age:"",
        email:"",
        password:"",
        address:""
    })

    const handlechange = (e) => {
        const {name,value} = e.target;
        setInputValue({...inputvalue,[name]:value});
    }
    const fetchitem = async () => {
        try {
           const res = await fetch("http://localhost:3000/user");
           const data = await res.json();
           setDt(data);
        } catch (error) {
           console.log(error.message);
        }
     }
     useEffect(() => {
        fetchitem();
     }, []);

     const setData = () => {
        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputvalue)
         })
            .then(res => res.json())
            .then(newData => {
               // Update state with the new data
               setDt([...dt, newData]);
            })
            .catch(error => console.error('Error inserting data:', error));
            fetchitem();
     }
  return (
    <div>
      <form action="" onSubmit={setData} method='post'>

        <label htmlFor="">Name :-</label>
        <input type="text" name="name" value={inputvalue.name} onChange={handlechange} />
        <br /><br />

        <label htmlFor="">Age :-</label>
        <input type="text" name="age" value={inputvalue.age} onChange={handlechange}  />
        <br /><br />

        <label htmlFor="">Email :-</label>
        <input type="email" name="email"   value={inputvalue.email} onChange={handlechange}/>
        <br /><br />

        <label htmlFor="">Password :-</label>
        <input type="text" name="password"  value={inputvalue.password} onChange={handlechange}/>
        <br /><br />

        <label htmlFor="">Address :-</label>
        <input type="text" name="address" value={inputvalue.address} onChange={handlechange}/>
        <br /><br />

        <button type='submit'>AddData</button>
      </form>
    </div>
  )
}
