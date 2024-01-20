import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [user, setUser] = useState({});
  const [allUserData, setAllUserData] = useState(JSON.parse(localStorage.getItem('UserDetail'))) || [];
  const navigate = useNavigate();

  const saveData = (e) => {
    e.preventDefault();
    const data = [...allUserData, user];
    localStorage.setItem('UserDetail', JSON.stringify(data));
    setUser({});
    setAllUserData(data);
    navigate('/usertable');
  };

  const setAllData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={saveData}>
        <label htmlFor="">User Name:-</label>
        <input type="text" name="name" value={user.name || ''} onChange={setAllData} />
        <br/><br/>

        <label htmlFor="">User Email:-</label>
        <input type="email" name="email" value={user.email || ''} onChange={setAllData} />
        <br/><br/>

        <label htmlFor="">User Password:-</label>
        <input type="password" name="password" value={user.password || ''} onChange={setAllData} />
        <br/><br/>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default RegistrationForm;