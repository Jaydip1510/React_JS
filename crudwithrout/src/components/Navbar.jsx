import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const naviget = useNavigate();
  return (
    <div>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/form">Form</Link>
        </li>
        <li>
            <Link to="/usertable">Table</Link>
        </li>
       
      </ul>
      <button className='btn btn-success' onClick={()=>naviget(-1)}>Back</button>&nbsp;
      <button className='btn btn-primary' onClick={()=>naviget(1)}>Next</button>
    </div>
  )
}

export default Navbar