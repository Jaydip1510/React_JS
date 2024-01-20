import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegistrationForm = () => {
    const [user,setUser] = useState({})
    const [allUserData,setAllUserData] = useState([])
    const navigate = useNavigate();
    const saveData = (i) => {
       i.preventDefault();
      const data = [...allUserData,user];
       localStorage.setItem('UsetDetail',JSON.stringify(data));
       setUser({});
       setAllUserData(data)
       navigate('/usertable');
       
    }
    const setAllData = (i) => {
        const name = i.target.name;
        const val = i.target.value;
        setUser(i =>({...i,[name]:val}))
    }
  return (
    <div>
          <form action='#' onSubmit={saveData}>
            <label htmlFor="">User Name:-</label>
            <input type="text" name="name" value={user.name} onChange={setAllData} />
            <br/><br/>

            <label htmlFor="">User Email:-</label>
            <input type="email" name="email" value={user.email} onChange={setAllData} />
            <br/><br/>

            <label htmlFor="">User Password:-</label>
            <input type="password" name="password" value={user.password} onChange={setAllData} />
            <br/><br/>
            <input type="submit" value="Sava"/>

          </form>
    </div>
  )
}

export default RegistrationForm
