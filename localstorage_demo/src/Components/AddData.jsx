import React, { useEffect, useState } from 'react'

export default function AddData() {
    const [inputvalue,setInputValue] = useState({
        name:"",
        age:"",
        email:"",
        password:"",
        address:""
    })

    const [edit,setEdit] = useState(null);
    
    const [user,setUser] = useState(() => {
        const userData = localStorage.getItem("user");
        return userData ? JSON.parse(userData) : [];
    });

    const handlechange = (e) => {
        const {name,value} = e.target;
        setInputValue({...inputvalue,[name] : value});
    }
     useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
     },[user]);

    const handlesubmit = (e) => {
        e.preventDefault();
        if(edit === null){
            setUser([...user,inputvalue]);
            setInputValue({
               name:'',
               age:'',
               email:'',
               password:'',
               address:''
            })
        }else {  
            const updatauser = [...user];
            updatauser[edit] = inputvalue;
            setUser(updatauser);
            setInputValue({
               name:'',
               age:'',
               email:'',
               password:'',
               address:''
            });
            setEdit(null);
        }
          
    }
    const deleteItem = (id) =>{
        const updateuser = [...user];
        updateuser.splice(id, 1);
        setUser(updateuser);
    }
    const edituser = (id) => {
           setInputValue(user[id]);
           setEdit(id);
    }
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>

        <label htmlFor="">Name:-</label>
        <input type="text" name="name" value={inputvalue.name} onChange={handlechange} />
        <br /><br />

        <label htmlFor="">Age:-</label>
        <input type="text" name="age" value={inputvalue.age} onChange={handlechange} />
        <br /><br />

        <label htmlFor="">Email:-</label>
        <input type="email" name="email" value={inputvalue.email} onChange={handlechange} />
        <br /><br />

        <label htmlFor="">Password:-</label>
        <input type="text" name="password" value={inputvalue.password} onChange={handlechange} />
        <br /><br />

        <label htmlFor="">Address:-</label>
        <input type="text" name="address" value={inputvalue.address} onChange={handlechange} />
        <br /><br />
        {
            edit === null ? (
                <button type='submit'>AddData</button>
            ) :
            (
                <button>UpdateData</button>
            )
        }
        
      </form>
      <br /><br />
      <table border={2}>
         <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>Action</th>
         </thead>
         <tbody>
            {
                user.map((u,i) =>(
                    <tr>
                        <td>{i + 1}</td>
                        <td>{u.name}</td>
                        <td>{u.age}</td>
                        <td>{u.email}</td>
                        <td>{u.password}</td>
                        <td>{u.address}</td>
                        <td><button onClick={() => edituser(i)}>Edit</button><button onClick={() => deleteItem()}>Delete</button></td>
                    </tr>
                ))
            }
         </tbody>
      </table>
    </div>
  )
}
