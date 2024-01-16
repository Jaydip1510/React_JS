import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li>
            <Link to="/" >Home</Link>
        </li>
        <li>
            <Link to="/form">Form</Link>
        </li>
        <li>
            <Link to="/table">Table</Link>
        </li>
      </ul>
      <button className='btn btn-success' type='button' onClick={() =>navigate(-1)}>Back</button>&nbsp;&nbsp;
      <button className='btn btn-info' type='button' onClick={() =>navigate(1)}>Next</button>
    </div>
  )
}

export default Navbar
