import React, { useState } from 'react';

const Localstorege = () => {

   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');

   const handle = () => {
      localStorage.setItem('Name', name);
      localStorage.setItem('Password', pwd);
   };
   const remove = () => {
      localStorage.removeItem('Name');
      localStorage.removeItem('Password');
   };
   return (
      <div className="App">
        <table border={2} align='center' className='mt-5 bg-warning' cellPadding={5} cellSpacing={5} style={{height:100,width:400}}>
         <label htmlFor="">Name:-</label>
         <input
            style={{height:30,width:200,marginRight:20,marginLeft:20}}
            className='mt-5'
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         /><br/><br/>
         <label htmlFor="">password:-</label>
         <input
            style={{height:30,width:200,marginRight:35,marginLeft:10}}
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
         /><br/><br/>
         <div>
            <button onClick={handle}>Done</button>
         </div><br/><br/>
         {localStorage.getItem('Name') && (
            <div>
               Name: <p>{localStorage.getItem('Name')}</p>
            </div>
         )}
         {localStorage.getItem('Password') && (
            <div>
               Password: <p>{localStorage.getItem('Password')}</p>
            </div>
         )}
         <div>
            <button className='mb-5' onClick={remove}>Remove</button>
         </div>
        </table>
      </div>
   );
};
export default Localstorege;